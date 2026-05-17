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
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
