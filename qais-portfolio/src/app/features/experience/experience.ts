import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/experience.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
import { Experience } from '../../shared/models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  readonly experiences: Experience[] = EXPERIENCES;

  trackExperience(_: number, item: Experience): string {
    return `${item.company}-${item.period}`;
  }
}
