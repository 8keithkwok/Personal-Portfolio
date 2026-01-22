export const personalInfo = {
  name: "Kwok Sui Ki, Keith",
  title: "Tech Lead & AI Engineer",
  phone: "+852 5938 8638",
  email: "8keithkwok@gmail.com",
  linkedin: "https://www.linkedin.com/in/8keithkwok/",
  linkedinDisplay: "linkedin.com/in/8keithkwok",
  github: "https://github.com/8keithkwok",
  githubDisplay: "github.com/8keithkwok",
};

export const summary = `Results-driven Tech Lead with 5+ years of full-stack development experience and 2 years specializing in Agentic AI and LLM Orchestration. Led cross-functional teams of 12+ members using Agile methodology, delivering production-grade AI solutions that achieved 10x transaction growth. Proven expertise in AWS Serverless Architecture, end-to-end project delivery, and translating business requirements into technical specifications.`;

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
        title: "AI & LLM Systems Development",
        items: [
          "Architected and deployed Agentic AI platforms using LangChain and LangGraph, implementing multi-agent systems with autonomous task execution and tool calling capabilities.",
          "Designed advanced AI agent architectures including multi-agent systems, ReAct agents, and plan-and-execute patterns for complex autonomous task orchestration.",
          "Implemented advanced prompt engineering techniques including chain-of-thought reasoning, few-shot learning, and dynamic system prompts.",
          "Built intelligent chat assistants using OpenAI API, Anthropic Claude API, and Vercel AI SDK with streaming responses and real-time WebSocket communication.",
          "Developed AI-powered risk analysis systems using DeepSeek and Next.js with automated 9-step AI agent workflows.",
        ],
      },
      {
        title: "Microservices Architecture & Cloud Infrastructure",
        items: [
          "Designed serverless architecture using AWS Lambda, DynamoDB, API Gateway achieving 45% reduction in cloud costs.",
          "Implemented event-driven architecture with DynamoDB Streams and EventBridge for real-time data processing.",
          "Established observability infrastructure using CloudWatch and Datadog, increasing customer service response time by 30%.",
          "Built CI/CD pipelines with Docker containerization supporting multi-environment deployments.",
        ],
      },
      {
        title: "Project Management & Client Delivery",
        items: [
          "Led end-to-end project delivery for enterprise clients, managing full lifecycle from requirements to deployment.",
          "Managed 12-member outsourced team using Agile methodology, resulting in 10x transaction volume growth.",
          "Authored comprehensive technical specifications including system architecture diagrams and API documentation.",
          "Mentored 4 junior developers, reducing bug rates by 25%.",
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
        title: "Multi-Platform Frontend Development",
        items: [
          "Developed cross-platform applications spanning Web (React, Next.js, TypeScript, Tailwind CSS), Mobile (React Native, Expo), and Desktop (Electron).",
          "Built real-time features using WebSocket connections with automatic reconnection and state synchronization.",
          "Implemented financial service interfaces with multi-currency support and internationalization (i18n).",
        ],
      },
      {
        title: "Backend API & System Integration",
        items: [
          "Designed RESTful API and GraphQL API endpoints with Express.js, JWT authentication, and RBAC.",
          "Integrated hardware systems achieving 90% reduction in device downtime.",
          "Implemented secure authentication flows using AWS Cognito with passwordless OTP login.",
        ],
      },
    ],
  },
  {
    company: "Pecutus Technologies Limited",
    title: "Data Engineering Intern",
    period: "06/2019 - 08/2019",
    highlights: [
      "Developed React Native mobile applications with efficient UI/UX.",
      "Implemented scalable DynamoDB database designs optimizing for query patterns.",
      "Launched products with integrated analytics tracking.",
    ],
  },
  {
    company: "College of Professional and Continuing Education, PolyU",
    title: "ITU Information Technology Assistant (Part-time)",
    period: "02/2020 – 02/2025",
    highlights: [
      "Provided comprehensive IT services and technical support for educational environments.",
      "Managed information systems infrastructure for multiple classrooms.",
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
    title: "AI / LLM / Generative AI",
    icon: "Brain",
    skills: [
      {
        name: "LLM Orchestration",
        items: ["LangChain", "LangGraph", "Vercel AI SDK"],
      },
      {
        name: "AI Providers",
        items: ["OpenAI API", "Anthropic Claude API", "DeepSeek", "AWS Bedrock"],
      },
      {
        name: "Techniques",
        items: ["Prompt Engineering", "RAG", "Semantic Search", "Vector Store", "Embeddings"],
      },
      {
        name: "Patterns",
        items: ["Agentic AI", "Multi-Agent Systems", "Tool Calling", "Streaming"],
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
    title: "Backend & Cloud (AWS)",
    icon: "Server",
    skills: [
      {
        name: "Backend",
        items: ["Node.js", "Express.js", "Serverless Framework", "FastAPI"],
      },
      {
        name: "API",
        items: ["RESTful API", "GraphQL"],
      },
      {
        name: "AWS Services",
        items: ["Lambda", "API Gateway", "DynamoDB", "S3", "Cognito", "CloudWatch"],
      },
      {
        name: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "SQL"],
      },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "Settings",
    skills: [
      {
        name: "CI/CD",
        items: ["Docker", "Docker Compose", "Containerization"],
      },
      {
        name: "Monitoring",
        items: ["Datadog", "CloudWatch", "Observability"],
      },
      {
        name: "Project Management",
        items: ["Jira", "Agile", "Scrum"],
      },
      {
        name: "Tools",
        items: ["Git", "Postman", "MongoDB"],
      },
    ],
  },
];

export interface Certification {
  name: string;
  year: string;
  issuer?: string;
}

export const certifications: Certification[] = [
  { name: "Faculty AI for Leaders", year: "2025" },
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
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];
