import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorComponent } from './shared/components/cursor/cursor';
import { NavbarComponent } from './core/navbar/navbar';
import { FooterComponent } from './core/footer/footer';
import { MusicService } from './services/music';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursorComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly music = inject(MusicService);

  constructor() {
    this.music.init();
  }
}
