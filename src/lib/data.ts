
import type { LucideIcon } from 'lucide-react';
import {
  Github, Linkedin, Briefcase, MapPin, Mail, Phone, CodeXml, Database,
  ServerCog, Wand2, Palette, Settings2, ShoppingCart, FileText, BookOpen,
  GraduationCap, Building, Award, ExternalLink, UserCircle2, KeyRound, ShieldCheck,
  UploadCloud, Smartphone, Layers, Puzzle, Lightbulb, TerminalSquare, GitCommit, Wrench,
  Send, Brain, MessageSquareText, Rocket, NotebookText, Scale, Instagram, BarChart3, Video
} from 'lucide-react';

import {
Network,Radio,
Zap,Activity,} from "lucide-react";


export const APP_NAME = "Tinkal";
export const AUTHOR_NAME = "Tinkal Kumar";
export const AUTHOR_EMAIL = "tinkalkumar67693@gmail.com"; // General author email for display

// Email address that will RECEIVE contact form submissions. Configured via .env
export const CONTACT_FORM_RECEIVER_EMAIL = process.env.NEXT_PUBLIC_CONTACT_FORM_RECEIVER_EMAIL || AUTHOR_EMAIL;

export const LOGO_PATH = "/websitelogo.png"; // Use websitelogo.png for the site logo
export const SORA_AVATAR_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISscdGPN0f7hp7m9wka0VumVDqmaJYAkDLPnWCjeb7WhsvMBICoPLDHfD_3uWziaZeAc&usqp=CAU";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Industries", href: "#industries" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", Icon: Github, href: "https://github.com/MERNDevTinkal" },
  { name: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com/in/tinkal-kumar-9b8013186" },
  { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/tinkal_kumar__/" },
  { name: "Email", Icon: Mail, href: `mailto:${AUTHOR_EMAIL}` },
];

export const HERO_TITLES = [
  "MERN Stack Developer",
  "React & Next.js Engineer",
  "Node.js Backend Specialist",
  "Full Stack Application Developer",
  "TypeScript & JavaScript Expert",
  "Production Web application Builder",
  "API & Microservices Engineer",
  "Real-Time Systems Developer",
];

export const PROFILE_IMAGES = [
  { src: "/profile-1.jpg", alt: "Tinkal Kumar - MERN Stack Developer", dataAiHint: "professional man" },
];

export const RESUME_PATH = "/Tinkal_Resume.pdf";

export const ABOUT_ME = {
  summary: `MERN Stack Developer and Full Stack Engineer specialized in building production-grade web applications. I develop scalable, high-performance applications using React, Next.js, Node.js, Express, and TypeScript. With hands-on experience across healthcare, veterinary, wellness, and entertainment platforms, I build backend APIs, implement real-time communication systems, and ensure robust cloud deployments. My expertise spans MERN stack architecture, REST APIs, WebSockets, third-party integrations, AWS services, Docker, and production-level debugging and optimization.`,
  passion: "I am passionate about building real-world software that solves business problems. I focus on clean architecture, performance optimization, secure authentication systems, and scalable infrastructure. I thrive working on production applications that serve actual users and contribute to measurable business outcomes.",
  location: "Jaipur, India",
  relocation: "Available for freelance projects worldwide",
  IconLocation: MapPin,
  IconRelocation: Briefcase,
  IconAbout: UserCircle2,
  image: {
    src: "/profile-1.jpg",
    alt: "Tinkal Kumar - MERN Stack Developer",
    dataAiHint: "professional developer",
  },
};

export interface EducationEntry {
  degree: string;
  institution: string;
  graduationYear: string;
  details?: string[];
  Icon: LucideIcon;
}

export const EDUCATION_DATA: EducationEntry[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Raj Kumar Goel Institute of Technology, Ghaziabad (Affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow)",
    graduationYear: "2020 - 2024",
    details: [
      "Comprehensive curriculum covering core CS concepts: Data Structures & Algorithms, Object-Oriented Programming (Java, C++), Database Management Systems (SQL, NoSQL fundamentals), Operating Systems, Computer Networks, and Software Engineering principles.",
      "Specialized in web development technologies including HTML, CSS, JavaScript, and gained foundational knowledge for full-stack development.",
      "Developed strong analytical and problem-solving skills through various academic projects and assignments.",
      "Gained practical experience with version control systems like Git and GitHub for collaborative projects.",
      "Acquired understanding of agile development methodologies and the importance of teamwork in software development lifecycles.",
      "Focused on building a solid theoretical and practical foundation for a career in software engineering."
    ],
    Icon: GraduationCap,
  },
];

export interface ExperienceEntry {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  Icon: LucideIcon;
}

export const WORK_EXPERIENCE_DATA: ExperienceEntry[] = [
   {
    title: "MERN Stack Developer",
    company: "JPLoft",
    duration: "April 2026 – Present",
    location: "Jaipur, Rajasthan",
     responsibilities: [
    "Develop and maintain scalable full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript.",
    "Design and implement robust RESTful APIs and microservices architecture.",
    "Integrate third-party APIs and services including payment gateways, communication platforms, and analytics tools.",
    "Manage cloud deployments on AWS including S3, EC2, and RDS databases.",
    "Implement WebSocket-based real-time communication systems.",
    "Optimize application performance and implement comprehensive error handling.",
    "Collaborate in agile teams to deliver production-ready solutions."
  ],
    Icon: Building,
  },
  {
    title: "MERN Stack Developer",
    company: "OweBest Technologies Pvt Ltd",
    duration: "February 2025 – March 2026",
    location: "Jaipur, Rajasthan",
    responsibilities: [
      "Developed and maintained scalable full-stack web applications using MERN stack and TypeScript.",
      "Designed and implemented RESTful APIs for seamless frontend-backend communication.",
      "Focused on writing clean, maintainable code with emphasis on component reusability and performance.",
      "Collaborated with cross-functional teams in agile environment to deliver client-driven solutions.",
      "Implemented authentication, authorization, and data validation mechanisms.",
      "Integrated third-party services and APIs per project requirements."
    ],
    Icon: Building,
  },
];

export interface CertificationEntry {
  name: string;
  issuingOrganization: string;
  credentialUrl?: string;
  Icon: LucideIcon;
}

export const CERTIFICATIONS_DATA: CertificationEntry[] = [
  {
    name: "Full Stack Web Development",
    issuingOrganization: "Internshala Trainings",
    credentialUrl: "#",
    Icon: Award,
  },
  {
    name: "MERN Stack Web Development",
    issuingOrganization: "Coding Ninjas",
    credentialUrl: "#",
    Icon: Award,
  },
  {
    name: "Frontend Web Development",
    issuingOrganization: "PW Skills",
    credentialUrl: "#",
    Icon: Award,
  },
  {
    name: "Backend Web Development",
    issuingOrganization: "PW Skills",
    credentialUrl: "#",
    Icon: Award,
  },
  {
    name: "DevOps Fundamentals",
    issuingOrganization: "PW Skills",
    credentialUrl: "#",
    Icon: Award,
  },
  {
    name: "Skills India Program Completion",
    issuingOrganization: "Skills India",
    credentialUrl: "#",
    Icon: Award,
  },
];


export interface TechStackItem {
  name: string;
  Icon: LucideIcon | string;
  category: string;
}

export const TECH_STACK_CATEGORIES_ORDER = [

  "Programming Languages",
  
  "Frontend Development",
  
  "Backend & Microservices",
  
  "Databases & Caching",
  
  "Cloud & AWS",
  
  "DevOps & CI/CD",
  
  "Networking & Monitoring",
  
  "Deployment & Tools",
  
  ];
  

export const TECH_STACK: TechStackItem[] = [

  // =============================
  // Programming Languages
  // =============================

  { name: "JavaScript", Icon: CodeXml, category: "Programming Languages" },
  { name: "TypeScript", Icon: CodeXml, category: "Programming Languages" },
  { name: "Java", Icon: CodeXml, category: "Programming Languages" },
  { name: "C", Icon: CodeXml, category: "Programming Languages" },
  { name: "C++", Icon: CodeXml, category: "Programming Languages" },
  { name: "SQL", Icon: Database, category: "Programming Languages" },

  // =============================
  // Frontend Development
  // =============================

  { name: "React.js", Icon: CodeXml, category: "Frontend Development" },
  { name: "Next.js", Icon: CodeXml, category: "Frontend Development" },
  { name: "HTML5", Icon: CodeXml, category: "Frontend Development" },
  { name: "CSS3", Icon: Palette, category: "Frontend Development" },
  { name: "Tailwind CSS", Icon: Palette, category: "Frontend Development" },
  { name: "ShadCN UI", Icon: Layers, category: "" },
  { name: "Redux", Icon: CodeXml, category: "Frontend Development" },
  { name: "Redux Toolkit", Icon: CodeXml, category: "Frontend Development" },
  { name: "RTK Query", Icon: Radio, category: "Frontend Development" },
  { name: "Zustand", Icon: CodeXml, category: "Frontend Development" },
  { name: "Responsive Design", Icon: Smartphone, category: "Frontend Development" },

  // =============================
  // Backend & Microservices
  // =============================

  { name: "Node.js", Icon: ServerCog, category: "Backend & Microservices" },
  { name: "Express.js", Icon: ServerCog, category: "Backend & Microservices" },
  { name: "NestJS", Icon: ServerCog, category: "Backend & Microservices" },
  { name: "REST API Development", Icon: Settings2, category: "Backend & Microservices" },
  { name: "JWT Authentication", Icon: KeyRound, category: "Backend & Microservices" },
  { name: "API Security", Icon: ShieldCheck, category: "Backend & Microservices" },
  { name: "WebSockets", Icon: Radio, category: "Backend & Microservices" },
  { name: "System Design", Icon: Network, category: "Backend & Microservices" },
  { name: "Apache Kafka", Icon: Radio, category: "Backend & Microservices" },
  { name: "Event-Driven Architecture", Icon: Zap, category: "Backend & Microservices" },

  // =============================
  // Databases & Caching
  // =============================

  { name: "MongoDB", Icon: Database, category: "Databases & Caching" },
  { name: "PostgreSQL", Icon: Database, category: "Databases & Caching" },
  { name: "MySQL", Icon: Database, category: "Databases & Caching" },
  { name: "Redis", Icon: Database, category: "Databases & Caching" },
  { name: "Firebase Firestore", Icon: Database, category: "Databases & Caching" },
  { name: "Prisma ORM", Icon: Database, category: "Databases & Caching" },
  { name: "Mongoose", Icon: Database, category: "Databases & Caching" },

  // =============================
  // Cloud & AWS
  // =============================

  { name: "AWS EC2", Icon: ServerCog, category: "Cloud & AWS" },
  { name: "AWS S3", Icon: Database, category: "Cloud & AWS" },
  { name: "AWS RDS", Icon: Database, category: "Cloud & AWS" },
  { name: "AWS DynamoDB", Icon: Database, category: "Cloud & AWS" },
  { name: "AWS Lambda", Icon: ServerCog, category: "Cloud & AWS" },
  { name: "AWS API Gateway", Icon: Network, category: "Cloud & AWS" },
  { name: "AWS VPC", Icon: Network, category: "Cloud & AWS" },
  { name: "AWS VPC Endpoints", Icon: Network, category: "Cloud & AWS" },
  { name: "AWS Route 53", Icon: Network, category: "Cloud & AWS" },
  { name: "AWS Cognito", Icon: ShieldCheck, category: "Cloud & AWS" },
  { name: "AWS CloudWatch", Icon: Activity, category: "Cloud & AWS" },
  { name: "AWS SNS", Icon: Radio, category: "Cloud & AWS" },
  { name: "AWS SQS", Icon: Radio, category: "Cloud & AWS" },
  { name: "AWS Bedrock", Icon: Brain, category: "Cloud & AWS" },

  // =============================
  // DevOps, Containers & CI/CD
  // =============================

  { name: "Docker", Icon: ServerCog, category: "DevOps & CI/CD" },
  { name: "Docker Compose", Icon: ServerCog, category: "DevOps & CI/CD" },
  { name: "Docker Swarm", Icon: ServerCog, category: "DevOps & CI/CD" },
  { name: "Docker Networking", Icon: Network, category: "DevOps & CI/CD" },
  { name: "Kubernetes", Icon: ServerCog, category: "DevOps & CI/CD" },
  { name: "Horizontal Pod Autoscaler", Icon: Layers, category: "DevOps & CI/CD" },
  { name: "Terraform", Icon: Settings2, category: "DevOps & CI/CD" },
  { name: "Jenkins", Icon: Settings2, category: "DevOps & CI/CD" },
  { name: "Jenkins Pipelines", Icon: Settings2, category: "DevOps & CI/CD" },
  { name: "GitHub Actions", Icon: Settings2, category: "DevOps & CI/CD" },
  { name: "CI/CD Pipelines", Icon: Settings2, category: "DevOps & CI/CD" },

  // =============================
  // Networking, Servers & Monitoring
  // =============================

  { name: "NGINX", Icon: ServerCog, category: "Networking & Monitoring" },
  { name: "Apache Server", Icon: ServerCog, category: "Networking & Monitoring" },
  { name: "Load Balancing", Icon: Network, category: "Networking & Monitoring" },
  { name: "Reverse Proxy", Icon: Network, category: "Networking & Monitoring" },
  { name: "Linux Networking", Icon: TerminalSquare, category: "Networking & Monitoring" },
  { name: "iptables", Icon: ShieldCheck, category: "Networking & Monitoring" },
  { name: "Prometheus", Icon: Activity, category: "Networking & Monitoring" },
  { name: "Grafana", Icon: Activity, category: "Networking & Monitoring" },
  { name: "Cloud Monitoring", Icon: Activity, category: "Networking & Monitoring" },

  // =============================
  // Deployment & Tools
  // =============================

  { name: "Git", Icon: GitCommit, category: "Deployment & Tools" },
  { name: "GitHub", Icon: Github, category: "Deployment & Tools" },
  { name: "Postman", Icon: Settings2, category: "Deployment & Tools" },
  { name: "Vercel", Icon: Rocket, category: "Deployment & Tools" },
  { name: "Render", Icon: Rocket, category: "Deployment & Tools" },
  { name: "Railway", Icon: Rocket, category: "Deployment & Tools" },

];

export interface Project {
  id: string;
  title: string;
  description: string;
  liveDemoUrl?: string;
  githubRepoUrl: string;
  techStack: Pick<TechStackItem, 'name' | 'Icon'>[]; // Use Pick to only get name and Icon
  Icon: LucideIcon;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "kinnect",
    title: "Kinnect – Veterinary Healthcare Platform",
    description:
      "Production veterinary healthcare software serving veterinary practices. Engineered key features including real-time communication with WebSocket integration, voice/video calling via ZEGOCLOUD, webinar infrastructure with AWS IVS integration, appointment scheduling, user and role management, notifications, and AWS S3 integration.",
    liveDemoUrl: "https://kinnect.vet/",
    githubRepoUrl: "#",
    techStack: [
      { name: "React", Icon: CodeXml },
      { name: "Node.js", Icon: ServerCog },
      { name: "Express.js", Icon: ServerCog },
      { name: "MongoDB", Icon: Database },
      { name: "TypeScript", Icon: CodeXml },
      { name: "WebSocket", Icon: Network },
      { name: "ZEGOCLOUD", Icon: Phone },
      { name: "AWS S3", Icon: Database },
      { name: "AWS IVS", Icon: Video },
      { name: "Redis", Icon: Zap },
    ],
    Icon: Briefcase,
  },
  {
    id: "medconcerns",
    title: "MedConcerns – Healthcare Platform",
    description:
      "Healthcare software platform built on MERN stack designed to support digital healthcare workflows. Implemented backend API services, user authentication and role-based access control, third-party service integrations, and production deployment architecture.",
    liveDemoUrl: "https://app.medconcerns.com/",
    githubRepoUrl: "#",
    techStack: [
      { name: "React", Icon: CodeXml },
      { name: "Node.js", Icon: ServerCog },
      { name: "Express.js", Icon: ServerCog },
      { name: "MongoDB", Icon: Database },
      { name: "TypeScript", Icon: CodeXml },
      { name: "REST APIs", Icon: Network },
      { name: "JWT Auth", Icon: KeyRound },
      { name: "AWS", Icon: Database },
    ],
    Icon: Briefcase,
  },
  {
    id: "soundara",
    title: "Soundara – Wellness Music Platform",
    description:
      "Wellness and music technology platform providing curated musical experiences. Contributed to platform architecture and user experience optimization on production systems serving music and wellness applications.",
    liveDemoUrl: "https://www.soundara.com/",
    githubRepoUrl: "#",
    techStack: [
      { name: "React", Icon: CodeXml },
      { name: "Node.js", Icon: ServerCog },
      { name: "MongoDB", Icon: Database },
      { name: "REST APIs", Icon: Network },
      { name: "AWS", Icon: Database },
    ],
    Icon: Briefcase,
  },
  {
    id: "wonder-wrestlers",
    title: "Wonder Wrestlers – Entertainment Platform",
    description:
      "Entertainment and events digital platform. Engineered backend systems, user workflows, event management features, and real-time communication infrastructure.",
    liveDemoUrl: "https://www.wonderwrestlers.com/",
    githubRepoUrl: "#",
    techStack: [
      { name: "React", Icon: CodeXml },
      { name: "Node.js", Icon: ServerCog },
      { name: "MongoDB", Icon: Database },
      { name: "Express.js", Icon: ServerCog },
      { name: "REST APIs", Icon: Network },
    ],
    Icon: Briefcase,
  },
  {
    id: "docvault-pro",
    title: "DocVault Pro – Cloud-Native Document Platform",
    description:
      "Production-grade serverless document management system. Implemented AWS infrastructure including Lambda functions for document processing, API Gateway for RESTful endpoints, S3 for secure storage, and DynamoDB for metadata. Automated infrastructure using Terraform with CI/CD pipelines via GitHub Actions.",
    liveDemoUrl: "https://github.com/MERNDevTinkal/DocVault-Pro",
    githubRepoUrl: "https://github.com/MERNDevTinkal/DocVault-Pro",
    techStack: [
      { name: "AWS S3", Icon: Database },
      { name: "AWS Lambda", Icon: Zap },
      { name: "API Gateway", Icon: Network },
      { name: "DynamoDB", Icon: Database },
      { name: "Terraform", Icon: Wrench },
      { name: "GitHub Actions", Icon: GitCommit },
      { name: "CloudFront", Icon: Network },
      { name: "Python", Icon: CodeXml },
      { name: "CloudWatch", Icon: Activity },
    ],
    Icon: Briefcase,
  },
];

// ==============================
// INDUSTRIES & SERVICES
// ==============================

export interface IndustryCard {
  id: string;
  name: string;
  description: string;
  Icon: LucideIcon;
  examples: string[];
}

export const INDUSTRIES_DATA: IndustryCard[] = [
  {
    id: "healthcare",
    name: "Healthcare Software",
    description: "Digital healthcare platforms, patient workflows, provider systems, and healthcare operations.",
    Icon: Building,
    examples: ["Digital Workflows", "Patient Management", "Provider Systems", "Healthcare APIs"],
  },
  {
    id: "veterinary",
    name: "Veterinary Software",
    description: "Veterinary practice management, appointment scheduling, communication systems, and telehealth.",
    Icon: Building,
    examples: ["Practice Management", "Appointment Systems", "Telemedicine", "Real-time Communication"],
  },
  {
    id: "lms",
    name: "Learning Management Systems",
    description: "Educational platforms, course management, user progress tracking, and content delivery.",
    Icon: GraduationCap,
    examples: ["Course Management", "User Roles", "Progress Tracking", "Content Delivery"],
  },
  {
    id: "hospital",
    name: "Hospital Management",
    description: "Hospital operations, workflow management, staff coordination, and patient systems.",
    Icon: Building,
    examples: ["Workflow Automation", "Staff Management", "Patient Records", "Operations"],
  },
  {
    id: "crm",
    name: "CRM Software",
    description: "Customer relationship management, lead tracking, communication, and sales workflows.",
    Icon: Briefcase,
    examples: ["Lead Management", "Customer Communication", "Sales Pipeline", "Reporting"],
  },
  {
    id: "events",
    name: "Event Management",
    description: "Event platforms, registration systems, scheduling, and attendee management.",
    Icon: Briefcase,
    examples: ["Event Creation", "Registration", "Scheduling", "Attendee Management"],
  },
  {
    id: "hospitality",
    name: "Hospitality Software",
    description: "Hotel management, booking systems, guest management, and operations automation.",
    Icon: Building,
    examples: ["Booking Systems", "Guest Management", "Operations", "Revenue Management"],
  },
  {
    id: "dating",
    name: "Dating Platforms",
    description: "User matching, real-time messaging, calling features, and community systems.",
    Icon: Briefcase,
    examples: ["Profile Management", "Real-time Messaging", "Calling", "Notifications"],
  },
  {
    id: "webinar",
    name: "Webinar Platforms",
    description: "Live streaming, interactive sessions, recording, chat, and attendee management.",
    Icon: Briefcase,
    examples: ["Live Sessions", "Chat Systems", "Recording", "Real-time Broadcasting"],
  },
  {
    id: "wellness",
    name: "Wellness & Music Tech",
    description: "Wellness platforms, music streaming, curated experiences, and immersive applications.",
    Icon: Briefcase,
    examples: ["Music Streaming", "Curated Content", "User Experiences", "Wellness Features"],
  },
];

export interface ServiceCard {
  id: string;
  name: string;
  description: string;
  Icon: LucideIcon;
}

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: "full-stack",
    name: "Full Stack Web Applications",
    description: "End-to-end web applications from frontend UI to backend APIs with database design.",
    Icon: CodeXml,
  },
  {
    id: "mern",
    name: "MERN Stack Development",
    description: "MongoDB, Express.js, React.js, and Node.js applications with TypeScript and modern tooling.",
    Icon: CodeXml,
  },
  {
    id: "react",
    name: "React & Next.js Frontends",
    description: "Interactive user interfaces, server-side rendering, static generation, and optimization.",
    Icon: CodeXml,
  },
  {
    id: "apis",
    name: "Node.js & Express APIs",
    description: "RESTful API design, microservices, authentication, authorization, and backend systems.",
    Icon: ServerCog,
  },
  {
    id: "realtime",
    name: "Real-Time Communication",
    description: "WebSocket implementation, live notifications, real-time chat, and collaborative features.",
    Icon: Zap,
  },
  {
    id: "calling",
    name: "Video Calling & Webinars",
    description: "Voice and video calling integration, webinar platforms, recording, and streaming systems.",
    Icon: Phone,
  },
  {
    id: "integrations",
    name: "Third-Party Integrations",
    description: "Payment gateways, email services, SMS, analytics, and external API integrations.",
    Icon: Network,
  },
  {
    id: "aws",
    name: "AWS & Cloud Deployment",
    description: "S3, Lambda, EC2, RDS deployment, cloud architecture, and serverless solutions.",
    Icon: Database,
  },
  {
    id: "dashboards",
    name: "Admin Dashboards",
    description: "Management panels, analytics dashboards, user administration, and operational tools.",
    Icon: BarChart3,
  },
  {
    id: "databases",
    name: "Database Design & Optimization",
    description: "MongoDB, PostgreSQL, MySQL schema design, indexing, and performance optimization.",
    Icon: Database,
  },
  {
    id: "maintenance",
    name: "Production Maintenance",
    description: "Bug fixes, performance optimization, refactoring, and existing codebase improvements.",
    Icon: Wrench,
  },
  {
    id: "saas",
    name: "SaaS Applications",
    description: "Multi-tenant applications, subscription systems, licensing, and scalable infrastructure.",
    Icon: Layers,
  },
];

// Exporting hardcodedBlogPosts for sitemap generation
export const hardcodedBlogPosts = [
  {
    id: "0", // This ID should match the one used in BlogList and BlogPostPageClient
    title: "The Future of Web Development: Trends to Watch", // Title for metadata fallback
    paragraphs: [
      "The web development landscape is a whirlwind of innovation! New frameworks, powerful tools, and cutting-edge paradigms are constantly emerging, reshaping how we craft digital experiences. For developers keen on building modern, efficient, and captivating web applications, staying ahead of the curve is not just beneficial—it's essential.",
      "A significant trend dominating the current discourse is the ascent of server-side rendering (SSR) and static site generation (SSG), championed by frameworks like Next.js. These methodologies deliver substantial improvements in performance, search engine optimization (SEO), and overall user experience. When combined with the principles of Jamstack architecture, developers can construct lightning-fast, highly scalable websites that delight users.",
      "Artificial Intelligence (AI) and Machine Learning (ML) are no longer futuristic concepts but active participants in the web development process. From AI-driven code assistants and automated testing suites to hyper-personalized user journeys and intelligent chatbots, AI is revolutionizing multiple facets of the development lifecycle and the final product. We are on the cusp of even deeper and more transformative integrations in the years to come.",
      "WebAssembly (Wasm) is another groundbreaking technology demanding attention. It empowers developers to run code written in languages such as C++, Rust, and Go directly within the browser at speeds approaching native performance. This capability unlocks new frontiers for sophisticated web applications, including immersive games, professional-grade video editing tools, and complex data visualization platforms, all accessible without leaving the browser.",
      "Finally, an unwavering commitment to web accessibility (a11y) and Core Web Vitals will remain a cornerstone of quality web development. Building inclusive digital products that perform optimally for every user is not merely a best practice—it's a fundamental responsibility. Developers must champion these principles to foster a positive, equitable, and universally accessible web."
    ]
  },
  {
    id: "1",
    title: "Async JavaScript: Callbacks, Promises, and Async/Await",
    paragraphs: [
      "Understanding asynchronous JavaScript is fundamental for any modern web developer. Callbacks, Promises, and Async/Await are tools that help manage operations that don't complete immediately, like API calls or timeouts. Mastering these concepts is key to writing non-blocking, efficient code.",
      "Callbacks were the traditional way to handle asynchronous operations, but they can lead to 'callback hell' with deeply nested structures. Promises offer a cleaner way to chain asynchronous actions, with .then() for success and .catch() for errors. They represent a value that may be available now, or in the future, or never.",
      "Async/Await, built on top of Promises, provides a more synchronous-looking syntax for asynchronous code. Using the 'async' keyword before a function declaration allows you to use 'await' inside it. 'await' pauses the function execution until a Promise settles, making complex asynchronous logic much easier to read and maintain."
    ]
  },
  {
    id: "2",
    title: "Introduction to DevOps Principles and Practices",
    paragraphs: [
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.",
      "Key principles of DevOps include automation, continuous integration/continuous delivery (CI/CD), infrastructure as code (IaC), monitoring, and collaboration. Tools like Jenkins, GitLab CI, Docker, Kubernetes, Ansible, and Prometheus are commonly used in DevOps workflows.",
      "Adopting DevOps culture and practices can lead to faster release cycles, improved deployment reliability, better collaboration between teams, and increased efficiency. It's about breaking down silos and working together towards common goals."
    ]
  },
  {
    id: "3",
    title: "The Power of TypeScript in Modern Web Development",
    paragraphs: [
      "TypeScript, a superset of JavaScript, adds static typing to the language. This allows developers to catch errors early during development, rather than at runtime, leading to more robust and maintainable codebases. It's particularly beneficial for large-scale applications and team collaboration.",
      "Key features of TypeScript include interfaces for defining contracts, enums for creating sets of named constants, generics for writing reusable code components, and strong tooling support with autocompletion and refactoring in modern IDEs.",
      "While there's a learning curve, the benefits of using TypeScript—such as improved code quality, better developer experience, and enhanced scalability—often outweigh the initial investment, making it a popular choice for many projects."
    ]
  },
  {
    id: "4",
    title: "Understanding Microservices Architecture",
    paragraphs: [
      "Microservices architecture is an approach to developing a single application as a suite of small, independently deployable services. Each service runs in its own process and communicates with lightweight mechanisms, often an HTTP resource API. This contrasts with a monolithic architecture where all components are part of a single, large application.",
      "Benefits of microservices include improved scalability (services can be scaled independently), technology diversity (each service can use different tech stacks), resilience (failure in one service doesn't necessarily bring down the whole app), and easier maintenance and updates for individual components.",
      "However, microservices also introduce complexity in terms of managing distributed systems, inter-service communication, data consistency, and increased operational overhead. Careful planning and robust infrastructure are crucial for successful microservices implementation."
    ]
  },
  {
    id: "5",
    title: "State Management in React: A Comparative Overview",
    paragraphs: [
      "State management in React applications can become complex as they grow. While React's built-in `useState` and `useReducer` hooks are great for local component state, global state shared across many components often requires dedicated libraries like Redux, Zustand, or Recoil, or leveraging the Context API more extensively.",
      "Redux is a predictable state container with a unidirectional data flow, often used for large applications. Zustand offers a more minimalistic and unopinionated approach, using hooks for a simpler API. The Context API is built into React and can be suitable for less complex global state scenarios.",
      "Choosing the right state management solution depends on the project's scale, complexity, team familiarity, and specific requirements. The goal is always to make state predictable, manageable, and easy to debug."
    ]
  }
];


export const BLOG_SECTION_DETAILS = {
  title: "My Tech Narratives",
  description: "Exploring the frontiers of technology, software craftsmanship, DevOps methodologies, AI advancements, and beyond. Join my musings on the ever-evolving tech landscape.",
  Icon: BookOpen,
};

export const CONTACT_DETAILS = {
  title: "Let's Build Together",
  description: "Have an innovative project, a burning question, or just want to connect? I'm eager to discuss new ideas and potential collaborations. Reach out!",
  Icon: Mail,
  phone: "+91-9102496140",
  PhoneIcon: Phone,
};

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
