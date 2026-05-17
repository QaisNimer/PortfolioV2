import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';
import { Skill, SkillCategory } from '../../shared/models/skill.model';

type SkillGroup = {
  id: SkillCategory;
  title: string;
  eyebrow: string;
  icon: string;
  description: string;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      id: 'backend',
      title: 'Backend',
      eyebrow: 'APIs and services',
      icon: 'fa-solid fa-server',
      description: 'C#, ASP.NET Core, REST APIs, SQL-backed business workflows, and automation services.',
    },
    {
      id: 'architecture',
      title: 'Architecture',
      eyebrow: 'System shape',
      icon: 'fa-solid fa-sitemap',
      description: 'Clean boundaries, modular patterns, MediatR flows, gateways, and service composition.',
    },
    {
      id: 'frontend',
      title: 'Frontend',
      eyebrow: 'Angular UI',
      icon: 'fa-solid fa-window-maximize',
      description: 'Responsive Angular interfaces, TypeScript modules, and polished workflow screens.',
    },
    {
      id: 'tools',
      title: 'Tools and infra',
      eyebrow: 'Delivery stack',
      icon: 'fa-solid fa-toolbox',
      description: 'Azure, IIS, Git, Swagger, Postman, Jira, DevExpress, Linux, and Laserfiche SDK.',
    },
  ];

  skillsBy(category: SkillCategory): Skill[] {
    return SKILLS.filter(skill => skill.category === category);
  }

  initials(name: string): string {
    return name
      .split(/[\s.-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase())
      .join('');
  }
}
