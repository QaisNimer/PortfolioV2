import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  readonly links = [
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: 'qaisihabnimer@gmail.com',
      href: 'mailto:qaisihabnimer@gmail.com',
    },
    {
      icon: 'fa-brands fa-linkedin-in',
      label: 'LinkedIn',
      value: 'linkedin.com/in/qaisnimer',
      href: 'https://www.linkedin.com/in/qaisnimer',
    },
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      value: 'github.com/QaisNimer',
      href: 'https://github.com/QaisNimer',
    },
  ];

  form = {
    name: '',
    email: '',
    message: '',
  };

  send(): void {
    const subject = `Portfolio inquiry from ${this.form.name || 'a visitor'}`;
    const body = [
      `Name: ${this.form.name || '-'}`,
      `Email: ${this.form.email || '-'}`,
      '',
      this.form.message || 'Hello Qais, I would like to discuss a project.',
    ].join('\n');

    window.location.href = `mailto:qaisihabnimer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
