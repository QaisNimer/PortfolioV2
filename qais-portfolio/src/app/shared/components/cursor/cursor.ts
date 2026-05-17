import { Component, OnInit, OnDestroy, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor.html',
  styleUrl: './cursor.css'
})
export class CursorComponent implements OnInit, OnDestroy {
  dotX   = 0; dotY   = 0;
  ringX  = 0; ringY  = 0;
  isHovering = false;
  isClicking = false;

  private animFrameId = 0;
  private targetX = 0;
  private targetY = 0;

  ngOnInit(): void {
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animFrameId);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    this.dotX = e.clientX;
    this.dotY = e.clientY;
  }

  @HostListener('document:mousedown')
  onMouseDown(): void { this.isClicking = true; }

  @HostListener('document:mouseup')
  onMouseUp(): void { this.isClicking = false; }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    this.isHovering = !!(
      target.closest('a') ||
      target.closest('button') ||
      target.closest('.hoverable')
    );
  }

  private animate(): void {
    // Smooth ring follows with lag
    this.ringX += (this.targetX - this.ringX) * 0.12;
    this.ringY += (this.targetY - this.ringY) * 0.12;
    this.animFrameId = requestAnimationFrame(() => this.animate());
  }
}
