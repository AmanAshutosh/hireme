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
import { ExternalLink, GitFork, CheckCircle } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { projects } from "../data/portfolioData";
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

export default function Projects() {
  return (
    <PageTransition>
      <div className="inner-page">
        {/* ── Page header ── */}
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Projects</h1>
        </div>

        {/* ── Project cards grid ──
            Each card comes from the `projects` array in portfolioData.js.
            To add a new project just push a new object there. ── */}
        <div className="projects-bento">
          {projects.map((p, i) => (
            // ── Single project card ──
            <motion.div
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="project-card"
            >
              {/* Type badge  e.g. "Fintech · Production" */}
              <div className="project-card-header">
                <span className="project-type-badge">{p.type}</span>
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
                  onClick={() =>
                    p.live !== "#" && window.open(p.live, "_blank")
                  }
                  disabled={p.live === "#"}
                >
                  <ExternalLink size={12} strokeWidth={2} />
                  Live
                </button>

                <button
                  className="project-link-btn project-link-secondary"
                  onClick={() =>
                    p.github !== "#" && window.open(p.github, "_blank")
                  }
                  disabled={p.github === "#"}
                >
                  <GitFork size={12} strokeWidth={1.8} />
                  GitHub
                </button>
              </div>
            </motion.div>
            // ── End of single project card ──
          ))}
        </div>
        {/* ── End project cards grid ── */}
      </div>
    </PageTransition>
  );
}
