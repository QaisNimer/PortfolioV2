import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { ExperienceComponent } from '../experience/experience';
import { SkillsComponent } from '../skills/skills';
import { PersonalProjectsComponent } from '../personal-projects/personal-projects';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    PersonalProjectsComponent,
    ContactComponent
  ],
  template: `
    <app-hero />
    <app-about />
    <app-experience />
    <app-skills />
    <app-personal-projects />
    <app-contact />
  `
})
export class HomeComponent {}
