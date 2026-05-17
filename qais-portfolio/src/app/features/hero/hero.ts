import { Component, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  mouseX = signal(0);
  mouseY = signal(0);

  readonly roles = ['.NET Full-Stack Developer', 'Angular Developer', 'Microservices Engineer', 'Clean Architecture Advocate'];
  currentRole = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId: any;

  ngOnInit(): void { this.typeWriter(); }
  ngOnDestroy(): void { clearTimeout(this.timerId); }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    this.mouseX.set((e.clientX - cx) / cx * 18);
    this.mouseY.set((e.clientY - cy) / cy * 10);
  }

  private typeWriter(): void {
    const role = this.roles[this.roleIndex];
    if (!this.isDeleting) {
      this.currentRole.set(role.substring(0, ++this.charIndex));
      if (this.charIndex === role.length) { this.isDeleting = true; this.timerId = setTimeout(() => this.typeWriter(), 2000); return; }
    } else {
      this.currentRole.set(role.substring(0, --this.charIndex));
      if (this.charIndex === 0) { this.isDeleting = false; this.roleIndex = (this.roleIndex + 1) % this.roles.length; }
    }
    this.timerId = setTimeout(() => this.typeWriter(), this.isDeleting ? 60 : 100);
  }

  scrollDown(): void {
    this.scrollTo('about');
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
