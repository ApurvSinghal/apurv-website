export interface ResumeExperience {
  period: string;
  role: string;
  company: string;
  client?: string;
  companyUrl?: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface ResumeVolunteer {
  period: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface ResumeProject {
  name: string;
  url?: string;
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  workRights?: string;
  email: string;
  website: string;
  linkedin: string;
  github: string;
  pillars: string[];
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: ResumeExperience[];
  volunteer: ResumeVolunteer[];
  projects: ResumeProject[];
  education: {
    degree: string;
    institution: string;
    period: string;
    details?: string;
  }[];
  certifications: string[];
}

export const RESUME_DATA: ResumeData = {
  name: "Apurv Singhal",
  title:
    "Senior Platform & Cloud DevOps Engineer · Azure · Observability · Infrastructure as Code",
  location: "Melbourne, Victoria, Australia",
  workRights: "Full Australian Working Rights",
  email: "me@apurvsinghal.com",
  website: "https://apurvsinghal.com",
  linkedin: "https://www.linkedin.com/in/apurvsinghal28",
  github: "https://github.com/apurvsinghal",
  pillars: [
    "Azure Cloud & DevOps",
    "Platform Engineering",
    "Observability & SRE",
    "Infrastructure as Code",
  ],
  summary:
    "Platform and cloud DevOps engineer with 8+ years building and running mission-critical systems for enterprise clients including Bank of Queensland (BOQ), AGIG, Toyota Australia, EPA Victoria and HPCA. Currently Lead Consultant at Capgemini and founder of ADM Guard. Track record in zero-downtime platform migrations, Infrastructure as Code, CI/CD automation, full-stack observability and cloud cost optimisation.",
  skills: [
    {
      category: "Azure Cloud & DevOps",
      items: [
        "Microsoft Azure",
        "Azure Integration Services (APIM, Logic Apps)",
        "Azure Container Apps & Tanzu",
        "Azure DevOps & GitHub Actions CI/CD",
        "Terraform & Bicep IaC",
        "Full-Stack Observability (Dynatrace, New Relic, NRQL)",
        "Docker & Microservices",
        "Azure Functions",
        "Cosmos DB & Azure SQL",
      ],
    },
    {
      category: "Platform Engineering",
      items: [
        "Enterprise Platform Migrations",
        "Release Engineering & CI/CD Automation",
        "Quality Gates & Branching Strategy",
        "Cloud Cost Governance & FinOps",
        "Site Reliability & Disaster Recovery",
        "Zero-Trust & Policy-as-Code",
        "Internal Developer Platforms & Golden Paths",
      ],
    },
    {
      category: "Applied AI & Engineering",
      items: [
        "Azure AI Foundry & Azure OpenAI",
        "Claude API & Agent Architectures",
        "RAG Workflows",
        "TypeScript & Next.js",
        "Python & FastAPI",
        "C# & .NET Core",
      ],
    },
    {
      category: "Governance & Security",
      items: [
        "Azure Policy Guardrails & RBAC",
        "SAST & DevSecOps",
        "Zero-PII Ingestion Design",
        "Australian Privacy Act APP 1.7–1.9",
        "Immutable Azure WORM Storage",
      ],
    },
  ],
  experience: [
    {
      period: "Aug 2026 — Present",
      role: "Platform Engineer (Observability)",
      company: "Capgemini",
      client: "Bank of Queensland (BOQ)",
      companyUrl: "https://www.capgemini.com",
      location: "Melbourne, Australia",
      highlights: [
        "Leading enterprise Dynatrace full-stack observability implementation across banking cloud and platform infrastructure, monitoring 10,000+ microservices and endpoints across multi-cloud environments and enterprise data centers.",
        "Architecting distributed tracing, custom service dashboards, synthetic transaction monitors, and Davis AI anomaly alert policies to accelerate incident triage and reduce MTTD/MTTR.",
        "Partnering with platform and engineering squads to embed observability standards into CI/CD pipelines, automating monitoring agent deployments and reliability guardrails.",
      ],
      skills: ["Dynatrace", "Full-Stack Observability", "Azure", "SRE"],
    },
    {
      period: "Feb 2026 — Aug 2026",
      role: "Lead Cloud DevOps Engineer",
      company: "Capgemini",
      client: "Australian Gas Infrastructure Group (AGIG)",
      companyUrl: "https://www.capgemini.com",
      location: "Melbourne, Australia",
      highlights: [
        "Led Azure DevOps architecture for migrating 100+ Azure resources and 1,000+ integrations to Azure Integration Services (APIM, Logic Apps, Functions) with zero downtime. Modular YAML release templates with automated rollback delivered a more robust platform, fewer deployment errors and faster integration response times.",
        "Standardised automated release workflows and rollback capabilities across all migration phases.",
        "Enforced DevSecOps guardrails, automated SAST scanning, and Azure RBAC/IaC governance to maintain platform compliance and stability.",
      ],
      skills: [
        "Azure Integration Services",
        "APIM",
        "Azure DevOps",
        "DevSecOps",
      ],
    },
    {
      period: "Jun 2025 — Present",
      role: "DevOps & Release Engineering Lead",
      company: "Capgemini",
      client: "HPCA",
      companyUrl: "https://www.capgemini.com",
      location: "Melbourne, Australia",
      highlights: [
        "Built automated CI/CD release pipelines on Azure DevOps and Git, removing manual deployment steps across release cycles.",
        "Set up standardised branching strategies, automated quality gates and deployment runbooks, and led delivery pods on release practices.",
      ],
      skills: [
        "Azure DevOps",
        "Git",
        "CI/CD Automation",
        "Release Engineering",
      ],
    },
    {
      period: "May 2025 — Jan 2026",
      role: "Senior DevOps Engineer (IaC & Integration)",
      company: "Capgemini",
      client: "EPA Victoria",
      companyUrl: "https://www.capgemini.com",
      location: "Melbourne, Australia",
      highlights: [
        "Architected end-to-end Infrastructure as Code modules using Terraform and ARM for Azure Integration Services (APIM, Logic Apps, Azure Functions), cutting environment provisioning time from days to under 30 minutes.",
        "Designed reusable Azure DevOps YAML pipelines for integration workloads, driving zero-downtime cutovers and environment configuration parity.",
        "Served as Azure DevOps SME, enforcing enterprise-wide CI/CD templates, Azure Policy security guardrails, and compliance baselines.",
      ],
      skills: [
        "Terraform",
        "ARM Templates",
        "Azure Integration",
        "Azure Policy",
      ],
    },
    {
      period: "Jun 2021 — May 2025",
      role: "Platform Engineer",
      company: "Capgemini",
      client: "Toyota Australia",
      companyUrl: "https://www.capgemini.com",
      location: "Melbourne, Australia",
      highlights: [
        "Cut Azure operational spend by ~50% by re-architecting resource allocation, autoscaling and monitoring policies, while maintaining performance across containerised API workloads.",
        "Transitioned legacy VMware Tanzu container workloads to Azure Container Apps, modernising containerised API delivery and developer platform velocity.",
        "Built hybrid-environment observability on New Relic One (APM agents, distributed tracing, custom NRQL dashboards, synthetic monitors) to speed up incident detection and resolution across the API platform.",
        "Authored standardised Azure DevOps YAML CI/CD pipelines, reusable Terraform/Bicep IaC modules, and cloud governance frameworks.",
      ],
      skills: [
        "Azure Container Apps",
        "VMware Tanzu",
        "New Relic One",
        "Terraform",
        "FinOps",
      ],
    },
    {
      period: "May 2020 — Jun 2021",
      role: "Software Developer",
      company: "Willow.ai",
      location: "New Delhi, India",
      highlights: [
        "Engineered scalable .NET microservices and RESTful APIs for smart building and digital twin platforms, improving end-to-end API response times by ~35% by diagnosing backend bottlenecks.",
        "Introduced early CI/CD pipeline automation and developer enablement tooling to reduce deployment friction.",
      ],
      skills: [".NET", "C#", "REST APIs", "Microservices", "CI/CD"],
    },
    {
      period: "Jul 2018 — Feb 2020",
      role: "Software Developer",
      company: "TechCompiler Data Systems",
      companyUrl: "https://www.techcompiler.com",
      location: "New Delhi, India",
      highlights: [
        "Built and maintained RESTful APIs and backend microservices using .NET, C# and relational databases, with automated build and test checks for reliable releases.",
        "Refactored complex SQL schemas, stored procedures and data pipelines, cutting query latency by ~50%.",
      ],
      skills: [
        ".NET",
        "C#",
        "SQL Server",
        "Data Pipelines",
        "APIs",
      ],
    },
  ],
  volunteer: [
    {
      period: "Apr 2026 — Present",
      role: "Head of IT (Volunteer)",
      organization: "IndianCare Inc.",
      organizationUrl: "https://www.indiancare.org.au",
      location: "Melbourne, Australia",
      highlights: [
        "Directing end-to-end IT operations, cloud administration and digital strategy for a registered Victorian community welfare non-profit.",
        "Managing Microsoft 365, Entra ID identity governance, MFA policies and endpoint security standards that protect confidential helpline, counselling and welfare workflows.",
      ],
      skills: [
        "End-to-End IT Operations",
        "Microsoft 365 / Entra ID",
        "Cloud Infrastructure",
        "Cyber Hygiene",
      ],
    },
  ],
  projects: [
    {
      name: "ADM Guard",
      url: "https://www.admguard.com.au",
      role: "Founder & System Architect",
      period: "2024 — Present",
      description:
        "The compliance flight recorder for automated decision-making systems (APP 1.7–1.9).",
      highlights: [
        "Architected a zero-PII ingestion boundary that rejects sensitive personal data at runtime before persistence (HTTP 422).",
        "Implemented SHA-256 Merkle hash chains anchored to Azure Australia East WORM (Write-Once-Read-Many) immutable storage.",
        "Built drop-in client SDKs (TypeScript, Python) with idempotency-key retry safety to give Australian SaaS immutable audit readiness.",
      ],
      skills: [
        "Azure Australia East",
        "WORM Storage",
        "SHA-256 Merkle Trees",
        "Zero-PII",
        "TypeScript",
        "Python",
      ],
    },
    {
      name: "Personal Site & AI Assistant",
      url: "https://apurvsinghal.com",
      role: "Architect & Engineer",
      description:
        "Built a Next.js/TypeScript portfolio hosted on Azure Static Web Apps, with an AI assistant that answers questions from my own content using RAG, Azure AI Foundry and the Claude API.",
      highlights: [
        "Built a Next.js/TypeScript portfolio hosted on Azure Static Web Apps, with an AI assistant that answers questions from my own content using RAG, Azure AI Foundry and the Claude API.",
      ],
      skills: [
        "Next.js",
        "Azure Static Web Apps",
        "Azure AI Foundry",
        "Claude API",
        "RAG",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Guru Gobind Singh Indraprastha University (GGSIPU)",
      period: "2014 — 2018",
      details:
        "Guru Gobind Singh Indraprastha University, New Delhi. Focus on Computer Science, Distributed Systems, Software Engineering, and Algorithms.",
    },
  ],
  certifications: ["Microsoft Azure Applied Skills"],
};
