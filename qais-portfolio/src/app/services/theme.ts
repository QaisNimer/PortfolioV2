import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _isDark = signal<boolean>(true);
  isDark = this._isDark.asReadonly();

  constructor() {
    const saved = this.canUseStorage() ? localStorage.getItem('theme') : null;
    const dark = saved !== 'light';
    this._isDark.set(dark);
    this.applyTheme(dark);
  }

  toggle(): void {
    const next = !this._isDark();
    this._isDark.set(next);
    if (this.canUseStorage()) {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }
    this.applyTheme(next);
  }

  private applyTheme(dark: boolean): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    }
  }

  private canUseStorage(): boolean {
    return typeof localStorage !== 'undefined'
      && typeof localStorage.getItem === 'function'
      && typeof localStorage.setItem === 'function';
  }
}
