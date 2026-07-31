// ============================================================
//  Projects.jsx
//  ─────────────────────────────────────────────────────────
//  HOW TO ADD A NEW PROJECT:
//  Go to  src/data/portfolioData.js  →  find the `projects`
//  array  →  copy the block below and fill in your details:
//
//  {
//    title:       "Your Project Name",
//    description: "One or two sentence description of what it does.",
//    stack:       ["React.js", "Node.js", "MongoDB"],   // tech tags
//    type:        "SaaS · Web App",                     // badge label
//    highlights: [                                      // 2–4 bullet wins
//      "Key achievement or metric",
//      "Another highlight",
//    ],
//    live:   "https://your-live-url.com",  // or "#" if no live link
//    github: "https://github.com/you/repo", // or "#" if private
//  },
//
//  The card is rendered automatically — no changes needed here.
// ============================================================

import { motion } from "framer-motion";
import { ExternalLink, GitFork, CheckCircle, Clock, BarChart3 } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { projects, projectCategories } from "../data/portfolioData";
import "../styling/pages.css";

// ── Animation: each card fades up with a staggered delay ──
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

// ── Single project card ──
// Handles both shipped projects and Data Analytics placeholders
// (isPlaceholder: true → "Planned" badge, pattern thumbnail, disabled links).
function ProjectCard({ p, i }) {
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="initial"
      animate="animate"
      className={`project-card ${p.isPlaceholder ? "project-card-placeholder" : ""}`}
      style={{ "--project-accent": p.color }}
    >
      {p.isPlaceholder && (
        <div className="project-thumb-placeholder" aria-hidden="true">
          <BarChart3 size={28} strokeWidth={1.5} />
        </div>
      )}

      {/* Type badge  e.g. "Fintech · Production" */}
      <div className="project-card-header">
        <span className="project-type-badge">{p.type}</span>
        {p.isPlaceholder && (
          <span className="project-planned-badge">
            <Clock size={10} strokeWidth={2} />
            Planned
          </span>
        )}
      </div>

      {/* Title + description */}
      <div className="project-title">{p.title}</div>
      <p className="project-desc">{p.description}</p>

      {/* Highlight bullets — fill `highlights` array in data */}
      <div className="project-highlights">
        {p.highlights.map((h) => (
          <div key={h} className="project-highlight">
            <CheckCircle
              size={12}
              strokeWidth={2}
              className="project-highlight-icon"
            />
            <span>{h}</span>
          </div>
        ))}
      </div>

      {/* Tech stack tags — fill `stack` array in data */}
      <div className="project-stack">
        {p.stack.map((s) => (
          <span key={s} className="tag tag-dark">
            {s}
          </span>
        ))}
      </div>

      {/* Live + GitHub links — set "#" to disable a button */}
      <div className="project-links">
        <button
          className="project-link-btn project-link-primary"
          onClick={() => p.live !== "#" && window.open(p.live, "_blank")}
          disabled={p.live === "#"}
          aria-label={p.live === "#" ? "Live demo not available yet" : `View ${p.title} live demo`}
        >
          <ExternalLink size={12} strokeWidth={2} />
          Live
        </button>

        <button
          className="project-link-btn project-link-secondary"
          onClick={() => p.github !== "#" && window.open(p.github, "_blank")}
          disabled={p.github === "#"}
          aria-label={p.github === "#" ? "GitHub repository not available yet" : `View ${p.title} on GitHub`}
        >
          <GitFork size={12} strokeWidth={1.8} />
          GitHub
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const byCategory = Object.keys(projectCategories).map((key) => ({
    key,
    label: projectCategories[key],
    items: projects.filter((p) => p.category === key),
  }));

  return (
    <PageTransition>
      <div className="inner-page">
        {/* ── Page header ── */}
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Projects</h1>
        </div>

        {/* ── Project sections, grouped by category ──
            Each card comes from the `projects` array in portfolioData.js.
            To add a new project just push a new object there with a
            `category` matching one of the keys in `projectCategories`. ── */}
        {byCategory.map((section) =>
          section.items.length ? (
            <div key={section.key} className="projects-section">
              <div className="projects-section-header">
                <h2 className="projects-section-title">{section.label}</h2>
                <span className="projects-section-count">
                  {section.items.length}{" "}
                  {section.items.length === 1 ? "project" : "projects"}
                </span>
              </div>
              <div className="projects-bento">
                {section.items.map((p, i) => (
                  <ProjectCard key={p.title} p={p} i={i} />
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </PageTransition>
  );
}
