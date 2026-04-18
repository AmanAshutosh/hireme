import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { freelance, personal } from "../data/portfolioData";
import "../styling/pages.css";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Freelance() {
  return (
    <PageTransition>
      <div className="inner-page">
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Freelance</h1>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          {/* CTA card */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="inner-card inner-card-light"
            style={{ gridColumn: "1 / 3" }}
          >
            <div className="freelance-hero">
              <span className="tag tag-accent" style={{ marginBottom: 4 }}>
                <Zap size={11} strokeWidth={2} style={{ marginRight: 4 }} />
                Available Now
              </span>
              <div className="freelance-big-title">{freelance.tagline}</div>
              <p className="freelance-big-sub">{freelance.description}</p>
              <button
                className="freelance-cta-btn"
                onClick={() =>
                  window.open(`mailto:${personal.email}`, "_blank")
                }
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  Get in Touch <ArrowRight size={14} strokeWidth={2} />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="inner-card"
            style={{ gridColumn: "1 / 3" }}
          >
            <span className="card-label" style={{ marginBottom: 16 }}>
              Services
            </span>
            <div className="freelance-services-grid">
              {freelance.services.map((s, i) => (
                <div key={s} className="freelance-service-item">
                  <Zap
                    size={13}
                    strokeWidth={2}
                    style={{ color: "var(--accent)" }}
                  />
                  {s}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
