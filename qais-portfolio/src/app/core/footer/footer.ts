import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
