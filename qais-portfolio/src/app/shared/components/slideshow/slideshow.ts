import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.html',
  styleUrl: './slideshow.css',
})
export class SlideshowComponent implements OnChanges {
  @Input() images: string[] = [];
  @Input() title = 'Project gallery';

  activeIndex = 0;

  ngOnChanges(): void {
    if (this.activeIndex >= this.images.length) {
      this.activeIndex = 0;
    }
  }

  currentImage(): string {
    return this.images[this.activeIndex] ?? '';
  }

  previous(): void {
    if (!this.images.length) return;
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    if (!this.images.length) return;
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  goTo(index: number): void {
    this.activeIndex = index;
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.images.length) return;
    if (event.key === 'ArrowLeft') this.previous();
    if (event.key === 'ArrowRight') this.next();
  }
}
