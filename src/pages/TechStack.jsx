// ============================================================
//  TechStack.jsx
//  ─────────────────────────────────────────────────────────
//  Shows:
//   1. Bio / identity card at the top
//   2. One card per skill category, each tech item with its
//      brand icon from react-icons/si (Simple Icons)
//
//  HOW TO ADD A NEW SKILL:
//  ① Add the skill name to the relevant array in portfolioData.js
//  ② Add its icon to the ICON_MAP below, e.g.:
//       "Vite": <SiVite size={15} />,
//  ③ That's it — the card re-renders automatically.
//
//  HOW TO ADD A NEW CATEGORY:
//  ① Add a new key to `skills` in portfolioData.js, e.g.:
//       mobile: ["React Native", "Expo"],
//  ② Add its display label to `skillGroupLabels`, e.g.:
//       mobile: "📱 Mobile",
//  ③ Add its lucide icon to CATEGORY_ICONS in About.jsx /
//     skillGroupIcons in About.jsx (used there too).
//  ④ Done — TechStack renders it automatically.
//
//  INSTALL DEPENDENCY (run once):
//    npm install react-icons
// ============================================================

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  // ── Frontend ──
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiMui,
  // ── Backend ──
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiPython,
  SiGo,
  // ── Cloud & DevOps ──
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  // ── Data & Messaging ──
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiElasticsearch,
  // ── Delivery & Testing ──
  SiPrometheus,
  SiGrafana,
  // ── Web3 & AI ──
  SiEthereum,
} from "react-icons/si";
// lucide-react used as fallbacks for icons not in react-icons/si
import {
  GitBranch,
  Cpu,
  Zap,
  FlaskConical,
  Bot,
  Globe,
  Cloud,
  Wind,
} from "lucide-react";

import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { personal, skills, skillGroupLabels } from "../data/portfolioData";
import "../styling/pages.css";
import "../styling/techstack.css";

// ── Brand icon map ─────────────────────────────────────────
// Key  = exact string from portfolioData skills arrays
// Value = icon component
// To add a new icon: "Skill Name": <SiIconName size={16} />,
// Browse icons at: https://react-icons.github.io/react-icons/icons/si/
// ──────────────────────────────────────────────────────────
const ICON_MAP = {
  // Frontend
  "React.js": <SiReact size={15} />,
  "Next.js": <SiNextdotjs size={15} />,
  TypeScript: <SiTypescript size={15} />,
  "Redux Toolkit": <SiRedux size={15} />,
  "Tailwind CSS": <SiTailwindcss size={15} />,
  "Framer Motion": <Wind size={15} strokeWidth={1.8} />,
  Sass: <SiSass size={15} />,
  "Material UI": <SiMui size={15} />,

  // Backend
  "Node.js": <SiNodedotjs size={15} />,
  NestJS: <SiNestjs size={15} />,
  "Express.js": <SiExpress size={15} />,
  Python: <SiPython size={15} />,
  Go: <SiGo size={15} />,
  Fastify: <Zap size={15} strokeWidth={1.8} />,
  "REST APIs": <Globe size={15} strokeWidth={1.8} />,

  // Cloud & DevOps
  "Google Cloud (GCP)": <SiGooglecloud size={15} />,
  "AWS (EC2, EKS)": <Cloud size={15} strokeWidth={1.8} />,
  Docker: <SiDocker size={15} />,
  Kubernetes: <SiKubernetes size={15} />,
  "GitHub Actions": <SiGithubactions size={15} />,
  Terraform: <SiTerraform size={15} />,

  // Data & Messaging
  PostgreSQL: <SiPostgresql size={15} />,
  MongoDB: <SiMongodb size={15} />,
  Redis: <SiRedis size={15} />,
  RabbitMQ: <SiRabbitmq size={15} />,
  Kafka: <SiRabbitmq size={15} />,
  ElasticSearch: <SiElasticsearch size={15} />,

  // Delivery & Testing
  "CI/CD Automation": <GitBranch size={15} strokeWidth={1.8} />,
  "Unit / E2E Testing": <FlaskConical size={15} strokeWidth={1.8} />,
  "K6 Load Testing": <Zap size={15} strokeWidth={1.8} />,
  "Design Patterns": <Cpu size={15} strokeWidth={1.8} />,
  "Prometheus & Grafana": <SiPrometheus size={15} />,

  // Web3 & AI
  LangChain: <Bot size={15} strokeWidth={1.8} />,
  "MCP Servers": <Cpu size={15} strokeWidth={1.8} />,
  "Web3 / Ethers.js": <SiEthereum size={15} />,
  "Escrow Logic": <SiEthereum size={15} />,
};

// ── Category icon map (matches keys in skillGroupLabels) ───
const CATEGORY_ICONS = {
  frontend: <SiReact size={14} />,
  backend: <SiNodedotjs size={14} />,
  cloud: <Cloud size={14} strokeWidth={1.8} />,
  data: <SiPostgresql size={14} />,
  delivery: <GitBranch size={14} strokeWidth={1.8} />,
  learning: <Bot size={14} strokeWidth={1.8} />,
};

// ── Animations ────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function TechStack() {
  const skillEntries = Object.entries(skills);

  return (
    <PageTransition>
      <div className="inner-page">
        {/* ── Page header ── */}
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Tech Stack</h1>
        </div>

        {/* ══════════════════════════════════════
            BIO CARD — identity at the top
            Edit personal info in portfolioData.js
            ══════════════════════════════════════ */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="inner-card ts-bio-card"
        >
          <div className="ts-bio-inner">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="ts-bio-avatar"
            />
            <div className="ts-bio-text">
              <div className="ts-bio-name">{personal.name}</div>
              <div className="ts-bio-role">
                {personal.role} · {personal.tagline}
              </div>
              <div className="ts-bio-location">
                <MapPin size={11} strokeWidth={1.8} />
                {personal.location}
              </div>
              <p className="ts-bio-desc">{personal.bio}</p>
            </div>
          </div>
        </motion.div>
        {/* ── End bio card ── */}

        {/* ══════════════════════════════════════
            SKILL CATEGORY CARDS
            One card per key in skills object.
            Add a skill → portfolioData.js skills array.
            Add an icon → ICON_MAP above.
            ══════════════════════════════════════ */}
        <div className="ts-grid">
          {skillEntries.map(([groupKey, items], gi) => (
            // ── Single category card ──
            <motion.div
              key={groupKey}
              custom={gi + 1}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="inner-card ts-category-card"
            >
              {/* Category header with icon */}
              <div className="ts-category-header">
                <span className="ts-category-icon">
                  {CATEGORY_ICONS[groupKey]}
                </span>
                <span className="ts-category-label">
                  {skillGroupLabels[groupKey] || groupKey}
                </span>
              </div>

              {/* Skill chips — each with brand icon + name */}
              <div className="ts-skills-list">
                {items.map((skill) => (
                  // ── Single skill chip ──
                  // To add: push skill name to portfolioData.js
                  // and add its icon to ICON_MAP above
                  <div key={skill} className="ts-skill-chip">
                    <span className="ts-skill-icon">
                      {ICON_MAP[skill] ?? <Cpu size={13} strokeWidth={1.8} />}
                    </span>
                    <span className="ts-skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            // ── End category card ──
          ))}
        </div>
        {/* ── End skill category cards ── */}
      </div>
    </PageTransition>
  );
}
