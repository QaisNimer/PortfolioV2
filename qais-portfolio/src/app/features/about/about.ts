import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly metrics = [
    { value: '2+', label: 'Enterprise roles' },
    { value: '5', label: 'Built projects' },
    { value: '.NET', label: 'Core specialty' },
  ];

  readonly focusAreas = [
    {
      icon: 'fa-solid fa-layer-group',
      title: 'Modular backend systems',
      text: 'ASP.NET Core services, clean boundaries, reusable business modules, and SQL Server data flows.',
    },
    {
      icon: 'fa-solid fa-diagram-project',
      title: 'Architecture-first delivery',
      text: 'Clean/Onion Architecture, repositories, MediatR pipelines, API gateways, and maintainable contracts.',
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Practical frontend polish',
      text: 'Angular modules that turn backend workflows into fast, readable, and responsive user experiences.',
    },
  ];
}
