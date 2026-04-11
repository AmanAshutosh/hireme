// ============================================================
//  Education.jsx
//  ─────────────────────────────────────────────────────────
//  HOW TO ADD A NEW EDUCATION ENTRY (Class 10, 12, etc.):
//  Go to  src/data/portfolioData.js  →  find the `education`
//  array  →  copy the block below and paste it where you want:
//
//  {
//    institution: "School / College / Platform Name",
//    degree:      "Class 10 / Class 12 / B.Tech / Bootcamp",
//    field:       "Science (PCM) / Computer Science / etc.",
//    period:      "2014 – 2015",
//    status:      "Completed",   // "Completed"  OR  "In Progress"
//  },
//
//  Status "In Progress" → shows a yellow/cyan badge
//  Status "Completed"   → shows a green badge
//  No other changes needed here.
// ============================================================

import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { education } from "../data/portfolioData";
import "../styling/pages.css";

// ── Animation: each row slides in from the left ──
const fadeUp = {
  initial: { opacity: 0, x: -12 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Education() {
  return (
    <PageTransition>
      <div className="inner-page">
        {/* ── Page header ── */}
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Education</h1>
        </div>

        {/* ── Subtitle card ── */}
        <div className="inner-card" style={{ marginBottom: 12 }}>
          <p
            style={{
              fontSize: "0.84rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Continuously learning — from formal engineering education to
            specialized bootcamps and fellowship programs focused on modern
            full-stack and AI development.
          </p>
        </div>

        {/* ── Education list ──
            Each row comes from the `education` array in portfolioData.js.
            Add a new entry there and it appears here automatically. ── */}
        <div className="edu-list">
          {education.map((edu, i) => (
            // ── Single education row ──
            // To add Class 10/12 copy the object template from the top comment
            // and add it to the education array in portfolioData.js
            <motion.div
              key={edu.institution}
              custom={i}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="edu-card-item"
            >
              {/* Left side: school name, degree, field */}
              <div>
                <div className="edu-card-school">{edu.institution}</div>
                <div className="edu-card-degree">{edu.degree}</div>
                <div className="edu-card-field">{edu.field}</div>
              </div>

              {/* Right side: period + status badge */}
              <div style={{ textAlign: "right" }}>
                <div className="edu-card-period">{edu.period}</div>
                <div style={{ marginTop: 6 }}>
                  {/* Badge color: yellow/accent = In Progress, green = Completed */}
                  <span
                    className={`edu-status-badge ${
                      edu.status === "In Progress"
                        ? "edu-status-progress"
                        : "edu-status-done"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>
            </motion.div>
            // ── End of single education row ──
          ))}
        </div>
        {/* ── End education list ── */}
      </div>
    </PageTransition>
  );
}
