import { motion } from "framer-motion";
import { GitFork, Globe, Share2, Code, BookOpen, ExternalLink, ArrowUpRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { socials } from "../data/portfolioData";
import "../styling/pages.css";

const fadeUp = {
  initial: { opacity: 0, y: 20, scale: 0.97 },
  animate: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

const iconMap = {
  github: { icon: <GitFork size={22} strokeWidth={1.5} />, color: "#e0e0e0", bg: "rgba(255,255,255,0.08)", desc: "Open source & projects" },
  linkedin: { icon: <Globe size={22} strokeWidth={1.5} />, color: "#0077b5", bg: "rgba(0,119,181,0.12)", desc: "Professional network" },
  twitter: { icon: <Share2 size={22} strokeWidth={1.5} />, color: "#1da1f2", bg: "rgba(29,161,242,0.12)", desc: "Thoughts & updates" },
  code: { icon: <Code size={22} strokeWidth={1.5} />, color: "#f89f1b", bg: "rgba(248,159,27,0.12)", desc: "DSA & problem solving" },
  gfg: { icon: <BookOpen size={22} strokeWidth={1.5} />, color: "#2f8d46", bg: "rgba(47,141,70,0.12)", desc: "Articles & tutorials" },
  medium: { icon: <ExternalLink size={22} strokeWidth={1.5} />, color: "#ff6347", bg: "rgba(255,99,71,0.12)", desc: "Blog & writing" },
};

export default function Social() {
  return (
    <PageTransition>
      <div className="inner-page">
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Online Profiles</h1>
        </div>

        <div className="inner-card" style={{ marginBottom: 12 }}>
          <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Find me across the web — from open-source contributions and professional networking
            to writing, DSA practice, and technical articles.
          </p>
        </div>

        <div className="social-page-grid">
          {socials.map((s, i) => {
            const meta = iconMap[s.icon] || { icon: <ExternalLink size={22} strokeWidth={1.5} />, color: "var(--accent)", bg: "var(--accent-dim)", desc: "" };
            return (
              <motion.a
                key={s.name}
                custom={i}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-page-card"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="social-page-icon-wrap"
                  style={{ background: meta.bg, color: meta.color }}
                >
                  {meta.icon}
                </div>
                <div>
                  <div className="social-page-name">{s.name}</div>
                  <div className="social-page-handle">{meta.desc}</div>
                </div>
                <ArrowUpRight size={14} strokeWidth={1.8} style={{ color: "var(--text-dim)", marginTop: "auto" }} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
