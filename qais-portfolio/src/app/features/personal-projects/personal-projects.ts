import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './personal-projects.html',
  styleUrl: './personal-projects.css',
})
export class PersonalProjectsComponent {
  readonly projects: Project[] = PROJECTS;

  previewImage(project: Project): string | undefined {
    return project.images?.[0];
  }

  visibleFeatures(project: Project): string[] {
    return project.features.slice(0, 3);
  }
}
