import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  theme = inject(ThemeService);
  isScrolled = signal(false);
  menuOpen   = signal(false);
  activeSection = signal('hero');

  navLinks = [
    { label: 'About',            href: '#about'     },
    { label: 'Experience',       href: '#experience' },
    { label: 'Skills',           href: '#skills'     },
    { label: 'Personal Projects',href: '#projects'   },
    { label: 'Contact',          href: '#contact'    },
  ];

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
}
