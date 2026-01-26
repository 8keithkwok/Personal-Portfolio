export const personalInfo = {
  name: "Kwok Sui Ki, Keith",
  title: "Tech Lead",
  phone: "+852 5938 8638",
  email: "8keithkwok@gmail.com",
  linkedin: "https://www.linkedin.com/in/8keithkwok/",
  linkedinDisplay: "linkedin.com/in/8keithkwok",
  github: "https://github.com/8keithkwok",
  githubDisplay: "github.com/8keithkwok",
};

export const summary = `Tech Lead with strong focus on solution architecture, business analysis, and project planning — 5+ years in software delivery, 2 years specializing in LLM Agent design and orchestration. Leads end-to-end delivery from requirements gathering → technical specification → system design → deployment, and has driven 10x transaction growth by managing cross-functional, Agile teams of 12+ members. Deep expertise in tool calling, prompt engineering, multi-agent systems, agent skills, and LangChain/LangGraph; proven ability to translate business needs into executable technical solutions and to communicate trade-offs with non-technical stakeholders.`;

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Team Members Led", value: "12+" },
  { label: "Transaction Growth", value: "10x" },
  { label: "Cloud Cost Reduction", value: "45%" },
];

export interface JobSection {
  title: string;
  items: string[];
}

export interface Job {
  company: string;
  title: string;
  period: string;
  sections?: JobSection[];
  highlights?: string[];
}

export const workExperience: Job[] = [
  {
    company: "Pecutus Technologies Limited",
    title: "Tech Lead",
    period: "09/2023 - Present",
    sections: [
      {
        title: "Planning & Project Management",
        items: [
          "Led end-to-end project delivery for enterprise clients: requirements gathering → business analysis → technical specification → system design → deployment.",
          "Managed cross-functional collaboration using Agile/Scrum with Jira; led sprint planning and release planning for a 12-member outsourced team, resulting in 10x transaction volume growth.",
          "Authored technical specifications (system architecture diagrams, ERD, API documentation) and stakeholder presentations; facilitated trade-off discussions and aligned non-technical stakeholders with technical constraints.",
          "Mentored 4 junior developers through pair programming and code reviews, improving code quality and reducing bug rates by 25%.",
        ],
      },
      {
        title: "LLM Agent Architecture & Design",
        items: [
          "Architected Agentic AI platforms using LangChain and LangGraph: multi-agent systems, autonomous task execution, and tool calling / function-calling strategies.",
          "Designed agent architectures (ReAct, plan-and-execute patterns) and agent workflows for complex orchestration and decision-making; defined prompt engineering practices (chain-of-thought, few-shot, dynamic system prompts) for production LLM use cases.",
          "Led design of AI-powered risk analysis and chat assistants (OpenAI, Anthropic Claude, Vercel AI SDK), including streaming, state management, and 9-step AI agent workflows; e.g. shipment/supply-chain risk analysis chat agent with tool calling and stream resumption (Next.js, PostgreSQL, Redis, Docker).",
        ],
      },
      {
        title: "Solution Architecture & Cloud",
        items: [
          "Designed and led serverless architecture (AWS Lambda, DynamoDB single-table, API Gateway, Serverless Framework), achieving 45% cloud cost reduction; led architectural decisions on event-driven design (DynamoDB Streams, EventBridge) for high-throughput systems; e.g. multi-currency FX admin portal and serverless backend (React, Serverless Framework, DynamoDB Streams, OTP auth).",
          "Established observability (CloudWatch, Datadog) and CI/CD (Docker, multi-environment DEV/UAT/PROD), improving issue detection and customer service response time by 30%.",
        ],
      },
      {
        title: "Representative deliverables (client work anonymised)",
        items: [
          "AI shipment risk platform: 9-step analysis pipeline, tool-calling agent (Vercel AI SDK, DeepSeek), streaming and stream resumption; Next.js, PostgreSQL, Redis, Docker.",
          "Internal AI project management: Bedrock Agents, Slack, Kanban/backlog; Amplify Gen 2, Lambda, DynamoDB, Cognito.",
          "Multi-currency FX admin & backend: React admin portal (orders, rates, users, RBAC); serverless APIs, DynamoDB Streams, OTP auth.",
          "Travel & FX self-service kiosk: React app, bill validator integration, deposit/withdraw, multi-currency; 90% reduction in device downtime.",
          "LLM travel assistant & microservices: LangChain/ChatKit chat POC (streaming, DynamoDB); WebSocket chatbot with tool calling (rate alert, budget, FX); rate-alert and notification services.",
        ],
      },
    ],
  },
  {
    company: "Pecutus Technologies Limited",
    title: "Full-stack Developer",
    period: "09/2019 - 08/2023",
    sections: [
      {
        title: "Multi-Platform Development",
        items: [
          "Contributed to requirements analysis and technical feasibility for features; developed cross-platform applications (Web: React, Next.js, TypeScript; Mobile: React Native, Expo; Desktop: Electron) with real-time WebSocket features and financial interfaces (multi-currency, i18n).",
        ],
      },
      {
        title: "Backend API & System Integration",
        items: [
          "Designed RESTful/GraphQL APIs (Express.js, JWT, RBAC) and integrated hardware (e.g. bill validators for kiosks), achieving 90% reduction in device downtime; e.g. self-service travel & FX kiosk with bill validator integration and multi-currency flows; implemented auth via AWS Cognito and DynamoDB.",
          "Established CI/CD (Docker, EAS Build, Serverless Framework) and code reviews for type safety and documentation standards.",
        ],
      },
    ],
  },
  {
    company: "Pecutus Technologies Limited",
    title: "Data Engineering Intern",
    period: "06/2019 - 08/2019",
    highlights: [
      "Developed React Native mobile applications with emphasis on efficient UI/UX, conducting usability testing to refine interfaces based on user feedback.",
      "Implemented scalable DynamoDB database designs optimizing for query patterns and cost efficiency with data modeling best practices.",
      "Launched products with integrated analytics tracking, enabling data-driven continuous improvement.",
    ],
  },
  {
    company: "College of Professional and Continuing Education, PolyU",
    title: "ITU Information Technology Assistant (Part-time)",
    period: "02/2020 – 02/2025",
    highlights: [
      "Provided comprehensive IT services and technical support for educational environments.",
      "Managed and maintained information systems infrastructure for multiple classrooms.",
      "Ensured smooth operation of classroom technology systems and AV equipment.",
    ],
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    items: string[];
  }[];
}

export const skills: SkillCategory[] = [
  {
    title: "LLM Agent & AI",
    icon: "Brain",
    skills: [
      {
        name: "Orchestration",
        items: ["LangChain", "LangGraph", "Vercel AI SDK", "multi-agent systems", "agent skills", "tool calling / function calling"],
      },
      {
        name: "Prompt Engineering",
        items: ["chain-of-thought", "few-shot learning", "system prompt design"],
      },
      {
        name: "Patterns",
        items: ["plan-and-execute", "ReAct", "autonomous agents", "agent workflow design"],
      },
      {
        name: "Providers",
        items: ["OpenAI", "Anthropic Claude", "DeepSeek", "AWS Bedrock Agents"],
      },
      {
        name: "Familiar",
        items: ["RAG", "vector stores"],
      },
    ],
  },
  {
    title: "Planning & Project Management",
    icon: "Target",
    skills: [
      {
        name: "Methods & Practices",
        items: ["Agile / Scrum", "Sprint planning", "Release planning", "Stakeholder management"],
      },
      {
        name: "Analysis & Delivery",
        items: ["Requirements elicitation", "Technical specification", "Impact analysis", "Cross-functional leadership"],
      },
      {
        name: "Tools",
        items: ["Jira", "Roadmap and milestone planning"],
      },
    ],
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      {
        name: "Web",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      },
      {
        name: "Mobile",
        items: ["React Native", "Expo SDK", "Redux Toolkit"],
      },
      {
        name: "Desktop",
        items: ["Electron"],
      },
      {
        name: "Patterns",
        items: ["Responsive Design", "Cross-Platform", "i18n"],
      },
    ],
  },
  {
    title: "Solution Architecture & Cloud (AWS)",
    icon: "Server",
    skills: [
      {
        name: "Architecture",
        items: ["Serverless and microservices architecture", "Lambda", "API Gateway", "DynamoDB (single-table)", "S3", "EventBridge"],
      },
      {
        name: "Auth & Observability",
        items: ["Cognito", "IAM", "CloudWatch", "Datadog"],
      },
      {
        name: "Backend & API",
        items: ["Node.js", "Express.js", "Serverless Framework", "FastAPI", "RESTful / GraphQL API design"],
      },
      {
        name: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "SQL", "R", "SAS"],
      },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "Settings",
    skills: [
      {
        name: "CI/CD",
        items: ["Docker", "CI/CD", "Git"],
      },
      {
        name: "Testing & Tools",
        items: ["Postman", "unit and integration testing"],
      },
    ],
  },
];

export interface Certification {
  name: string;
  year: string;
  issuer?: string;
  note?: string;
}

export const certifications: Certification[] = [
  {
    name: "Faculty AI for Leaders",
    year: "2025",
    note: "Faculty is an AI company that runs executive programmes on AI strategy and leadership. This course was delivered face-to-face in the UK.",
  },
  { name: "Google Data Analytics Professional Certificate", year: "2024", issuer: "Google" },
  { name: "SAS Joint Certificate in Data Mining", year: "2022", issuer: "SAS" },
  { name: "SAS Joint Certificate in Machine Learning", year: "2022", issuer: "SAS" },
  { name: "SAS Certified Base Programmer for SAS 9", year: "2019", issuer: "SAS" },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "BSc in Data Science and Business Intelligence (Minor in Computing)",
    school: "The Hang Seng University of Hong Kong",
    period: "09/2020 - 05/2022",
  },
  {
    degree: "Associate in Statistics and Data Science",
    school: "Community College, The Hong Kong Polytechnic University",
    period: "09/2017 - 05/2020",
  },
];

export const languages = [
  { name: "Cantonese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Mandarin", level: "Fluent" },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];
