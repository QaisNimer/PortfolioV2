import { Injectable, signal } from '@angular/core';

const AUDIO_SRC = '/audio/MoodSong.mp3';
const MUSIC_STATE_KEY = 'portfolio-music-state';
const MUSIC_TIME_KEY = 'portfolio-music-time';
const DEFAULT_VOLUME = 0.3;

type MusicState = 'playing' | 'paused';

@Injectable({ providedIn: 'root' })
export class MusicService {
  private readonly _isPlaying = signal(false);
  private readonly _isBlocked = signal(false);
  private readonly _isUnavailable = signal(false);
  private audio: HTMLAudioElement | null = null;
  private initialized = false;
  private waitingForInteraction = false;
  private lastSavedTime = 0;
  private readonly interactionEvents = ['pointerdown', 'touchstart', 'keydown'] as const;
  private readonly playAfterInteraction = (event: Event): void => {
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest('[data-music-toggle]')) {
      return;
    }

    void this.play('playing');
  };

  readonly isPlaying = this._isPlaying.asReadonly();
  readonly isBlocked = this._isBlocked.asReadonly();
  readonly isUnavailable = this._isUnavailable.asReadonly();

  init(): void {
    if (this.initialized || !this.canUseAudio()) {
      return;
    }

    this.initialized = true;
    this.audio = new Audio(AUDIO_SRC);
    this.audio.loop = true;
    this.audio.preload = 'auto';
    this.audio.volume = DEFAULT_VOLUME;

    this.audio.addEventListener('play', () => {
      this._isPlaying.set(true);
      this._isBlocked.set(false);
      this._isUnavailable.set(false);
    });

    this.audio.addEventListener('pause', () => {
      this._isPlaying.set(false);
      this.storeCurrentTime();
    });

    this.audio.addEventListener('error', () => {
      this._isPlaying.set(false);
      this._isBlocked.set(false);
      this._isUnavailable.set(true);
    });

    this.audio.addEventListener('loadedmetadata', () => {
      this.restoreCurrentTime();
    });

    this.audio.addEventListener('timeupdate', () => {
      this.storeCurrentTime();
    });

    this.restoreCurrentTime();

    if (this.getStoredState() !== 'paused') {
      void this.play('playing');
    }
  }

  toggle(): void {
    if (!this.initialized) {
      this.init();
    }

    if (this._isPlaying()) {
      this.pause();
      return;
    }

    this.stopWaitingForInteraction();
    void this.play('playing');
  }

  title(): string {
    if (this._isUnavailable()) {
      return 'Music file missing';
    }

    if (this._isBlocked()) {
      return 'Music blocked by browser, click anywhere to play';
    }

    return this._isPlaying() ? 'Pause music' : 'Play music';
  }

  private async play(stateToSave: MusicState): Promise<void> {
    if (!this.audio) {
      return;
    }

    try {
      await this.audio.play();
      this.stopWaitingForInteraction();
      this.setStoredState(stateToSave);
    } catch {
      this._isPlaying.set(false);
      this._isBlocked.set(true);
      this.waitForInteraction();
    }
  }

  private pause(): void {
    this.audio?.pause();
    this._isPlaying.set(false);
    this._isBlocked.set(false);
    this.stopWaitingForInteraction();
    this.storeCurrentTime();
    this.setStoredState('paused');
  }

  private waitForInteraction(): void {
    if (this.waitingForInteraction || this.getStoredState() === 'paused' || typeof document === 'undefined') {
      return;
    }

    this.waitingForInteraction = true;
    this.interactionEvents.forEach((eventName) => {
      document.addEventListener(eventName, this.playAfterInteraction, { capture: true, passive: true });
    });
  }

  private stopWaitingForInteraction(): void {
    if (!this.waitingForInteraction || typeof document === 'undefined') {
      return;
    }

    this.waitingForInteraction = false;
    this.interactionEvents.forEach((eventName) => {
      document.removeEventListener(eventName, this.playAfterInteraction, { capture: true });
    });
  }

  private restoreCurrentTime(): void {
    if (!this.audio) {
      return;
    }

    const savedTime = this.getStoredTime();
    if (savedTime <= 0) {
      return;
    }

    try {
      if (!Number.isFinite(this.audio.duration) || savedTime < this.audio.duration - 1) {
        this.audio.currentTime = savedTime;
      }
    } catch {
      // Some browsers reject seeking before metadata is ready.
    }
  }

  private storeCurrentTime(): void {
    if (!this.audio || !this.canUseStorage()) {
      return;
    }

    const currentTime = Math.floor(this.audio.currentTime);
    if (Math.abs(currentTime - this.lastSavedTime) < 3) {
      return;
    }

    this.lastSavedTime = currentTime;
    localStorage.setItem(MUSIC_TIME_KEY, String(currentTime));
  }

  private getStoredState(): MusicState | null {
    if (!this.canUseStorage()) {
      return null;
    }

    const stored = localStorage.getItem(MUSIC_STATE_KEY);
    return stored === 'paused' || stored === 'playing' ? stored : null;
  }

  private setStoredState(state: MusicState): void {
    if (this.canUseStorage()) {
      localStorage.setItem(MUSIC_STATE_KEY, state);
    }
  }

  private getStoredTime(): number {
    if (!this.canUseStorage()) {
      return 0;
    }

    const stored = Number(localStorage.getItem(MUSIC_TIME_KEY));
    return Number.isFinite(stored) && stored > 0 ? stored : 0;
  }

  private canUseStorage(): boolean {
    return typeof localStorage !== 'undefined'
      && typeof localStorage.getItem === 'function'
      && typeof localStorage.setItem === 'function';
  }

  private canUseAudio(): boolean {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';

    return typeof Audio !== 'undefined'
      && typeof window !== 'undefined'
      && !userAgent.includes('jsdom');
  }
}
