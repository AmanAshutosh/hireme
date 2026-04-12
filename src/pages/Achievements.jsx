import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { certifications } from "../data/portfolioData";
import "../styling/pages.css";

// Optimised: shorter duration + GPU-only props (opacity + transform)
const fadeUp = {
  initial: { opacity: 0, y: 14, willChange: "opacity, transform" },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      delay: i * 0.07,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const highlights = [
  {
    label: "Founding Engineer",
    desc: "Co-founded Quick Wage — India's salary-on-demand fintech platform",
    stat: "3.5+ yrs",
  },
  {
    label: "99.9% Uptime",
    desc: "Designed and maintained high-availability NestJS microservices in production",
    stat: "Production",
  },
  {
    label: "60% Efficiency",
    desc: "Built HRMS that reduced operational workload for the entire ops team",
    stat: "~60% reduction",
  },
  {
    label: "Investor Pitched",
    desc: "Participated in investor pitch preparation and product go-to-market execution",
    stat: "Startup",
  },
];

export default function Achievements() {
  return (
    <PageTransition>
      <div className="inner-page">
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Achievements</h1>
        </div>

        {/* FIX: Added ach-highlights-grid class so mobile-fixes.css can target it */}
        <div
          className="ach-highlights-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
            marginBottom: 12,
          }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              custom={i}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="inner-card"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {h.label}
                </div>
                <span className="tag tag-accent">{h.stat}</span>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="initial"
          animate="animate"
        >
          <div
            style={{
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              marginBottom: 12,
            }}
          >
            Certifications
          </div>

          <div className="ach-cert-grid">
            {certifications.map((c, i) => (
              <motion.a
                key={c.name}
                custom={i + 4}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                href={c.link && c.link !== "#" ? c.link : undefined}
                target={c.link && c.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`ach-cert-card ach-cert-card-link ${
                  !c.link || c.link === "#" ? "ach-cert-no-link" : ""
                }`}
              >
                <div className="ach-cert-icon-wrap">
                  <Award size={20} strokeWidth={1.4} />
                </div>
                <div className="ach-cert-body">
                  <div className="ach-cert-name">{c.name}</div>
                  <div className="ach-cert-issuer">{c.issuer}</div>
                </div>
                <div className="ach-cert-ext">
                  {c.link && c.link !== "#" ? (
                    <ExternalLink size={13} strokeWidth={1.8} />
                  ) : (
                    <span className="ach-cert-no-url">No link</span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
