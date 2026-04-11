export const personal = {
  name: "Ashutosh Aman",
  role: "Full-Stack Developer",
  tagline: "React · Node.js · TypeScript",
  bio: "Building scalable web applications — from rapid MVPs to production-grade systems in fintech.",
  location: "Noida, Uttar Pradesh, India",
  email: "ashutoshaman@duck.com",
  phone: "9955933566",
  portfolio: "https://amanashutosh.netlify.app/",
  resume: "/resume.pdf",
  avatar: "/avatar.jpg",
  yearsOfExperience: "3 +",
  currentFocus: "AI-powered full-stack development, LangChain & MCP Servers",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/ashutoshhify", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashutoshhify",
    icon: "linkedin",
  },
  { name: "X (Twitter)", url: "https://x.com/ashutoshhify", icon: "twitter" },
  { name: "LeetCode", url: "https://leetcode.com/ashutoshhify", icon: "code" },
  {
    name: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/ashutoshhify",
    icon: "gfg",
  },
  { name: "Medium", url: "https://medium.com/@ashutoshaman", icon: "medium" },
];

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Sass",
    "Tailwind CSS",
    "Framer Motion",
    "Material UI",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "SQL",
  ],

  devops: ["GitHub Actions", "CI/CD", "Docker", "Google Cloud (GCP)"],
  learning: ["LangChain", "MCP Servers", "AI Integration"],
};

export const experience = [
  {
    company: "Quick Wage",
    role: "Full-Stack Developer · Founding Member",
    period: "Aug 2022 – Feb 2026",
    duration: "3 years 7 months",
    location: "Noida",
    type: "Fintech Startup",
    description:
      "Quick Wage is a fintech startup building salary-on-demand and earned wage access (EWA) solutions for blue-collar workers and enterprises across India.",
    highlights: [
      "Built and shipped the lending-partner onboarding MVP using React.js and NestJS, accelerating integrations with new financial partners.",
      "Designed and maintained high-availability NestJS microservices (99.9% uptime) with automated CI/CD pipelines via GitHub Actions and Google Cloud Run — zero-downtime releases in production.",
      "Built an internal HRMS platform (React.js + Node.js + MongoDB) that automated HR and accounting workflows, reducing manual workload by ~60%.",
      "Participated in investor pitch preparation and pilot rollouts — worked directly with founders on product strategy and go-to-market execution.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "NestJS",
      "Node.js",
      "Express",
      "Fastify",
      "Python",
      "Google Cloud",
      "AWS(EC2, EKS, Route53",
      "Kubernetes",
      "GitHub Actions",
      "Docker",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "RabbitMQ",
      "ElasticSearch",
      "CI/CD Automation",
      "Unit, Integration, And E2E Testing",
      "Design Patterns",
    ],
  },
  {
    company: "Capriko Smart Solutions Pvt. Ltd.",
    role: "Frontend Developer Intern",
    period: "Aug 2020 – Dec 2021",
    duration: "1 year 5 months",
    location: "Dehradun",
    type: "IT Company",
    description: "Developed frontend interfaces for client projects.",
    highlights: [
      "Developed frontend interfaces for client projects using HTML5, CSS3, JavaScript and React.js.",
      "Built responsive, cross-browser compatible web pages for e-commerce and corporate clients.",
      "Collaborated with senior developers in an agile team environment.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
];

export const education = [
  {
    institution: "Sheryians Coding School — Kodex",
    degree: "Bootcamp",
    field: "AI Powered Full-Stack Development",
    period: "Oct 2025 – May 2026",
    status: "In Progress",
  },
  {
    institution: "Pesto",
    degree: "Fellowship Program",
    field: "Full Stack Development & Product Engineering",
    period: "Jun 2024 – Dec 2024",
    status: "Completed",
  },
  {
    institution: "GL Bajaj Institute of Technology and Management",
    degree: "B.Tech",
    field: "Computer Science",
    period: "Jul 2019 – Jun 2022",
    status: "Completed",
  },
  {
    institution: "Uttarakhand Board of Technical Education",
    degree: "Diploma",
    field: "Computer Science",
    period: "2016 – 2018",
    status: "Completed",
  },
];

export const certifications = [
  {
    name: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/", // 🔗 paste your cert URL here
  },
  {
    name: "ReactJS Developer Bootcamp",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/", // 🔗 paste your cert URL here
  },
  {
    name: "React — Front-End Web Development",
    issuer: "Coursera",
    link: "https://www.coursera.org/verify/", // 🔗 paste your cert URL here
  },
  {
    name: "Capriko Smart Solution Certified Java Developer",
    issuer: "Capriko",
    link: "#", // 🔗 paste your cert URL here
  },
];

export const projects = [
  {
    title: "Quick Wage — EWA Platform",
    description:
      "Production-grade earned wage access fintech platform. Built the full lending-partner onboarding MVP, HRMS system, and microservices infrastructure from scratch.",
    stack: ["React.js", "NestJS", "TypeScript", "MongoDB", "GCP", "Docker"],
    type: "Fintech · Production",
    highlights: [
      "99.9% uptime microservices",
      "60% reduction in manual workload",
      "Investor-pitched product",
    ],
    live: "https://quickwage.in",
    github: "#",
    color: "#1a1a2e",
  },
  {
    title: "HRMS — Internal Automation Tool",
    description:
      "Full-featured HR and Accounting Management System built for Quick Wage. Automated payroll processing, employee onboarding, attendance tracking and financial workflows.",
    stack: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    type: "SaaS · Internal Tool",
    highlights: [
      "~60% operational efficiency gain",
      "Payroll automation",
      "Multi-role dashboard",
    ],
    live: "#",
    github: "#",
    color: "#0d1117",
  },
  {
    title: "Lending Partner Onboarding MVP",
    description:
      "B2B onboarding flow for financial lending partners integrating with Quick Wage's EWA infrastructure. End-to-end workflow from KYC to live integration.",
    stack: ["React.js", "NestJS", "TypeScript", "REST APIs"],
    type: "Fintech · B2B",
    highlights: [
      "Reduced integration time",
      "Scalable partner pipeline",
      "Production deployed",
    ],
    live: "#",
    github: "#",
    color: "#0a0a1a",
  },
];

export const freelance = {
  tagline: "Available for Freelance",
  description:
    "Open to building MVPs, fintech solutions, full-stack web applications, and AI-integrated products. Let's create something impactful together.",
  services: [
    "MVP Development",
    "Full-Stack Web Apps",
    "React / Next.js Frontends",
    "REST API Design",
    "Cloud Deployments (GCP)",
    "AI-Integrated Applications",
  ],
  cta: "Get in touch",
  email: "ashutoshaman@duck.com",
};

export const skillGroupLabels = {
  frontend: "Frontend Development",
  backend: "Backend & Languages",
  cloud: "Cloud & DevOps",
  data: "Data & Messaging",
  delivery: "Delivery & Testing",
  learning: "Web3 & AI (Current Focus)",
};
