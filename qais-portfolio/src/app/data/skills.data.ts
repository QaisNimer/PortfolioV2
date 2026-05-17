import { Skill } from '../shared/models/skill.model';

export const SKILLS: Skill[] = [
  // ── Backend ────────────────────────────────────────────
  { name: 'C#',              category: 'backend',       icon: 'https://img.icons8.com/?size=100&id=55251&format=png&color=000000',        rotation: -2 },
  { name: 'ASP.NET Core',    category: 'backend',       icon: 'https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000', rotation: 2  },
  { name: 'ADO.NET',         category: 'backend',       rotation: -3 },
  { name: 'Entity Framework',category: 'backend',       rotation: 1  },
  { name: 'MVC .NET',        category: 'backend',       rotation: -1 },
  { name: 'Web API',         category: 'backend',       icon: 'https://img.icons8.com/office/100/api-settings.png',                        rotation: 3  },
  { name: 'REST API',        category: 'backend',       rotation: -2 },
  { name: 'Middlewares',     category: 'backend',       rotation: 2  },
  { name: 'Windows Services',category: 'backend',       rotation: -1 },

  // ── Architecture ───────────────────────────────────────
  { name: 'Clean Architecture',    category: 'architecture', rotation: 2  },
  { name: 'Onion Architecture',    category: 'architecture', rotation: -2 },
  { name: 'Repository Pattern',    category: 'architecture', rotation: 1  },
  { name: 'Microservices',         category: 'architecture', rotation: -3 },
  { name: 'MediatR',               category: 'architecture', rotation: 2  },
  { name: 'Ocelot API Gateway',    category: 'architecture', rotation: -1 },

  // ── Frontend ───────────────────────────────────────────
  { name: 'HTML',       category: 'frontend', icon: 'images/Icons/html-logo.webp',        rotation: -2 },
  { name: 'CSS',        category: 'frontend', icon: 'images/Icons/css-logo.webp',         rotation: 2  },
  { name: 'JavaScript', category: 'frontend', icon: 'images/Icons/javascript-logo.webp',  rotation: -1 },
  { name: 'TypeScript', category: 'frontend',                                              rotation: 3  },
  { name: 'Angular',    category: 'frontend', icon: 'images/Icons/angular-logo.webp',     rotation: -2 },
  { name: 'Bootstrap',  category: 'frontend', icon: 'images/Icons/bootstrap-logo.webp',   rotation: 1  },

  // ── Tools & Infra ──────────────────────────────────────
  { name: 'SQL Server',      category: 'tools', icon: 'https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000', rotation: -2 },
  { name: 'Git',             category: 'tools', icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',         rotation: 2  },
  { name: 'GitHub',          category: 'tools', icon: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000',         rotation: -1 },
  { name: 'Azure',           category: 'tools',                                                                                     rotation: 3  },
  { name: 'Swagger',         category: 'tools', icon: 'images/Icons/swagger-logo.webp',   rotation: -2 },
  { name: 'Postman',         category: 'tools', icon: 'images/Icons/postman-logo.webp',   rotation: 1  },
  { name: 'Jira',            category: 'tools', icon: 'images/Icons/jira-logo.webp',      rotation: -3 },
  { name: 'IIS',             category: 'tools', icon: 'images/Icons/iis-logo.webp',       rotation: 2  },
  { name: 'Linux',           category: 'tools', icon: 'https://img.icons8.com/?size=100&id=17842&format=png&color=000000', rotation: -1 },
  { name: 'DevExpress',      category: 'tools',                                            rotation: 2  },
  { name: 'Laserfiche SDK',  category: 'tools',                                            rotation: -2 },
];
