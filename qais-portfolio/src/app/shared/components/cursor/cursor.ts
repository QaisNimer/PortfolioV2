import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: './cursor.html',
  styleUrl: './cursor.css'
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dot', { static: true }) private dotRef!: ElementRef<HTMLElement>;
  @ViewChild('ring', { static: true }) private ringRef!: ElementRef<HTMLElement>;

  private animFrameId = 0;
  private targetX = 0;
  private targetY = 0;
  private ringX = 0;
  private ringY = 0;
  private removeListeners: Array<() => void> = [];

  constructor(
    private readonly ngZone: NgZone,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.removeListeners = [
        this.renderer.listen('document', 'mousemove', (event: MouseEvent) => this.onMouseMove(event)),
        this.renderer.listen('document', 'mousedown', () => this.setClicking(true)),
        this.renderer.listen('document', 'mouseup', () => this.setClicking(false)),
        this.renderer.listen('document', 'mouseover', (event: MouseEvent) => this.onMouseOver(event))
      ];

      this.animate();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animFrameId);
    this.removeListeners.forEach(removeListener => removeListener());
  }

  private onMouseMove(e: MouseEvent): void {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    this.setPosition(this.dotRef.nativeElement, e.clientX, e.clientY);
  }

  private onMouseOver(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    const isHovering = !!(
      target.closest('a') ||
      target.closest('button') ||
      target.closest('.hoverable')
    );

    this.setClass(this.ringRef.nativeElement, 'hovering', isHovering);
  }

  private animate(): void {
    this.ringX += (this.targetX - this.ringX) * 0.12;
    this.ringY += (this.targetY - this.ringY) * 0.12;
    this.setPosition(this.ringRef.nativeElement, this.ringX, this.ringY);
    this.animFrameId = requestAnimationFrame(() => this.animate());
  }

  private setClicking(isClicking: boolean): void {
    this.setClass(this.dotRef.nativeElement, 'clicking', isClicking);
    this.setClass(this.ringRef.nativeElement, 'clicking', isClicking);
  }

  private setPosition(element: HTMLElement, x: number, y: number): void {
    this.renderer.setStyle(element, 'left', `${x}px`);
    this.renderer.setStyle(element, 'top', `${y}px`);
  }

  private setClass(element: HTMLElement, className: string, enabled: boolean): void {
    if (enabled) {
      this.renderer.addClass(element, className);
      return;
    }

    this.renderer.removeClass(element, className);
  }
}
