export const FEATURED_PROJECT = {
  id: "healthcare-system",
  label: "FEATURED PROJECT",
  title: "Healthcare Appointment Management System",
  technology: [
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
  description:
    "Designed and built a role-based healthcare appointment management backend supporting Patient, Doctor, and Admin roles.",
  keyContributions: [
    "Designed a normalized relational schema across User, Doctor, Patient, Appointment, and Schedule entities.",
    "Implemented stateless authentication and authorization using Spring Security 6 and JWT.",
    "Enforced endpoint-level access control based on user roles (Patient, Doctor, Admin).",
    "Implemented the appointment lifecycle: REQUESTED → APPROVED / REJECTED → COMPLETED.",
    "Added service-layer validation for appointment state transitions.",
    "Documented and tested REST endpoints using Swagger/OpenAPI."
  ],
  architectureFlow: [
    { title: "CLIENT", desc: "Web / Mobile Client sending HTTP requests with Bearer JWT" },
    { title: "SPRING SECURITY + JWT", desc: "Stateless Token Filter & Role-Based Authorization", highlight: true },
    { title: "REST CONTROLLER", desc: "@RestController routing, request validation & DTO mapping" },
    { title: "SERVICE LAYER", desc: "Core business logic, appointment status validation & rules" },
    { title: "REPOSITORY LAYER", desc: "Spring Data JPA / Hibernate object-relational mapping" },
    { title: "MYSQL DATABASE", desc: "Normalized relational schema with referential integrity", highlight: true }
  ],
  githubUrl: "HEALTHCARE_GITHUB_URL"
};

export const OTHER_PROJECTS = [
  {
    id: "employee-issuance",
    title: "Employee Issuance Check System",
    tech: ["Java", "Spring Boot", "REST API", "MySQL", "Docker"],
    description:
      "Built a layered Spring Boot backend exposing REST APIs to create, update, and query employee issuance records backed by a relational database.",
    highlights: [
      "CRUD REST APIs",
      "Employee-based lookup",
      "Status-based lookup",
      "Indexed database queries",
      "Status transition rules",
      "Automated notifications",
      "Docker containerization"
    ],
    githubUrl: "EMPLOYEE_GITHUB_URL"
  },
  {
    id: "rag-agent",
    title: "RAG-Based AI Agent System",
    tech: ["n8n", "RAG", "LLM", "Vector Database"],
    description:
      "Designed a Retrieval-Augmented Generation pipeline combining document embedding, vector search, and LLM reasoning to answer knowledge-based queries.",
    highlights: [
      "Document ingestion",
      "Chunking",
      "Embedding generation",
      "Vector search",
      "Semantic retrieval",
      "LLM reasoning"
    ],
    githubUrl: "RAG_GITHUB_URL"
  },
  {
    id: "payment-due-automation",
    title: "AI Agent for Payment Due Automation",
    tech: ["n8n", "Google Sheets API", "WhatsApp API"],
    description:
      "Built an event-driven workflow that tracks payment due dates from Google Sheets and triggers automated WhatsApp reminders.",
    highlights: [
      "Event-driven automation",
      "Google Sheets integration",
      "Due-date tracking",
      "Automated reminders",
      "WhatsApp API"
    ],
    githubUrl: "PAYMENT_GITHUB_URL"
  }
];
