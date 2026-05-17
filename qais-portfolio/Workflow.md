# Master Prompt: Angular Portfolio Development

You are an expert Frontend Developer and UI/UX Designer specializing in Angular 19 (Standalone Components) and modern, highly-animated web design.

Your task is to help me build and refine my personal portfolio website. I am migrating from an old static HTML site to a premium, highly-interactive Angular SPA.

---

# 🎨 Design Inspiration & Aesthetic

The target design should heavily emulate the style and interactions of:

:contentReference[oaicite:0]{index=0}

## Key Design Elements to Implement

### Theme
- Dark mode primary (`#0e0e0e`)
- Vibrant accent highlights:
  - Brand Blue `#123458`
  - Accent Blue `#739ecb`
- Soft glowing neon accents
- High contrast modern UI

### Typography
- Headings: `Outfit`
- Body Text: `Inter`
- Bold geometric typography with clean spacing

### Custom Cursor
Build a magnetic custom cursor system:
- Small dot that follows the mouse precisely
- Larger ring with lag/spring interpolation
- Ring expands and glows on hover targets
- Cursor blend mode should feel premium and smooth

### Tech Stack Badges
Create floating “sticker” style badges:
- Slight rotation/tilt
- Pill-shaped chips
- Icon + label
- Glow on hover
- Scale and rotate slightly on interaction

### Scroll Reveal System
Implement staggered reveal animations using:
- IntersectionObserver
- Fade-up motion
- Delayed stagger sequencing
- Smooth easing

### Card Design
Cards should include:
- Dark translucent backgrounds
- Glassmorphism blur
- Thin glowing borders
- Gradient hover outlines
- Subtle scale/translate hover effects

### Hero Section Features
Hero should include:
- Mouse parallax floating blobs
- Animated gradient glow background
- Typewriter role animation
- Circular profile image
- Hover swap between real photo and avatar illustration
- Floating skill badges

---

# ⚙️ Architecture & Tech Stack

## Framework
- Angular 19
- Standalone Components only
- No NgModules

## Routing
- Angular Router
- Lazy-loaded project detail pages:
  - `/projects/:id`

## Styling
- Vanilla CSS
- Extensive use of CSS Custom Properties (Design Tokens)

## Animations
- CSS transitions/keyframes
- IntersectionObserver directives
- GSAP only if necessary

---

# 👤 Professional Profile

## Name
Qais Nimer

## Role
Mid-Level Software Engineer / .NET Full-Stack Developer

## Location
Amman, Jordan

---

# 🧾 Professional Summary

I am a Software Engineer specializing in scalable web applications and microservices.

I build backend services using ASP.NET Core, SQL Server, and Clean/Onion Architectures, alongside dynamic frontend modules using Angular.

I focus on:
- scalable architectures
- enterprise-grade APIs
- modular systems
- modern frontend experiences
- maintainable backend ecosystems

---

# 💼 Experience

## Software Engineer @ Unlimited-Innovation
**11/2025 – Present**  
Amman, Jordan / KSA Projects

### Responsibilities
- Develop backend services and microservices using ASP.NET Core, C#, SQL Server, and Onion Architecture
- Build Angular front-end modules integrated with .NET APIs
- Work on projects with modular architecture and multi-module ecosystems
- Modernize legacy VB.NET systems to EF Core, ASP.NET Core MVC, WebAPI, and Angular
- Implement MediatR and Ocelot as API Gateways
- Develop on Laserfiche using the official .NET Framework 4.8 SDK

---

## .NET Full-Stack Developer @ Servtech International
**07/2025 – 11/2025**  
Amman, Jordan

### Responsibilities
- Developed enterprise in-house applications using ASP.NET MVC, C#, and SQL Server
- Built Windows Services to automate exchange rate synchronization
- Integrated AI-based APIs
- Created RESTful APIs for ERP integration
- Worked with DevExpress UI components
- Deployed applications via Azure
- Implemented technical and business logging systems

---

# 🧠 Skills

## Backend
- C#
- ASP.NET Core
- ADO.NET
- Entity Framework Core
- MVC
- Web API
- REST APIs
- Middlewares
- Windows Services

## Architecture
- Clean Architecture
- Onion Architecture
- Repository Pattern
- Microservices
- MediatR
- Ocelot API Gateway

## Frontend
- HTML
- CSS
- JavaScript
- TypeScript
- Angular
- Bootstrap

## Tools & Infrastructure
- SQL Server
- Git
- GitHub
- Azure
- Swagger
- Postman
- Jira
- IIS
- Linux
- DevExpress
- Laserfiche SDK

---

# 🚀 Personal Projects

## FoodTek
Restaurant delivery application
- ASP.NET Core REST API
- SQL Server
- Flutter frontend

## Computergy
E-Commerce platform
- Angular frontend
- ASP.NET Core backend
- Entity Framework Core

## Password Manager
Secure credential management system
- ASP.NET Core
- JWT Authentication
- OTP Verification
- Encryption

## SIS University System
Student information management system
- ASP.NET Core MVC
- EF Core
- GPA calculation logic

## Dinarak Bookstore
Bookstore management web application
- ASP.NET MVC
- Full CRUD operations
- Ajax integration
- Excel Import/Export

---

# 📂 Current Project State

## Already Built

### Global Design System
- `styles.css`
- Design tokens
- Utility classes
- Button system
- Glow borders

### Data Models
- `skills.data.ts`
- `projects.data.ts`
- `experience.data.ts`

### Core Components
- Navbar
- Footer
- Custom Cursor
- ScrollReveal Directive

### Hero Section
Includes:
- Parallax blobs
- Typewriter effect
- Floating badges
- Photo swap interaction

---

# ⏳ Pending Components

The following sections still need to be built:

- About Section
- Experience Timeline Section
- Skills Sticker Grid
- Personal Projects Section
- Contact Section
- Routed ProjectDetail Page
- SlideshowComponent

---

# 🎯 Task Request

Based on the context above, please help me build the:

## [INSERT SECTION NAME HERE]

Examples:
- About Section
- Experience Section
- Skills Section
- Contact Section
- Project Detail Page

---

# 📌 Requirements For Generated Code

Provide:

1. Complete Angular Standalone Component code
2. TypeScript
3. HTML template
4. CSS styling

---

# ⚡ Important Styling Rules

The implementation MUST follow the aesthetic of david-hckh.com:
- premium dark UI
- glowing hover effects
- staggered animations
- glassmorphism
- magnetic interactions
- cinematic spacing
- modern portfolio feel

---

# 🧱 Code Expectations

## Angular Standards
- Angular 19 syntax
- Standalone components
- Clean architecture
- Reusable structure
- Typed models/interfaces

## CSS Standards
- CSS variables
- Responsive design
- Modern transitions
- Optimized animations
- Minimal hardcoded values

## Animation Standards
- Smooth easing
- Scroll reveal sequencing
- Hover micro-interactions
- Floating ambient animations

---

# 📱 Responsiveness

The generated section must be:
- fully responsive
- mobile optimized
- tablet optimized
- ultra-wide friendly

---

# 🧩 Additional Expectations

If needed, also include:
- reusable directives
- utility helpers
- animation logic
- reusable card patterns
- responsive grid systems

---

# 🔥 Final Goal

The final result should feel like:
- a premium creative developer portfolio
- highly interactive
- visually cinematic
- technically impressive
- modern and minimal
- smooth and polished

The experience should combine:
- modern frontend motion design
- enterprise engineering professionalism
- premium portfolio aesthetics