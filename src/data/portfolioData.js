// TODO: Sync from LinkedIn — role, tagline, bio, location and currentFocus
// should match the Hero/About sections of the latest LinkedIn profile.
// Left unchanged until the LinkedIn export is provided.
export const personal = {
  name: "Ashutosh Aman",
  role: "Full-Stack Developer",
  tagline: "React · Node.js · TypeScript",
  bio: "Building scalable web applications — from rapid MVPs to production-grade systems in fintech.",
  location: "Noida, Uttar Pradesh, India",
  email: "ashutoshaman@duck.com",
  phone: "9955933566",
  portfolio: "https://hireme.vercel.app",
  resume: "/resume.pdf",
  avatar: "/avatar.jpg",
  yearsOfExperience: "3 +",
  currentFocus: "AI-powered full-stack development, LangChain & MCP Servers",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/AmanAshutosh", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashutoshhify/",
    icon: "linkedin",
  },
  { name: "X (Twitter)", url: "https://x.com/CodeKarm", icon: "twitter" },
  { name: "LeetCode", url: "https://leetcode.com/u/CodeKarm/", icon: "code" },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/codelessness",
    icon: "gfg",
  },
  { name: "Medium", url: "https://medium.com/@Codelessness", icon: "medium" },
];

// TODO: Sync from LinkedIn — cross-check every category against the
// "Skills" section of the latest LinkedIn profile once provided.
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
    "GSAP",
    "Neumorphism",
    "Glassmorphism",
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

  // Placeholder category for the current transition into Data Analytics.
  // Every skill here is a work-in-progress — see skillCategoryStatus below.
  dataAnalytics: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "SQL",
    "Statistics",
    "Excel",
    "Advanced Excel",
    "Power BI",
  ],

  learning: ["LangChain", "MCP Servers", "AI Integration"],
};

// Per-category status badge shown next to the group label in
// TechStack.jsx / About.jsx (e.g. "Learning" / "In Progress").
export const skillCategoryStatus = {
  dataAnalytics: "Learning",
};

// TODO: Sync from LinkedIn — replace every entry (company, role, dates,
// employment type, location, responsibilities, achievements, stack) with
// the "Experience" section of the latest LinkedIn profile.
export const experience = [
  {
    company: "Quick Wage",
    role: "Full-Stack Developer · Core Engineering Member",
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

// TODO: Sync from LinkedIn — replace with the "Education" section of the
// latest LinkedIn profile (degree, institution, duration, grade if listed).
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

// TODO: Sync from LinkedIn — replace with the "Licenses & Certifications"
// section of the latest LinkedIn profile (name, issuer, issue date, link).
export const certifications = [
  {
    name: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1FDI_WTCtJ-FxUBNz1j0XcksNbGwk0j3A/view?usp=sharing", // 🔗 paste your cert URL here
  },
  {
    name: "ReactJS Developer Bootcamp",
    issuer: "Learn Code Online",
    link: "https://drive.google.com/file/d/1IEuPmhXD_s4LujULKdwuDSV35x49DWBR/view?usp=sharing", // 🔗 paste your cert URL here
  },
  {
    name: "React — Front-End Web Development Bootcamp",
    issuer: "Learn Code Online",
    link: "https://drive.google.com/file/d/1aTKakU5HMckWNcz3Jbcbuy9fz2JLrNqk/view?usp=sharing", // 🔗 paste your cert URL here
  },
  {
    name: "Pesto Full Stack Development & Product Engineering",
    issuer: "Pesto Tech",
    link: "https://drive.google.com/file/d/12m8sH6xy0dSeyb33FyDCVEjJaYViRAT4/view?usp=sharing", // 🔗 paste your cert URL here
  },
];

export const projectCategories = {
  fullstack: "Frontend / Full-Stack",
  dataAnalytics: "Data Analytics",
};

export const projects = [
  {
    title: "FatJobs - AI-Powered Job Aggregator",
    description:
      "FatJobs is a streamlined job discovery engine built to simplify the search for tech roles. It automates the collection of high-quality SDE and Data science opportunities from various sources, presenting them through a clean, high-performance interface to eliminate the clutter of traditional job boards.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    type: "Productivity · Open Source",
    category: "fullstack",
    highlights: [
      "Automated real-time job scraping",
      "Curated listings for Tier-1 tech firms",
      "Optimized UI for rapid job browsing",
    ],
    live: "https://www.fatjobs.in",
    github: "https://github.com/AmanAshutosh/FatJobs",
    color: "#1a1a2e",
  },
  {
    title: "devFit - Full-Stack Fitness Tracking",
    description:
      "A modern, minimalist fitness platform designed for developers to track health metrics. It features a high-performance MERN architecture, real-time BMI calculation, and automated workout data exports to Excel, all wrapped in a clean, high-contrast interface.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Recharts"],
    type: "Health · Productivity",
    category: "fullstack",
    highlights: [
      "Email OTP & JWT Authentication",
      "Automated Excel Data Exporting",
      "Interactive Analytics with Recharts",
    ],
    live: "https://dev-fit-six.vercel.app/",
    github: "https://github.com/AmanAshutosh/devFit",
    color: "#2ecc71",
  },
  {
    title: "Hustler 2.0 - Developer Productivity Suite",
    description:
      "A unified productivity engine for developers to manage deep-work sessions, DSA progress, and project lifecycles. It features a custom GitHub-style activity heatmap and a focus timer that persists across sessions, helping developers gamify and track their daily 'hustle' without external database dependencies.",
    stack: [
      "React 18",
      "Node.js",
      "Express",
      "Zustand",
      "lowdb",
      "Tailwind CSS",
    ],
    type: "Productivity · Tooling",
    category: "fullstack",
    highlights: [
      "Integrated Deep Work Timer with session persistence",
      "Dynamic GitHub-style activity heatmap",
      "Automated social sharing cards for LinkedIn/X",
    ],
    live: "https://hustler-km31.onrender.com/",
    github: "https://github.com/AmanAshutosh/Hustler",
    color: "#3498db",
  },
  {
    title: "highLIGHTER - Modern Content Hub",
    description:
      "A sleek, responsive frontend-only blog and task management application. highLIGHTER focuses on a distraction-free writing experience, featuring local storage persistence and a beautifully polished grid-based UI with integrated dark mode and category-based sorting.",
    stack: ["React.js", "Vite", "Context API", "React Router", "Local Storage"],
    type: "Web Application · Frontend",
    category: "fullstack",
    highlights: [
      "Zero-backend architecture with Local Storage persistence",
      "Integrated Dark/Light mode via CSS Variables",
      "Seamless CRUD operations for content management",
    ],
    live: "https://highlighter-omega.vercel.app/",
    github: "https://github.com/AmanAshutosh/highLIGHTER",
    color: "#e67e22",
  },

  // ── Data Analytics — placeholder cards ──────────────────────
  // isPlaceholder: true → card renders a "Planned" badge, a
  // pattern thumbnail instead of a screenshot, and disabled
  // Live/GitHub buttons. Replace each entry with the real project
  // (drop isPlaceholder, fill in live/github) once it's built.
  {
    title: "Sales Dashboard",
    description:
      "An interactive sales performance dashboard tracking revenue trends, regional breakdowns, and product-level KPIs to support data-driven decision-making.",
    stack: ["Power BI", "Excel", "SQL"],
    type: "Sales Analytics · Planned",
    category: "dataAnalytics",
    isPlaceholder: true,
    highlights: [
      "Revenue & regional performance breakdown",
      "Product-level KPI tracking",
      "Interactive filters and drill-downs",
    ],
    live: "#",
    github: "#",
    color: "#475569",
  },
  {
    title: "Customer Churn Analysis",
    description:
      "A Python-based analysis identifying the key drivers of customer churn and surfacing at-risk customer segments using exploratory data analysis and statistics.",
    stack: ["Python", "Pandas", "Matplotlib", "Statistics"],
    type: "Customer Analytics · Planned",
    category: "dataAnalytics",
    isPlaceholder: true,
    highlights: [
      "Churn driver identification via EDA",
      "At-risk customer segmentation",
      "Statistical significance testing",
    ],
    live: "#",
    github: "#",
    color: "#475569",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "A Power BI dashboard visualizing employee attrition, headcount trends, and workforce composition to help HR teams spot retention risks early.",
    stack: ["Power BI", "Excel", "SQL"],
    type: "HR Analytics · Planned",
    category: "dataAnalytics",
    isPlaceholder: true,
    highlights: [
      "Attrition & headcount trend tracking",
      "Workforce composition breakdowns",
      "Retention risk indicators",
    ],
    live: "#",
    github: "#",
    color: "#475569",
  },
  {
    title: "Netflix Data Analysis",
    description:
      "An exploratory data analysis of the public Netflix titles dataset, uncovering trends in content type, genre distribution, and release patterns over time.",
    stack: ["Python", "Pandas", "Matplotlib"],
    type: "Data Analysis · Planned",
    category: "dataAnalytics",
    isPlaceholder: true,
    highlights: [
      "Content type & genre trend analysis",
      "Release pattern visualization over time",
      "Cleaned, analysis-ready dataset",
    ],
    live: "#",
    github: "#",
    color: "#475569",
  },
  {
    title: "E-commerce Analytics",
    description:
      "A SQL and Power BI analysis of order, product, and customer data surfacing conversion, retention, and basket-size insights for an online store.",
    stack: ["SQL", "Power BI", "Excel"],
    type: "E-commerce Analytics · Planned",
    category: "dataAnalytics",
    isPlaceholder: true,
    highlights: [
      "Conversion & retention funnel analysis",
      "Basket-size and order-value insights",
      "Customer segmentation by purchase behavior",
    ],
    live: "#",
    github: "#",
    color: "#475569",
  },
  {
    title: "SQL Case Studies",
    description:
      "A collection of SQL case studies solving real-world business questions — joins, window functions, and CTEs applied to practical datasets.",
    stack: ["SQL", "Advanced Excel"],
    type: "SQL · Case Study",
    category: "dataAnalytics",
    isPlaceholder: true,
    highlights: [
      "Advanced joins & window functions",
      "Recursive CTEs on real-world schemas",
      "Query performance optimization notes",
    ],
    live: "#",
    github: "#",
    color: "#475569",
  },
  {
    title: "Power BI Dashboard",
    description:
      "An interactive multi-page Power BI report demonstrating DAX measures, drill-throughs, and dynamic filtering across a business dataset.",
    stack: ["Power BI", "DAX", "Excel"],
    type: "Business Intelligence · Planned",
    category: "dataAnalytics",
    isPlaceholder: true,
    highlights: [
      "Custom DAX measures & calculated columns",
      "Drill-through & cross-page filtering",
      "Dynamic, role-based report views",
    ],
    live: "#",
    github: "#",
    color: "#475569",
  },
  {
    title: "Python Data Cleaning Projects",
    description:
      "A set of Python and Pandas notebooks demonstrating end-to-end data cleaning, transformation, and validation techniques on messy real-world datasets.",
    stack: ["Python", "Pandas", "NumPy"],
    type: "Data Cleaning · Planned",
    category: "dataAnalytics",
    isPlaceholder: true,
    highlights: [
      "Missing-value & outlier handling",
      "Schema validation & type coercion",
      "Reusable cleaning pipeline notebooks",
    ],
    live: "#",
    github: "#",
    color: "#475569",
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

// Keys here must match the keys in `skills` above — this previously drifted
// (cloud/data/delivery vs the real devops key), which silently dropped the
// devops category's icon and label. Keep them in lockstep.
export const skillGroupLabels = {
  frontend: "Frontend Development",
  backend: "Backend & Languages",
  devops: "Cloud & DevOps",
  dataAnalytics: "Data Analytics",
  learning: "Web3 & AI (Current Focus)",
};
