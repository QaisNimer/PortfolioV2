import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { SlideshowComponent } from '../../shared/components/slideshow/slideshow';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, SlideshowComponent],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  project?: Project;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = PROJECTS.find(project => project.id === id);
  }

  backToProjects(): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 50);
    });
  }
}
