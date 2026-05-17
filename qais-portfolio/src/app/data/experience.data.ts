import { Experience } from '../shared/models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    company: 'Unlimited-Innovation',
    role: 'Software Engineer',
    period: '11/2025 - Present',
    location: 'Amman, Jordan (+ Saudi Arabia - ISB Company, Jeddah)',
    isCurrent: true,
    highlights: [
      'Develop backend services and microservices using ASP.NET Core, C#, SQL Server, and Onion Architecture',
      'Build Angular front-end modules integrated with .NET APIs',
      'Work on projects with modular architecture and multi-module ecosystems',
      'Modernize legacy VB.NET systems by migrating them to EF Core, ASP.NET Core MVC, Web API, and Angular',
      'Implement MediatR and Ocelot as API Gateway for microservices communication',
      'Develop on Laserfiche using the official .NET 4.8 Framework SDK',
      'Collaborate with ISB Company (Jeddah, KSA) on Saudi Arabia-targeted projects',
    ],
    tech: ['ASP.NET Core', 'Microservices', 'Onion Architecture', 'Angular', 'MediatR', 'Ocelot', 'Laserfiche SDK', 'VB.NET to .NET Core'],
  },
  {
    company: 'Servtech International',
    role: '.NET Full-Stack Developer',
    period: '07/2025 - 11/2025',
    location: 'Amman, Jordan',
    isCurrent: false,
    highlights: [
      'Developed and maintained enterprise-level in-house applications using ASP.NET MVC, C#, and SQL Server',
      'Built Windows Services to automate daily exchange rate synchronization',
      'Integrated AI-based APIs for dynamic data mapping',
      'Designed modular business components and reusable generic functions in C# and JavaScript',
      'Created and maintained RESTful APIs for external systems and internal ERP modules',
      'Worked extensively with DevExpress components to build responsive and interactive UI elements',
      'Deployed and monitored applications on Azure with technical and business logging',
    ],
    tech: ['ASP.NET MVC', 'Windows Services', 'Azure', 'DevExpress', 'ERP APIs', 'AI Integration', 'Technical & Business Logs'],
  },
];
