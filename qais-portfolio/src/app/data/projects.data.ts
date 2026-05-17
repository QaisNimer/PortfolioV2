import { Project } from '../shared/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'foodtek',
    title: 'FoodTek',
    subtitle: 'Restaurant Delivery App',
    description: 'A full backend system for real-time restaurant and delivery services. Built with ADO.NET and SQL Server, exposing RESTful APIs consumed by a Flutter frontend for seamless food ordering.',
    tech: ['ASP.NET Core', 'SQL Server', 'ADO.NET', 'REST API', 'JWT', 'Flutter'],
    features: [
      'Real-time food ordering system',
      'Restaurant & delivery management',
      'JWT authentication',
      'RESTful API design',
      'Flutter frontend integration'
    ],
    github: 'https://github.com/QaisNimer/FoodtekRestaurant',
    liveDemo: 'https://capstone.zero1planet.com/index.html',
    images: Array.from({ length: 32 }, (_, i) => `images/Foodtek Screens/${i}.jpg`),
    imageCount: 32
  },
  {
    id: 'computergy',
    title: 'Computergy',
    subtitle: 'E-Commerce Platform',
    description: 'An online store for selling computer parts. Developed REST APIs and Angular UI with EF Core Code First for the database layer, featuring full e-commerce functionality.',
    tech: ['ASP.NET Core', 'Angular', 'EF Core', 'REST API', 'C#'],
    features: [
      'Product catalog management',
      'Order processing',
      'Shopping cart functionality',
      'Discount & payment handling',
      'Wishlist & ratings',
      'Authentication & authorization'
    ],
    github: 'https://github.com/JasserAlshaer/ComputergyAPI'
  },
  {
    id: 'password-manager',
    title: 'Password Manager',
    subtitle: 'Secure Credential Storage',
    description: 'A secure password storage platform with ASP.NET Core Web API backend featuring OTP and JWT authentication, protecting all sensitive data with encryption.',
    tech: ['ASP.NET Core', 'Angular', 'JWT', 'OTP', 'EF Core', 'C#'],
    features: [
      'User authentication (JWT + OTP)',
      'Create / retrieve passwords',
      'Update & delete entries',
      'Data encryption',
      'Input validation',
      'Layered architecture'
    ],
    github: 'https://github.com/JasserAlshaer/PasswordManager-API',
    liveDemo: 'https://passwordapi.zero1planet.com/index.html'
  },
  {
    id: 'sis',
    title: 'SIS University System',
    subtitle: 'Graduation Project',
    description: 'A full university student information system built with MVC .NET Core. Enables course registration/dropping, GPA calculations, grade access, and personal info management.',
    tech: ['MVC .NET Core', 'EF Core', 'C#', 'SQL Server', 'HTML/CSS/JS'],
    features: [
      'User authentication',
      'Course registration & dropping',
      'Semester & cumulative GPA view',
      'Current & past semester grades',
      'Personal info management',
      'Automatic GPA calculation'
    ],
    github: 'https://github.com/QaisNimer/University-Student-Information-System',
    images: Array.from({ length: 10 }, (_, i) => `images/SIS/${i}.PNG`),
    imageCount: 10
  },
  {
    id: 'bookstore',
    title: 'Dinarak Bookstore',
    subtitle: 'ASP.NET MVC Web App',
    description: 'A bookstore web application built with ASP.NET MVC and AJAX. Features full CRUD operations, shopping cart, admin panel for user & book management, and Excel import/export.',
    tech: ['ASP.NET MVC 5', 'EF Core', 'SQL Server 2019', 'jQuery', 'AJAX'],
    features: [
      'Browse books with detailed descriptions',
      'Shopping cart (add/remove)',
      'Admin book management (CRUD)',
      'User role & account management',
      'Excel import/export for users'
    ],
    github: 'https://github.com/QaisNimer/DinarakProject01-Books-Store-',
    images: Array.from({ length: 12 }, (_, i) => `images/Dinarak/${i}.PNG`),
    imageCount: 12
  }
];
