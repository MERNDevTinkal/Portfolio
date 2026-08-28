
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

// ---------------------------------------------------------------------------
// HERO_TITLES_POOL — 1000+ unique phrases, each works after "I build …"
// The UI picks a small random subset on each page load via getRandomHeroTitles()
// so the Typewriter animation stays lightweight.
// ---------------------------------------------------------------------------
export const HERO_TITLES_POOL: string[] = [
  // ── Full Stack & MERN/MEAN/PERN ──────────────────────────────────────────
  "Modern Full Stack Applications",
  "Scalable MERN Stack Applications",
  "Production-Ready MEAN Stack Systems",
  "High-Performance PERN Stack Platforms",
  "Full Stack SaaS Products",
  "Full Stack Enterprise Solutions",
  "Full Stack E-Commerce Platforms",
  "Full Stack Booking Systems",
  "Full Stack Analytics Dashboards",
  "Full Stack CRM Platforms",
  "Full Stack ERP Systems",
  "Full Stack Marketplace Platforms",
  "Full Stack Social Networking Apps",
  "Full Stack Collaboration Tools",
  "Full Stack Admin Panels",
  "Full Stack Multi-Tenant Platforms",
  "Full Stack Real-Time Applications",
  "Full Stack Cloud-Native Products",
  "Full Stack Healthcare Platforms",
  "Full Stack EdTech Applications",
  "Full Stack FinTech Solutions",
  "Full Stack Media Streaming Platforms",
  "Full Stack Job Board Platforms",
  "Full Stack Event Management Systems",
  "Full Stack Inventory Management Systems",
  "Full Stack Logistics Platforms",
  "Full Stack Travel Booking Apps",
  "Full Stack HR Management Systems",
  "Full Stack Learning Management Systems",
  "Full Stack Customer Support Platforms",
  // ── React & Frontend ─────────────────────────────────────────────────────
  "Modern React Applications",
  "High-Performance React Dashboards",
  "Responsive React Component Libraries",
  "React-Powered Admin Interfaces",
  "React State Management Systems",
  "React Context-Driven Applications",
  "React Query-Optimized Data Layers",
  "Reusable React Design Systems",
  "Accessible React Web Applications",
  "Animated React Landing Pages",
  "React Server Component Applications",
  "Data-Driven React Analytics UIs",
  "React Real-Time Chat Interfaces",
  "React Kanban Board Systems",
  "React Form-Heavy Enterprise Apps",
  "React Map Visualization Dashboards",
  "React Multi-Step Wizard Flows",
  "React Micro-Frontend Architectures",
  "React Infinite Scroll Content Feeds",
  "React Drag-and-Drop Builders",
  // ── Next.js ──────────────────────────────────────────────────────────────
  "Next.js Full Stack Applications",
  "Next.js SEO-Optimized Websites",
  "Next.js Server-Side Rendered Portals",
  "Next.js Static Site Generators",
  "Next.js API Route Systems",
  "Next.js E-Commerce Storefronts",
  "Next.js Blog Platforms",
  "Next.js Portfolio Websites",
  "Next.js Dashboard Applications",
  "Next.js Internationalized Applications",
  "Next.js Edge Runtime Services",
  "Next.js App Router Architectures",
  "Next.js Streaming UI Applications",
  "Next.js Hybrid Rendering Systems",
  "Next.js Image-Optimized Platforms",
  "Next.js Authentication Systems",
  "Next.js Multi-Language Platforms",
  "Next.js Performance-Tuned Web Apps",
  "Next.js Production Web Applications",
  "Next.js SaaS Starter Kits",
  // ── Node.js & Express ────────────────────────────────────────────────────
  "High-Performance Node.js Backends",
  "Scalable Express REST APIs",
  "Node.js Event-Driven Microservices",
  "Node.js Stream Processing Pipelines",
  "Node.js Background Job Systems",
  "Node.js Webhook Handler Services",
  "Node.js File Upload Servers",
  "Node.js PDF Generation Services",
  "Node.js Email Delivery Services",
  "Node.js Multi-Threaded Workers",
  "Node.js Rate-Limited API Gateways",
  "Node.js Long-Polling Systems",
  "Node.js Headless CMS Backends",
  "Node.js E-Commerce API Backends",
  "Node.js Notification Dispatch Systems",
  "Node.js Scheduled Task Runners",
  "Node.js OAuth Server Implementations",
  "Node.js Payment Gateway Integrations",
  "Node.js Data Aggregation Services",
  "Node.js Proxy Server Applications",
  // ── TypeScript & JavaScript ───────────────────────────────────────────────
  "Type-Safe TypeScript Applications",
  "TypeScript-First API Servers",
  "TypeScript Monorepo Architectures",
  "TypeScript Generic Utility Libraries",
  "TypeScript Decorator-Based Frameworks",
  "TypeScript Strict-Mode Enterprise Apps",
  "Strongly-Typed GraphQL Schemas",
  "TypeScript CLI Tools",
  "JavaScript Performance-Optimized Modules",
  "Vanilla JavaScript SPA Applications",
  "ES Module-Based JavaScript Libraries",
  "JavaScript Build System Pipelines",
  "JavaScript Animation Libraries",
  "JavaScript Plugin Architectures",
  "JavaScript SDK Packages",
  "Isomorphic JavaScript Applications",
  "JavaScript Worker Thread Systems",
  "TypeScript Validation Schema Libraries",
  "TypeScript Dependency Injection Systems",
  "TypeScript Event Emitter Frameworks",
  // ── REST APIs ────────────────────────────────────────────────────────────
  "Production-Ready REST APIs",
  "Versioned REST API Architectures",
  "RESTful Hypermedia APIs",
  "REST API Gateway Systems",
  "Documented OpenAPI REST Services",
  "REST API Rate-Limiting Systems",
  "Paginated REST Data APIs",
  "REST APIs with JWT Authentication",
  "REST API Caching Layers",
  "REST API Monitoring Systems",
  "REST API Integration Platforms",
  "REST API SDK Wrappers",
  "Secure REST API Backends",
  "REST APIs with Role-Based Access",
  "REST APIs for Mobile Applications",
  "REST APIs for IoT Devices",
  "REST APIs with Webhook Support",
  "REST API Developer Portals",
  "REST APIs with Audit Logging",
  "Multi-Version REST API Systems",
  // ── GraphQL ───────────────────────────────────────────────────────────────
  "GraphQL API Servers",
  "GraphQL Schema-First Architectures",
  "GraphQL Federation Gateways",
  "GraphQL Real-Time Subscriptions",
  "GraphQL Code-First Backends",
  "GraphQL Caching Layers",
  "GraphQL Batch Loading Systems",
  "GraphQL Authorization Frameworks",
  "GraphQL File Upload Services",
  "GraphQL Persisted Query Systems",
  "GraphQL Apollo Server Applications",
  "GraphQL with DataLoader Optimizations",
  "GraphQL Introspection Portals",
  "Federated GraphQL Microservices",
  "GraphQL Pagination Systems",
  // ── Microservices & Architecture ──────────────────────────────────────────
  "Production-Ready Microservice Architectures",
  "Event-Driven Microservice Systems",
  "Domain-Driven Microservice Platforms",
  "Container-Orchestrated Microservices",
  "gRPC-Based Microservice Backends",
  "API Gateway-Fronted Microservices",
  "CQRS-Pattern Application Systems",
  "Event Sourcing Microservice Systems",
  "Saga Pattern Distributed Systems",
  "Circuit-Breaker Resilient Services",
  "Service Mesh Architectures",
  "Sidecar Pattern Service Systems",
  "Message-Broker Microservice Platforms",
  "Async Microservice Communication Systems",
  "Contract-Tested Microservice APIs",
  "Hexagonal Architecture Applications",
  "Clean Architecture Backend Systems",
  "Onion Architecture Application Layers",
  "Strangler Fig Migration Architectures",
  "Distributed Tracing Service Systems",
  // ── WebSockets & Real-Time ────────────────────────────────────────────────
  "Real-Time WebSocket Applications",
  "Live Collaboration Platforms",
  "Real-Time Chat Applications",
  "Live Notification Systems",
  "Real-Time Data Streaming Platforms",
  "Socket.io-Powered Applications",
  "WebRTC Video Conferencing Apps",
  "Real-Time Multiplayer Game Backends",
  "Live Auction Platforms",
  "Real-Time Trading Dashboards",
  "Live Sports Score Systems",
  "Real-Time Location Tracking Apps",
  "Live Customer Support Chat Systems",
  "Real-Time Collaborative Editors",
  "Live Broadcast Notification Systems",
  "Real-Time Order Tracking Platforms",
  "WebSocket API Gateway Systems",
  "Real-Time Analytics Dashboards",
  "Live Feed Aggregation Systems",
  "Real-Time Sensor Data Platforms",
  // ── AWS ───────────────────────────────────────────────────────────────────
  "AWS Cloud Infrastructure Systems",
  "Serverless AWS Lambda Applications",
  "AWS ECS Container Deployments",
  "AWS EKS Kubernetes Clusters",
  "AWS S3 Static Hosting Platforms",
  "AWS CloudFront CDN Systems",
  "AWS RDS Managed Database Apps",
  "AWS DynamoDB Serverless Backends",
  "AWS SQS Queue-Driven Systems",
  "AWS SNS Notification Pipelines",
  "AWS API Gateway REST Services",
  "AWS Cognito Authentication Systems",
  "AWS Elastic Beanstalk Deployments",
  "AWS CloudFormation IaC Templates",
  "AWS Step Functions Workflow Systems",
  "AWS Rekognition Image AI Apps",
  "AWS Textract Document Processors",
  "AWS Bedrock AI Application Backends",
  "AWS SES Email Delivery Systems",
  "AWS CloudWatch Monitoring Pipelines",
  "AWS VPC Network Architectures",
  "AWS IAM Security Policy Systems",
  "AWS AppSync GraphQL Services",
  "AWS Route 53 DNS Management Systems",
  "Multi-Region AWS HA Architectures",
  // ── Azure & Google Cloud ──────────────────────────────────────────────────
  "Azure Cloud Application Backends",
  "Azure Functions Serverless Systems",
  "Azure Kubernetes AKS Deployments",
  "Azure Blob Storage File Systems",
  "Azure Cognitive Services AI Apps",
  "Azure DevOps CI/CD Pipelines",
  "Azure Active Directory Auth Systems",
  "Google Cloud Run Serverless Apps",
  "Google Cloud Pub/Sub Event Systems",
  "Google Firebase Real-Time Backends",
  "Google Cloud BigQuery Analytics",
  "Google Cloud AI Platform Solutions",
  "GCP Container Registry Pipelines",
  "Multi-Cloud Application Architectures",
  "Hybrid Cloud Integration Systems",
  // ── Serverless ────────────────────────────────────────────────────────────
  "Serverless Application Backends",
  "Serverless REST API Platforms",
  "Serverless Event-Driven Pipelines",
  "Serverless Data Processing Systems",
  "Serverless File Processing Workflows",
  "Serverless Authentication Systems",
  "Serverless Image Resizing Pipelines",
  "Serverless Webhook Processors",
  "Serverless Scheduled Job Systems",
  "Serverless Cost-Optimized Backends",
  "Serverless Edge Function Applications",
  "Serverless Multi-Region Deployments",
  "Serverless GraphQL API Backends",
  "Serverless E-Commerce Checkout Systems",
  "Serverless CMS Backend Services",
  // ── Docker & Kubernetes ───────────────────────────────────────────────────
  "Dockerized Application Stacks",
  "Multi-Stage Docker Build Systems",
  "Docker Compose Development Environments",
  "Kubernetes-Orchestrated Applications",
  "Helm Chart Application Deployments",
  "Kubernetes Auto-Scaling Systems",
  "Kubernetes Namespace-Isolated Services",
  "Kubernetes Ingress Controller Systems",
  "Kubernetes Secrets Management Systems",
  "Kubernetes Rolling Update Pipelines",
  "Kubernetes StatefulSet Database Apps",
  "Kubernetes Service Mesh Platforms",
  "Container Security Scanning Pipelines",
  "Docker Swarm Cluster Applications",
  "Container Registry Automation Systems",
  // ── DevOps & CI/CD ───────────────────────────────────────────────────────
  "Automated CI/CD Pipelines",
  "GitHub Actions Deployment Workflows",
  "GitLab CI/CD Automation Systems",
  "Jenkins Build Automation Pipelines",
  "Infrastructure as Code Platforms",
  "Terraform Cloud Infrastructure Systems",
  "Ansible Configuration Management Systems",
  "Blue-Green Deployment Pipelines",
  "Canary Release Deployment Systems",
  "Feature Flag Deployment Platforms",
  "Automated Test Pipeline Systems",
  "Code Quality Gate Pipelines",
  "Dependency Update Automation Systems",
  "Security Scanning CI/CD Pipelines",
  "Multi-Environment Deployment Systems",
  "Release Automation Platforms",
  "Drift Detection Infrastructure Systems",
  "GitOps Workflow Platforms",
  "Rollback Automation Deployment Systems",
  "Deployment Approval Gate Systems",
  // ── Monitoring & Observability ────────────────────────────────────────────
  "Application Performance Monitoring Systems",
  "Distributed Tracing Observability Platforms",
  "Log Aggregation and Analysis Systems",
  "Custom Metrics Dashboard Systems",
  "Alerting and Incident Response Platforms",
  "Uptime Monitoring Service Systems",
  "Error Tracking and Reporting Platforms",
  "Real-User Monitoring Applications",
  "SLO/SLA Tracking Platforms",
  "OpenTelemetry Instrumented Applications",
  "Grafana Dashboard Systems",
  "Prometheus Metrics Collection Platforms",
  "ELK Stack Logging Systems",
  "Datadog Integration Platforms",
  "New Relic Observability Systems",
  // ── AI & Generative AI ────────────────────────────────────────────────────
  "AI-Powered Web Applications",
  "Generative AI SaaS Platforms",
  "LLM-Powered Application Backends",
  "AI Agent Orchestration Systems",
  "RAG-Based Knowledge Retrieval Systems",
  "AI Workflow Automation Platforms",
  "OpenAI API Integration Systems",
  "AI Content Generation Platforms",
  "AI-Powered Customer Support Systems",
  "AI Code Review Assistant Tools",
  "AI Document Analysis Platforms",
  "AI Image Generation Pipelines",
  "AI Video Processing Systems",
  "AI Recommendation Engines",
  "AI-Powered Search Platforms",
  "AI Sentiment Analysis Systems",
  "AI Text Classification Pipelines",
  "AI-Powered Hiring Platforms",
  "AI Resume Screening Systems",
  "AI Product Description Generators",
  "AI Email Drafting Tools",
  "AI Meeting Summarization Platforms",
  "AI Contract Analysis Systems",
  "AI Data Extraction Pipelines",
  "AI-Powered CRM Platforms",
  // ── Machine Learning ──────────────────────────────────────────────────────
  "Machine Learning Model Serving APIs",
  "ML Data Preprocessing Pipelines",
  "ML Feature Engineering Systems",
  "ML Model Training Orchestration Systems",
  "ML Experiment Tracking Platforms",
  "ML Model Registry Systems",
  "ML A/B Testing Frameworks",
  "ML Inference Optimization Systems",
  "ML Online Learning Pipelines",
  "ML Batch Prediction Systems",
  "ML Model Drift Detection Platforms",
  "ML Model Explainability Dashboards",
  "ML AutoML Pipeline Systems",
  "ML Data Labeling Platforms",
  "ML Training Data Versioning Systems",
  // ── NLP & Chatbots ────────────────────────────────────────────────────────
  "NLP Text Processing Pipelines",
  "Named Entity Recognition Systems",
  "Sentiment Analysis Microservices",
  "Text Summarization Platforms",
  "Language Translation APIs",
  "Chatbot Application Platforms",
  "Conversational AI Systems",
  "FAQ Automation Chatbots",
  "E-Commerce Shopping Assistants",
  "HR Onboarding Chatbots",
  "Customer Intent Classification Systems",
  "Multi-Turn Dialogue Management Systems",
  "Voice Assistant Backend Systems",
  "Multilingual NLP Platforms",
  "Document Question-Answering Systems",
  // ── Computer Vision ───────────────────────────────────────────────────────
  "Computer Vision Processing Pipelines",
  "Object Detection API Systems",
  "Facial Recognition Platforms",
  "Image Classification Services",
  "OCR Document Digitization Platforms",
  "Video Analysis Backend Systems",
  "Real-Time Video Surveillance Platforms",
  "Barcode and QR Code Scanning APIs",
  "Image Similarity Search Systems",
  "Visual Product Search Platforms",
  "Medical Imaging AI Platforms",
  "Document Layout Analysis Systems",
  "Image Moderation Pipelines",
  "Automated Image Tagging Systems",
  "Aerial Image Analysis Platforms",
  // ── Vector Databases & Embeddings ─────────────────────────────────────────
  "Vector Database Search Systems",
  "Semantic Search Platforms",
  "Embedding Generation Pipelines",
  "Pinecone-Backed Retrieval Systems",
  "Weaviate Vector Store Applications",
  "Qdrant Similarity Search APIs",
  "Hybrid Keyword and Vector Search Systems",
  "Document Embedding Indexing Platforms",
  "Multi-Modal Embedding Search Systems",
  "Knowledge Graph Search Platforms",
  "Vector-Powered Recommendation Systems",
  "Semantic Text Clustering Platforms",
  "Embedding-Based Duplicate Detection Systems",
  "Real-Time Semantic Alert Systems",
  "Personalized Vector Retrieval Platforms",
  // ── Databases ─────────────────────────────────────────────────────────────
  "MongoDB Atlas Database Applications",
  "MongoDB Aggregation Pipeline Systems",
  "MongoDB Sharded Cluster Architectures",
  "PostgreSQL High-Performance Backends",
  "PostgreSQL Full-Text Search Systems",
  "PostgreSQL Partitioned Table Systems",
  "MySQL Optimized Application Backends",
  "MariaDB Database-Backed Platforms",
  "SQLite Embedded Database Applications",
  "Redis Cache Layer Systems",
  "Redis Pub/Sub Messaging Systems",
  "Redis Session Store Platforms",
  "Redis Rate-Limiter Backends",
  "Redis Sorted Set Leaderboard Systems",
  "Cassandra Wide-Column Store Applications",
  "InfluxDB Time-Series Platforms",
  "TimescaleDB Analytics Backends",
  "CockroachDB Distributed Database Apps",
  "Database Migration Automation Systems",
  "Multi-Database Abstraction Layers",
  // ── Caching & Search ──────────────────────────────────────────────────────
  "Application-Layer Caching Systems",
  "CDN Cache Optimization Platforms",
  "Cache Invalidation Strategy Systems",
  "Distributed Caching Architectures",
  "Elasticsearch Full-Text Search Platforms",
  "Algolia-Powered Search Applications",
  "Typesense Search Backend Systems",
  "Meilisearch Application Integrations",
  "Search Auto-Complete API Systems",
  "Faceted Product Search Platforms",
  "Geo-Location Search Applications",
  "Multi-Language Search Platforms",
  "Search Analytics Tracking Systems",
  "Search Relevance Tuning Platforms",
  "Instant Search UI Components",
  // ── Authentication & Security ─────────────────────────────────────────────
  "JWT Authentication Systems",
  "OAuth 2.0 Integration Platforms",
  "OpenID Connect Authentication Systems",
  "SSO Single Sign-On Platforms",
  "Role-Based Access Control Systems",
  "Attribute-Based Access Control Systems",
  "Multi-Factor Authentication Systems",
  "Passwordless Authentication Platforms",
  "API Key Management Systems",
  "Session Management Platforms",
  "Zero-Trust Security Architectures",
  "End-to-End Encrypted Messaging Systems",
  "Data Encryption at Rest Platforms",
  "Security Audit Logging Systems",
  "OWASP-Compliant Secure Applications",
  "GDPR-Compliant Data Platforms",
  "HIPAA-Compliant Healthcare Systems",
  "CSP Security Header Systems",
  "Intrusion Detection Application Systems",
  "API Security Rate Limiting Systems",
  // ── Payment & E-Commerce ──────────────────────────────────────────────────
  "Stripe Payment Integration Platforms",
  "Razorpay Payment Gateway Systems",
  "PayPal Integration Checkout Systems",
  "Subscription Billing Platforms",
  "Recurring Payment Management Systems",
  "Multi-Currency Payment Platforms",
  "Split Payment Marketplace Systems",
  "Escrow Payment Platforms",
  "Refund Management Automation Systems",
  "Invoice Generation Platforms",
  "Tax Calculation Systems",
  "E-Commerce Order Management Platforms",
  "Shopping Cart and Checkout Systems",
  "Product Catalog Management Systems",
  "Flash Sale E-Commerce Platforms",
  "Coupon and Discount Engine Systems",
  "Abandoned Cart Recovery Systems",
  "B2B Wholesale E-Commerce Platforms",
  "Headless E-Commerce Backends",
  "E-Commerce Analytics Dashboards",
  // ── SaaS & Enterprise ─────────────────────────────────────────────────────
  "Multi-Tenant SaaS Platforms",
  "White-Label SaaS Products",
  "Enterprise Software Solutions",
  "B2B SaaS Application Backends",
  "SaaS Onboarding Flow Systems",
  "SaaS Billing and Subscription Platforms",
  "SaaS Feature Flag Systems",
  "SaaS Usage Analytics Dashboards",
  "SaaS Customer Portal Platforms",
  "SaaS API Developer Platforms",
  "SaaS Audit Trail Systems",
  "SaaS Export and Reporting Platforms",
  "SaaS Notification Center Systems",
  "SaaS Data Isolation Architectures",
  "SaaS Team Collaboration Platforms",
  // ── Data Pipelines & ETL ──────────────────────────────────────────────────
  "ETL Data Processing Pipelines",
  "Real-Time Data Ingestion Systems",
  "Batch Data Processing Platforms",
  "Data Transformation Automation Systems",
  "Data Quality Validation Pipelines",
  "CDC Change Data Capture Systems",
  "Data Lakehouse Architectures",
  "Apache Kafka Event Streaming Systems",
  "RabbitMQ Message Queue Platforms",
  "Apache Spark Data Processing Pipelines",
  "Airflow Workflow Orchestration Systems",
  "Data Warehouse Integration Platforms",
  "Snowflake Data Analytics Systems",
  "Data Enrichment Processing Pipelines",
  "Reverse ETL Operational Data Systems",
  // ── Automation & Workers ──────────────────────────────────────────────────
  "Business Process Automation Platforms",
  "Workflow Automation Engine Systems",
  "Cron Job Scheduling Platforms",
  "Background Worker Queue Systems",
  "Task Orchestration Automation Platforms",
  "Email Campaign Automation Systems",
  "Social Media Automation Pipelines",
  "Web Scraping Automation Systems",
  "Report Generation Automation Platforms",
  "File Processing Automation Pipelines",
  "Data Sync Automation Systems",
  "Onboarding Automation Platforms",
  "Customer Lifecycle Automation Systems",
  "Invoice Automation Platforms",
  "Alert Automation Monitoring Systems",
  // ── Messaging & Notifications ─────────────────────────────────────────────
  "Push Notification Delivery Systems",
  "In-App Notification Center Platforms",
  "Email Notification Dispatch Systems",
  "SMS Notification Gateway Platforms",
  "Transactional Email Platforms",
  "Multi-Channel Messaging Systems",
  "Real-Time Alert Delivery Platforms",
  "User Preference Notification Systems",
  "Notification Template Engine Platforms",
  "Notification Analytics Tracking Systems",
  "Digest Email Automation Platforms",
  "Event-Triggered Notification Systems",
  "Notification A/B Testing Platforms",
  "Browser Push Notification Systems",
  "Slack Integration Notification Bots",
  // ── Mobile & PWA ──────────────────────────────────────────────────────────
  "Progressive Web App Platforms",
  "Mobile-First Responsive Applications",
  "React Native Application Backends",
  "Offline-Capable PWA Systems",
  "Mobile App REST API Backends",
  "Mobile Push Notification Systems",
  "Mobile Authentication Backend Systems",
  "App Store-Ready API Platforms",
  "Mobile Payment Integration Backends",
  "Mobile Analytics Tracking Systems",
  "Mobile Deep Linking Platforms",
  "Mobile Media Upload Backend Systems",
  "Mobile Location-Based Platforms",
  "Mobile Geofencing Backend Systems",
  "Hybrid Mobile Application Backends",
  // ── File & Media ──────────────────────────────────────────────────────────
  "File Upload and Management Systems",
  "Cloud-Backed Document Storage Platforms",
  "S3-Powered File Sharing Systems",
  "Image Processing and Optimization Pipelines",
  "Video Upload and Transcoding Platforms",
  "Media CDN Delivery Systems",
  "PDF Generation and Export Platforms",
  "Excel/CSV Import and Export Systems",
  "File Version Control Platforms",
  "Resumable File Upload Systems",
  "File Encryption and Secure Sharing Platforms",
  "Thumbnail Generation Pipelines",
  "Media Streaming Backend Systems",
  "Document Preview Rendering Platforms",
  "Bulk File Processing Pipelines",
  // ── Developer Tools & APIs ────────────────────────────────────────────────
  "Public API Developer Platforms",
  "Developer SDK Packages",
  "API Documentation Portal Systems",
  "API Mocking and Testing Platforms",
  "Postman Collection Automation Systems",
  "CLI Developer Tool Applications",
  "VS Code Extension Systems",
  "Chrome Extension Application Backends",
  "Browser DevTools Plugin Systems",
  "Code Generation Tool Platforms",
  "API Proxy and Transform Systems",
  "Webhook Testing Platforms",
  "API Version Control Systems",
  "Developer Onboarding Platform Systems",
  "API Rate Limit Management Platforms",
  // ── CMS & Content ─────────────────────────────────────────────────────────
  "Headless CMS-Powered Platforms",
  "Content Management Systems",
  "Blog Publishing Platforms",
  "Documentation Site Generators",
  "Knowledge Base Management Systems",
  "Content Localization Platforms",
  "Multi-Language CMS Systems",
  "Content Approval Workflow Platforms",
  "Content Scheduling Automation Systems",
  "Structured Content API Backends",
  "Rich Text Editor Integration Platforms",
  "Content Version History Systems",
  "Content Personalization Platforms",
  "Content Analytics Tracking Systems",
  "Static Site Generation Pipelines",
  // ── Analytics & Reporting ─────────────────────────────────────────────────
  "Business Intelligence Dashboards",
  "Custom Analytics Reporting Platforms",
  "Revenue Analytics Tracking Systems",
  "User Behavior Analytics Platforms",
  "Funnel Analysis Dashboard Systems",
  "Cohort Analysis Reporting Platforms",
  "A/B Testing Analytics Platforms",
  "KPI Tracking Dashboard Systems",
  "Sales Analytics Reporting Platforms",
  "Marketing Attribution Analysis Systems",
  "Real-Time Analytics Streaming Platforms",
  "Embedded Analytics Application Systems",
  "Data Visualization Dashboard Platforms",
  "Automated Report Generation Systems",
  "Executive Summary Reporting Platforms",
  // ── Communication Platforms ───────────────────────────────────────────────
  "Team Messaging Collaboration Platforms",
  "Video Conferencing Integration Systems",
  "Voice Calling Backend Platforms",
  "Internal Communication Tool Systems",
  "Customer Messaging Inbox Platforms",
  "Shared Inbox Management Systems",
  "Group Chat Application Backends",
  "Threaded Discussion Platforms",
  "Broadcast Messaging Systems",
  "Live Q&A Session Platforms",
  "Async Video Messaging Platforms",
  "Customer Feedback Collection Systems",
  "User Survey and Polling Platforms",
  "Community Forum Application Systems",
  "Support Ticket Management Platforms",
  // ── Healthcare & Specialty ────────────────────────────────────────────────
  "HIPAA-Compliant Healthcare Platforms",
  "Telemedicine Application Backends",
  "Electronic Health Record Systems",
  "Patient Portal Applications",
  "Medical Appointment Scheduling Systems",
  "Healthcare Analytics Dashboards",
  "Clinical Trial Data Platforms",
  "Pharmacy Management Systems",
  "Health Insurance Integration Platforms",
  "Mental Health Application Backends",
  "Wellness Tracking Platform Systems",
  "Fitness App Backend Systems",
  "Nutrition Tracking Application Platforms",
  "Remote Patient Monitoring Systems",
  "Healthcare AI Diagnostic Platforms",
  // ── FinTech ───────────────────────────────────────────────────────────────
  "FinTech Payment Processing Platforms",
  "Banking API Integration Systems",
  "Open Banking Application Backends",
  "Personal Finance Management Apps",
  "Expense Tracking Platform Systems",
  "Crypto Wallet Backend Systems",
  "Blockchain Transaction Tracking Platforms",
  "DeFi Protocol Integration Systems",
  "Stock Portfolio Tracking Platforms",
  "Loan Management Application Systems",
  "Credit Scoring API Platforms",
  "Fraud Detection ML Systems",
  "Financial Reporting Automation Platforms",
  "Regulatory Compliance Reporting Systems",
  "KYC Verification Automation Platforms",
  // ── EdTech ────────────────────────────────────────────────────────────────
  "Learning Management System Platforms",
  "Online Course Delivery Applications",
  "EdTech Video Streaming Backends",
  "Student Progress Tracking Systems",
  "Quiz and Assessment Engine Platforms",
  "Live Virtual Classroom Backends",
  "Gamified Learning Application Systems",
  "EdTech Subscription Billing Platforms",
  "Educational Content CMS Platforms",
  "Adaptive Learning AI Platforms",
  "Peer Review Collaboration Systems",
  "EdTech Analytics Reporting Dashboards",
  "Certificate Generation Platforms",
  "Coding Challenge Judge Systems",
  "Student Community Forum Platforms",
  // ── Logistics & Operations ────────────────────────────────────────────────
  "Fleet Management Application Systems",
  "Real-Time Vehicle Tracking Platforms",
  "Route Optimization API Systems",
  "Last-Mile Delivery Tracking Platforms",
  "Warehouse Management Systems",
  "Supply Chain Visibility Platforms",
  "Order Fulfillment Automation Systems",
  "Shipment Tracking Integration Platforms",
  "Carrier API Integration Systems",
  "Inventory Forecasting Platforms",
  "Returns Management Automation Systems",
  "Logistics Analytics Dashboard Systems",
  "Driver Management App Backends",
  "Cold Chain Monitoring Platforms",
  "Cross-Border Trade Management Systems",
  // ── IoT & Edge ────────────────────────────────────────────────────────────
  "IoT Device Management Platforms",
  "IoT Data Ingestion Pipeline Systems",
  "Real-Time IoT Dashboard Applications",
  "Edge Computing Application Backends",
  "MQTT Message Broker Systems",
  "IoT Alert and Monitoring Platforms",
  "Smart Home Automation Backends",
  "Industrial IoT Monitoring Systems",
  "IoT Firmware Update Delivery Platforms",
  "IoT Digital Twin Simulation Systems",
  "IoT Fleet Provisioning Platforms",
  "Sensor Data Visualization Platforms",
  "IoT Predictive Maintenance Systems",
  "Energy Monitoring IoT Platforms",
  "Environmental Monitoring Sensor Apps",
  // ── Security & Compliance ─────────────────────────────────────────────────
  "SOC 2 Compliant Application Systems",
  "GDPR Data Privacy Platforms",
  "CCPA Compliance Application Systems",
  "PCI DSS Compliant Payment Systems",
  "Penetration Test Hardened Applications",
  "Secrets Vault Integration Systems",
  "API Threat Protection Platforms",
  "DDoS Mitigation Application Systems",
  "WAF-Protected Web Application Backends",
  "Security Information Event Management Systems",
  "Identity and Access Management Platforms",
  "Privileged Access Management Systems",
  "Compliance Audit Trail Platforms",
  "Data Masking and Anonymization Systems",
  "Vulnerability Scanning Automation Systems",
  // ── Scalability & Performance ─────────────────────────────────────────────
  "Horizontally Scalable Application Architectures",
  "High-Availability Application Systems",
  "Fault-Tolerant Distributed Platforms",
  "Auto-Scaling Cloud Application Systems",
  "Database Connection Pool Optimizations",
  "CDN-Optimized Web Application Platforms",
  "Load-Balanced API Gateway Systems",
  "Performance-Profiled Backend Systems",
  "Memory-Optimized Application Backends",
  "Database Query-Optimized Platforms",
  "Latency-Reduced Global Edge Systems",
  "Throughput-Optimized Data Pipelines",
  "Chaos Engineering Resilient Platforms",
  "Capacity Planning Automation Systems",
  "Geo-Distributed Application Platforms",
  // ── Testing & Quality ─────────────────────────────────────────────────────
  "Automated End-to-End Testing Systems",
  "Unit Test-Covered Application Backends",
  "Integration Test Automation Platforms",
  "Contract Testing Microservice Systems",
  "Load Testing Automation Platforms",
  "Visual Regression Testing Systems",
  "API Test Automation Frameworks",
  "Test Coverage Reporting Platforms",
  "Continuous Testing Pipeline Systems",
  "Browser Automation Testing Platforms",
  "Snapshot Testing Application Systems",
  "Mutation Testing Automation Platforms",
  "Fuzz Testing Security Systems",
  "Performance Benchmark Platforms",
  "Quality Gate Enforcement Systems",
  // ── Open Source & Tooling ─────────────────────────────────────────────────
  "Open Source Library Packages",
  "NPM Package Publishing Systems",
  "Monorepo Workspace Management Systems",
  "Turborepo Build Cache Platforms",
  "Nx Workspace Automation Systems",
  "Vite Plugin Extension Systems",
  "Webpack Custom Build Pipelines",
  "ESLint Custom Rule Platforms",
  "Prettier Plugin Integration Systems",
  "Husky Pre-Commit Hook Systems",
  "Changesets Release Management Platforms",
  "Semantic Release Automation Systems",
  "Documentation Generation Platforms",
  "Storybook Component Documentation Systems",
  "Open Source Contribution Tooling",
  // ── Blockchain & Web3 ─────────────────────────────────────────────────────
  "Web3 DApp Application Backends",
  "Smart Contract Integration Systems",
  "NFT Marketplace Platform Backends",
  "Blockchain Explorer Applications",
  "Decentralized Identity Platforms",
  "IPFS File Storage Integration Systems",
  "Crypto Portfolio Tracking Apps",
  "Token Gating Application Systems",
  "Web3 Wallet Authentication Platforms",
  "DAO Governance Voting Systems",
  "DeFi Analytics Dashboard Platforms",
  "Cross-Chain Bridge Integration Systems",
  "Metaverse Backend Infrastructure Systems",
  "Blockchain Audit Trail Platforms",
  "Web3 Social Application Backends",
  // ── Productivity & Workplace ──────────────────────────────────────────────
  "Internal Developer Tool Platforms",
  "Employee Productivity Dashboard Systems",
  "HR Onboarding Automation Platforms",
  "Leave Management Application Systems",
  "Payroll Processing Automation Platforms",
  "Time Tracking Application Systems",
  "Project Management Tool Backends",
  "OKR Tracking Platform Systems",
  "Performance Review Automation Platforms",
  "Company Knowledge Wiki Systems",
  "Remote Work Collaboration Platforms",
  "Meeting Scheduler Application Systems",
  "Interview Scheduling Automation Platforms",
  "Employee Directory Application Systems",
  "Workplace Analytics Dashboard Platforms",
  // ── Creative & Media ──────────────────────────────────────────────────────
  "Video Streaming Platform Backends",
  "Podcast Hosting Application Systems",
  "Music Streaming API Backend Systems",
  "Digital Asset Management Platforms",
  "Creative Portfolio Platform Systems",
  "Stock Photo Marketplace Backends",
  "AI-Powered Image Editing Platforms",
  "Video Editing Collaboration Systems",
  "3D Asset Management Platforms",
  "AR Filter Generation Systems",
  "Interactive Storytelling Platforms",
  "Game Score Leaderboard Systems",
  "Event Live Stream Backends",
  "Fan Engagement Platform Systems",
  "Creator Monetization Application Platforms",
  // ── Miscellaneous Creative Combos ─────────────────────────────────────────
  "Scalable AI-Powered SaaS Platforms",
  "Intelligent Business Automation Systems",
  "Cloud-Native Enterprise Applications",
  "Secure Multi-Tenant Data Platforms",
  "Event-Driven Cloud Applications",
  "Intelligent Data Processing Platforms",
  "AI-Powered Workflow Automation Systems",
  "Observability-First Backend Platforms",
  "Privacy-First User Data Systems",
  "High-Throughput Message Streaming Platforms",
  "Globally Distributed API Networks",
  "Smart Contract-Integrated Web Platforms",
  "AI-Enhanced E-Commerce Systems",
  "Serverless AI Inference Platforms",
  "Microservice-Based Data Aggregation Systems",
  "Plug-and-Play Integration Middleware Platforms",
  "Event-Sourced Financial Ledger Systems",
  "Low-Latency Trading Platform Backends",
  "Compliance-Driven Healthcare Data Systems",
  "Developer-Friendly Open API Ecosystems",
  "Resilient Multi-Cloud Data Platforms",
  "AI-Driven Personalization Engine Systems",
  "Zero-Downtime Database Migration Systems",
  "Distributed Cache Invalidation Platforms",
  "Composable Commerce Application Backends",
  "GraphQL Federation Data Mesh Systems",
  "Self-Healing Infrastructure Automation Systems",
  "Chaos-Resilient Microservice Platforms",
  "Predictive Scaling Cloud Architectures",
  "Platform Engineering Developer Portals",
  // ── API Management & Gateway ──────────────────────────────────────────────
  "Kong API Gateway Systems",
  "API Lifecycle Management Platforms",
  "GraphQL API Management Systems",
  "Federated API Identity Platforms",
  "API Analytics and Usage Tracking Systems",
  "Developer API Marketplace Platforms",
  "Throttled Multi-Tenant API Backends",
  "API Contract Validation Pipelines",
  "REST-to-GraphQL Migration Systems",
  "Unified API Aggregation Gateways",
  // ── Frontend Architecture ─────────────────────────────────────────────────
  "Micro-Frontend Shell Application Systems",
  "Module Federation Webpack Applications",
  "Island Architecture Web Platforms",
  "Partial Hydration React Applications",
  "Edge-Rendered Frontend Platforms",
  "Streaming SSR Next.js Applications",
  "Resumable Qwik-Inspired Web Apps",
  "Astro Static Island Applications",
  "Zero-JS Static Frontend Platforms",
  "Incremental Static Regeneration Websites",
  // ── State Management ──────────────────────────────────────────────────────
  "Redux Toolkit Application Stores",
  "Zustand Lightweight State Systems",
  "Jotai Atomic State Applications",
  "React Query Server State Platforms",
  "XState Finite State Machine Systems",
  "TanStack Query Caching Platforms",
  "MobX Observable State Applications",
  "Recoil Concurrent State Systems",
  "Valtio Proxy State Applications",
  "Signal-Based Reactive UI Systems",
  // ── Animation & UX ────────────────────────────────────────────────────────
  "Framer Motion Animated Web Apps",
  "GSAP-Powered Interactive Experiences",
  "Lottie Animation Integration Platforms",
  "Three.js 3D Web Experience Systems",
  "WebGL Shader-Rendered Applications",
  "CSS Animation Performance Systems",
  "Scroll-Triggered Animation Platforms",
  "Page Transition Animation Systems",
  "Gesture-Driven Interactive Applications",
  "Parallax Scroll Experience Platforms",
  // ── Rendering & Performance ───────────────────────────────────────────────
  "Core Web Vitals Optimized Platforms",
  "LCP-Optimized Image Delivery Systems",
  "CLS-Free Layout Stable Applications",
  "FID-Optimized Interactive Platforms",
  "Critical Path CSS Optimization Systems",
  "Above-the-Fold Performance Systems",
  "Resource Hint Preloading Platforms",
  "Font Loading Optimization Systems",
  "HTTP/2 Push Optimized Applications",
  "Brotli-Compressed Web Delivery Systems",
  // ── Accessibility & Internationalization ──────────────────────────────────
  "WCAG 2.2 Compliant Web Applications",
  "Screen Reader Compatible Platforms",
  "Keyboard Navigation Optimized Systems",
  "ARIA-Annotated Component Libraries",
  "Color Contrast Accessible UI Systems",
  "RTL Language Support Applications",
  "i18n Multi-Language SaaS Platforms",
  "Locale-Aware Date and Time Systems",
  "Pluralization Engine Integration Platforms",
  "Dynamic Language Switching Applications",
  // ── Testing Frameworks ────────────────────────────────────────────────────
  "Jest Unit Test Suite Systems",
  "Vitest Fast Test Automation Platforms",
  "Playwright End-to-End Test Systems",
  "Cypress Component Test Platforms",
  "Storybook Interaction Test Systems",
  "Testing Library Integration Platforms",
  "Supertest API Endpoint Test Systems",
  "Pact Consumer Contract Test Platforms",
  "k6 Load Test Automation Systems",
  "Artillery Stress Test Automation Platforms",
  // ── Database Patterns ─────────────────────────────────────────────────────
  "CQRS Read Model Projection Systems",
  "Event Store Persistence Platforms",
  "Optimistic Locking Database Systems",
  "Soft Delete Data Retention Platforms",
  "Audit Table History Tracking Systems",
  "Multi-Model Database Architecture Systems",
  "Polyglot Persistence Application Stacks",
  "Database Per Service Microservice Systems",
  "Shared Database Schema Migration Platforms",
  "Zero-Downtime Schema Evolution Systems",
  // ── Cloud Cost & FinOps ───────────────────────────────────────────────────
  "Cloud Cost Optimization Platforms",
  "AWS Savings Plan Analysis Systems",
  "Reserved Instance Management Platforms",
  "FinOps Dashboard Analytics Systems",
  "Spot Instance Orchestration Platforms",
  "Cloud Budget Alerting Systems",
  "Multi-Cloud Billing Aggregation Platforms",
  "Carbon Footprint Cloud Monitoring Systems",
  "Right-Sizing Automation Recommendation Platforms",
  "Cloud Waste Detection Analysis Systems",
  // ── Platform & Infrastructure ─────────────────────────────────────────────
  "Internal Developer Platform Systems",
  "Golden Path Template Platforms",
  "Service Catalog Automation Systems",
  "Self-Service Infrastructure Platforms",
  "Paved Road Developer Experience Systems",
  "Production Readiness Checklist Platforms",
  "SRE Reliability Engineering Platforms",
  "Error Budget Management Systems",
  "Toil Reduction Automation Platforms",
  "On-Call Incident Response Systems",
  // ── Data Mesh & Modern Data ───────────────────────────────────────────────
  "Data Mesh Architecture Platforms",
  "Data Product Domain Ownership Systems",
  "Self-Serve Data Infrastructure Platforms",
  "Federated Computational Governance Systems",
  "Data Contract Validation Platforms",
  "Real-Time OLAP Analytics Platforms",
  "Lakehouse Table Format Systems",
  "Apache Iceberg Data Lake Platforms",
  "Delta Lake Transaction Log Systems",
  "Apache Hudi Upsert Data Platforms",
  // ── AI Infrastructure ─────────────────────────────────────────────────────
  "LLM Prompt Engineering Platforms",
  "AI Model Evaluation Frameworks",
  "AI Safety and Alignment Systems",
  "Retrieval Augmented Generation Pipelines",
  "Fine-Tuned Language Model Platforms",
  "AI Gateway and Router Systems",
  "LLM Observability Monitoring Platforms",
  "AI Cost Optimization Inference Systems",
  "Multi-Model AI Orchestration Platforms",
  "AI Red Teaming Security Systems",
  // ── Edge & CDN ────────────────────────────────────────────────────────────
  "Cloudflare Workers Edge Applications",
  "Vercel Edge Runtime Platforms",
  "Fastly Compute Edge Systems",
  "Akamai Edge Logic Applications",
  "Edge Database Synchronization Platforms",
  "Edge A/B Testing Experiment Systems",
  "Edge Authentication Middleware Platforms",
  "Edge Image Transformation Systems",
  "Edge Caching Invalidation Platforms",
  "PoP-Distributed Global API Systems",
  // ── SRE & Reliability ─────────────────────────────────────────────────────
  "Site Reliability Engineering Platforms",
  "Runbook Automation Execution Systems",
  "Blameless Post-Mortem Analysis Platforms",
  "Game Day Chaos Simulation Systems",
  "Dependency Risk Analysis Platforms",
  "Change Risk Assessment Systems",
  "Deployment Frequency Tracking Platforms",
  "Mean Time to Recovery Optimization Systems",
  "Lead Time for Change Measurement Platforms",
  "DORA Metrics Tracking Systems",
  // ── Developer Experience ──────────────────────────────────────────────────
  "Code Review Automation Platforms",
  "PR Review Bot Integration Systems",
  "Dependency Graph Visualization Tools",
  "Codebase Health Scoring Platforms",
  "Technical Debt Tracking Systems",
  "Architecture Decision Record Platforms",
  "API Changelog Generation Systems",
  "Automated Code Documentation Platforms",
  "Developer Productivity Analytics Systems",
  "Engineering Metrics Dashboard Platforms",
];

/**
 * Pick `count` unique random items from HERO_TITLES_POOL using a
 * partial Fisher-Yates shuffle — O(count) time, no repeats guaranteed.
 * Pool contains 1000+ entries, so requesting 399 always succeeds.
 */
export function getRandomHeroTitles(count: number = 399): string[] {
  const pool = [...HERO_TITLES_POOL];
  const take = Math.min(count, pool.length);
  for (let i = 0; i < take; i++) {
    const idx = Math.floor(Math.random() * (pool.length - i)) + i;
    [pool[i], pool[idx]] = [pool[idx], pool[i]];
  }
  return pool.slice(0, take);
}

// Legacy export kept for backward compatibility
export const HERO_TITLES = HERO_TITLES_POOL.slice(0, 12);

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

export function getProjectById(id: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}

export function getServiceById(id: string): ServiceCard | undefined {
  return SERVICES_DATA.find((s) => s.id === id);
}

export function getIndustryById(id: string): IndustryCard | undefined {
  return INDUSTRIES_DATA.find((i) => i.id === id);
}

