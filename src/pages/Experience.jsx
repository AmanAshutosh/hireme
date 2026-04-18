import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { experience } from "../data/portfolioData";
import "../styling/pages.css";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Experience() {
  return (
    <PageTransition>
      <div className="inner-page">
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Experience</h1>
        </div>

        <div className="inner-card" style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "3rem",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                color: "var(--accent)",
              }}
            >
              3+
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                Years of Experience
              </div>
              <div
                style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}
              >
                2 companies · Full-Stack Engineering
              </div>
            </div>
          </div>
        </div>

        <div className="inner-card">
          <div className="exp-timeline">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                custom={i}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="exp-item"
              >
                <div className="exp-time">
                  <div className="exp-time-period">{exp.period}</div>
                  <div className="exp-time-duration">{exp.duration}</div>
                </div>

                <div className="exp-dot-col">
                  <div className="exp-dot" />
                </div>

                <div className="exp-content">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4,
                    }}
                  >
                    <div className="exp-company-title">{exp.company}</div>
                    <span
                      className="tag tag-dark"
                      style={{ fontSize: "0.66rem" }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <div className="exp-role-text">{exp.role}</div>
                  <p className="exp-desc">{exp.description}</p>

                  <div className="exp-highlights">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="exp-highlight-item">
                        <span className="exp-bullet">◆</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="exp-stack">
                    {exp.stack.map((s) => (
                      <span key={s} className="tag tag-dark">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
