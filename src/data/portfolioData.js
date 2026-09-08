// Single Source of Truth for Portfolio Content & Links
// Update the URLs below when ready to deploy your actual profiles and repositories.

export const PERSONAL_INFO = {
  name: "Sowmiya M",
  role: "Computer Science Engineering Undergraduate | Backend Developer",
  heroHeading: "Hi, I'm Sowmiya M",
  heroSubheading: "Computer Science Engineering Student & Backend Developer",
  heroDescription:
    "I build secure and scalable backend applications using Java, Spring Boot, REST APIs, and relational databases.",
  shortIntro:
    "Backend-focused Computer Science Engineering undergraduate with hands-on experience building secure, layered REST APIs using Java, Spring Boot, Spring Security, JWT, Spring Data JPA/Hibernate, and MySQL.",
  extendedBio: [
    "I am a Computer Science Engineering undergraduate with a strong focus on backend systems development.",
    "My core work revolves around designing secure, high-performance REST APIs with Java and the Spring Boot ecosystem.",
    "I have implemented stateless authentication and role-based authorization using Spring Security and JWT, alongside relational data persistence with Spring Data JPA/Hibernate and MySQL.",
    "Beyond system architecture, I actively practice Data Structures & Algorithms to hone my problem-solving ability, and explore AI integrations and workflow automation tools like n8n."
  ],
  statusBadge: "Available for Internships & Full-time Roles",
  backendBadge: "Java • Spring Boot • REST APIs",
  copyright: "© 2026 Sowmiya M. All rights reserved."
};

export const SOCIAL_LINKS = {
  github: {
    label: "GitHub",
    url: "https://github.com/sowmiyamurugan9842",
    placeholder: false
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sowmiya-murugan-9a8726327",
    placeholder: false
  },
  leetcode: {
    label: "LeetCode",
    url: "https://leetcode.com/u/SOWMIYA_MURUGAN_24/",
    placeholder: false
  },
  email: {
    label: "Email",
    address: "sowmiyamurugan9842@gmail.com",
    placeholder: false
  }
};

export const FOCUS_AREAS = [
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Architecting robust, layered backend services with Java and Spring Boot following clean architecture principles.",
    iconName: "Server"
  },
  {
    id: "apis",
    title: "REST API Development",
    description:
      "Building clean, contract-first, and secure RESTful endpoints with structured error handling and Swagger documentation.",
    iconName: "Webhook"
  },
  {
    id: "database",
    title: "Database Design",
    description:
      "Modeling normalized relational schemas, optimizing query relationships, and managing persistence with JPA & MySQL.",
    iconName: "Database"
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description:
      "Strengthening analytical thinking and algorithmic efficiency through regular problem solving on coding platforms.",
    iconName: "Cpu"
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Connecting LLMs, RAG pipelines, and automated event workflows with modern orchestration engines like n8n.",
    iconName: "Bot"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C", "C++", "JavaScript", "SQL"]
  },
  {
    category: "Backend & APIs",
    skills: [
      "Spring Boot 3",
      "Spring Security 6",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
      "REST API",
      "Maven"
    ]
  },
  {
    category: "Database",
    skills: ["MySQL", "Relational Database Design"]
  },
  {
    category: "Core CS",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "VS Code"]
  },
  {
    category: "Cloud",
    skills: [
      "Google Cloud Platform",
      "Microsoft Azure",
      "Oracle Cloud Infrastructure"
    ]
  },
  {
    category: "Automation",
    skills: ["n8n", "Selenium"]
  }
];

export const FEATURED_PROJECT = {
  id: "healthcare-system",
  title: "Healthcare Appointment Management System",
  subtitle: "Featured Backend Project",
  badge: "Spring Boot 3 • Spring Security 6 • MySQL",
  description:
    "Designed and built a role-based healthcare appointment management backend supporting Patient, Doctor, and Admin roles.",
  techStack: [
    "Java",
    "Spring Boot 3",
    "Spring Security 6",
    "JWT",
    "Spring Data JPA",
    "Hibernate",
    "MySQL",
    "REST API",
    "Swagger/OpenAPI",
    "Maven"
  ],
  keyFeatures: [
    "Role-based authentication and authorization with custom security filters",
    "JWT-based stateless authentication with token validation",
    "Granular permissions for Patient, Doctor, and Admin roles",
    "Normalized relational database schema with entity integrity",
    "Domain entities: User, Doctor, Patient, Appointment, and Schedule",
    "Complete appointment lifecycle management (REQUESTED → APPROVED / REJECTED → COMPLETED)",
    "Clean REST API endpoints with DTO mapping and service-layer validation",
    "Interactive API documentation via Swagger / OpenAPI",
    "Maven-based structured multi-package project layout"
  ],
  workflowSteps: [
    { step: "1", title: "REQUESTED", desc: "Patient books slot; status set to REQUESTED" },
    { step: "2", title: "REVIEW", desc: "Doctor / Admin reviews schedule availability" },
    { step: "3", title: "DECISION", desc: "Appointment transitioned to APPROVED or REJECTED" },
    { step: "4", title: "COMPLETED", desc: "Consultation marked as COMPLETED post-visit" }
  ],
  architectureFlow: [
    { layer: "Client Layer", desc: "Web / Mobile HTTP Requests with Bearer JWT" },
    { layer: "Spring Security & JWT", desc: "Stateless Token Filter & Role Authorization" },
    { layer: "REST Controller Layer", desc: "Endpoint Routing, Request DTO Validation, Swagger Specs" },
    { layer: "Service Layer", desc: "Business Logic, Appointment Lifecycle & Validation" },
    { layer: "Repository Layer", desc: "Spring Data JPA / Hibernate ORM Queries" },
    { layer: "Database Layer", desc: "MySQL Relational Schema (Users, Appointments, Schedules)" }
  ],
  links: {
    github: "HEALTHCARE_GITHUB_URL",
    liveDemo: "HEALTHCARE_LIVE_URL"
  }
};

export const OTHER_PROJECTS = [
  {
    id: "employee-issuance",
    title: "Employee Issuance Check System",
    category: "Backend & Systems",
    techStack: ["Java", "Spring Boot", "REST API", "MySQL", "Docker"],
    description:
      "Built a layered Spring Boot backend exposing REST APIs to create, update, and query employee issuance records backed by a relational database.",
    features: [
      "CRUD REST APIs for comprehensive issuance lifecycle management",
      "Fast lookup capabilities by employee ID and issuance status",
      "Database indexing on key lookups for high query performance",
      "Automated notifications & status tracking for pending / incomplete records",
      "Docker containerization for reproducible multi-environment deployment"
    ],
    links: {
      github: "EMPLOYEE_GITHUB_URL",
      liveDemo: "EMPLOYEE_LIVE_URL"
    }
  },
  {
    id: "rag-agent",
    title: "RAG-Based AI Agent System",
    category: "AI & Retrieval Systems",
    techStack: ["n8n", "RAG", "LLM", "Vector Database"],
    description:
      "Designed a Retrieval-Augmented Generation pipeline combining document embedding, vector search, and LLM reasoning to answer knowledge-based queries.",
    features: [
      "Automated document ingestion and preprocessing pipeline",
      "Smart text chunking strategy for contextual preservation",
      "Vector embeddings generation and storage in a vector database",
      "Cosine similarity semantic search for top-k contextual retrieval",
      "Augmented LLM prompt reasoning with ground-truth citations"
    ],
    links: {
      github: "RAG_GITHUB_URL",
      liveDemo: "RAG_DEMO_URL"
    }
  },
  {
    id: "payment-due-automation",
    title: "AI Agent for Payment Due Automation",
    category: "Workflow Automation",
    techStack: ["n8n", "Google Sheets API", "WhatsApp API"],
    description:
      "Built an event-driven workflow that tracks payment due dates from Google Sheets and triggers automated WhatsApp reminders, reducing manual follow-up.",
    features: [
      "Event-driven workflow triggered by cron and data change events",
      "Real-time Google Sheets API synchronization and row filtering",
      "Dynamic due-date calculation and reminder scheduling",
      "Automated personalized reminder dispatch via WhatsApp API",
      "Error handling and delivery status audit logging"
    ],
    links: {
      github: "PAYMENT_GITHUB_URL",
      liveDemo: "PAYMENT_DEMO_URL"
    }
  }
];

export const ACHIEVEMENTS = [
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    level: "National Initiative • Intercollege Level",
    badge: "Hackathon",
    description:
      "Qualified through four levels of Smart India Hackathon 2025 at the intercollege level.",
    highlight: "4 Selective Evaluation Rounds Cleared"
  },
  {
    id: "msme-2025",
    title: "MSME Hackathon 2025",
    level: "Intercollege Level",
    badge: "Innovation",
    description:
      "Recognized at the intercollege level for innovative project development.",
    highlight: "Recognized for Innovative Engineering"
  },
  {
    id: "dsa-achievement",
    title: "Data Structures & Algorithms",
    level: "Competitive Coding & Practice",
    badge: "Problem Solving",
    description:
      "Solved 150+ Data Structures and Algorithms problems across coding platforms.",
    highlight: "150+ Problems Solved"
  }
];

export const CERTIFICATIONS = [
  {
    id: "oracle-ai",
    title: "Oracle Cloud Infrastructure 2025",
    credential: "Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    link: "ORACLE_CERTIFICATE_URL"
  },
  {
    id: "azure-fundamentals",
    title: "Microsoft Azure Fundamentals",
    credential: "Azure Cloud Foundations",
    issuer: "Coursera",
    year: "Certified",
    link: "AZURE_CERTIFICATE_URL"
  }
];

export const DSA_DATA = {
  totalSolved: "150+",
  title: "Problem Solving",
  description:
    "Consistent focus on algorithmic problem solving, core computer science principles, and optimal time/space complexity analysis.",
  topics: [
    {
      name: "Arrays & Strings",
      desc: "Two pointers, sliding window, prefix sums, and searching techniques."
    },
    {
      name: "Trees & Binary Search Trees",
      desc: "Traversals (DFS, BFS), LCA, tree validation, and balanced BST operations."
    },
    {
      name: "Graphs",
      desc: "BFS, DFS, topological sort, connected components, and cycle detection."
    },
    {
      name: "Dynamic Programming",
      desc: "Memoization, tabulation, knapsack patterns, and state-space reductions."
    },
    {
      name: "Core Data Structures",
      desc: "Linked lists, stacks, queues, hash maps, heaps, and algorithmic math."
    }
  ],
  leetcodeUrl: "https://leetcode.com/u/SOWMIYA_MURUGAN_24/"
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "DSA", href: "#dsa" },
  { label: "Contact", href: "#contact" }
];
