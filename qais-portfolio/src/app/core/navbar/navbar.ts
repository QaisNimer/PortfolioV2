import { Component, HostListener, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';
import { MusicService } from '../../services/music';

const MUSIC_TUTORIAL_KEY = 'portfolio-music-tutorial-seen';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  theme = inject(ThemeService);
  music = inject(MusicService);
  isScrolled = signal(false);
  menuOpen   = signal(false);
  activeSection = signal('hero');
  showMusicTutorial = signal(false);
  private musicTutorialTimeout: ReturnType<typeof setTimeout> | null = null;

  navLinks = [
    { label: 'About',            href: '#about'     },
    { label: 'Experience',       href: '#experience' },
    { label: 'Skills',           href: '#skills'     },
    { label: 'Personal Projects',href: '#projects'   },
    { label: 'Contact',          href: '#contact'    },
  ];

  ngOnInit(): void {
    if (this.canUseStorage() && localStorage.getItem(MUSIC_TUTORIAL_KEY) === 'true') {
      return;
    }

    this.showMusicTutorial.set(true);
    this.musicTutorialTimeout = setTimeout(() => {
      this.dismissMusicTutorial();
    }, 12000);
  }

  ngOnDestroy(): void {
    this.clearMusicTutorialTimeout();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const ids = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    for (const id of [...ids].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('hero');
  }

  scrollTo(href: string): void {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  toggleMusic(): void {
    this.dismissMusicTutorial();
    this.music.toggle();
  }

  dismissMusicTutorial(event?: Event): void {
    event?.stopPropagation();
    this.showMusicTutorial.set(false);
    this.clearMusicTutorialTimeout();

    if (this.canUseStorage()) {
      localStorage.setItem(MUSIC_TUTORIAL_KEY, 'true');
    }
  }

  private clearMusicTutorialTimeout(): void {
    if (this.musicTutorialTimeout) {
      clearTimeout(this.musicTutorialTimeout);
      this.musicTutorialTimeout = null;
    }
  }

  private canUseStorage(): boolean {
    return typeof localStorage !== 'undefined'
      && typeof localStorage.getItem === 'function'
      && typeof localStorage.setItem === 'function';
  }
}
