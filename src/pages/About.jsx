import { motion } from "framer-motion";
import {
  MapPin,
  Zap,
  Monitor,
  Server,
  Cloud,
  ChartPie,
  Bot,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import {
  personal,
  skills,
  skillGroupLabels,
  skillCategoryStatus,
} from "../data/portfolioData";
import "../styling/pages.css";

// 🔹 Ye object har skill group ke liye ek icon define karta hai
// 🔹 Example: frontend → Monitor icon, backend → Server icon
// 🔹 Keys MUST match the keys in `skills` (portfolioData.js) —
//    these previously drifted (cloud/data/delivery vs devops),
//    which silently dropped the devops group's icon.
const skillGroupIcons = {
  frontend: <Monitor size={12} strokeWidth={1.8} />,
  backend: <Server size={12} strokeWidth={1.8} />,
  devops: <Cloud size={12} strokeWidth={1.8} />,
  dataAnalytics: <ChartPie size={12} strokeWidth={1.8} />,
  learning: <Bot size={12} strokeWidth={1.8} />,
};

// 🔹 Simple fade + slide animation (neeche se upar aata hai)
const fadeUp = {
  initial: { opacity: 0, y: 16 }, // 🔹 start invisible + thoda neeche
  animate: {
    opacity: 1,
    y: 0, // 🔹 normal position pe aa jata hai
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
  },
};

// 🔹 Ye stagger animation hai
// 🔹 Iska matlab: child elements ek ke baad ek animate honge (ek saath nahi)
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

export default function About() {
  return (
    // 🔹 PageTransition wrapper → page change hone pe smooth animation deta hai
    <PageTransition>
      <div className="inner-page">
        {/* 🔹 Page header: back button + title */}
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">About</h1>
        </div>

        {/* 🔹 Main grid layout (cards ke liye) */}
        <motion.div
          className="about-grid"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* 🔹 Intro card (profile info + bio) */}
          <motion.div variants={fadeUp} className="inner-card about-intro-card">
            <div className="about-avatar-section">
              {/* 🔹 Profile image */}
              <img
                src={personal.avatar}
                alt={personal.name}
                className="about-avatar"
                loading="lazy"
                decoding="async"
              />

              {/* 🔹 Name + role + location */}
              <div className="about-name-block">
                <div className="about-big-name">{personal.name}</div>
                <div className="about-big-role">
                  {personal.role} · {personal.tagline}
                </div>

                {/* 🔹 Location with icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 6,
                    fontSize: "0.78rem",
                    color: "var(--text-dim)",
                  }}
                >
                  <MapPin size={11} strokeWidth={1.8} />
                  {personal.location}
                </div>
              </div>
            </div>

            {/* TODO: Sync from LinkedIn — replace with the updated LinkedIn
                summary. Should highlight Frontend Development experience,
                Customer Support experience, the current transition into
                Data Analytics, problem-solving mindset, continuous learning,
                and the technologies worked with. Left unchanged for now. */}
            {/* 🔹 Bio / description */}
            <p className="about-bio">
              Full-Stack Developer with {personal.yearsOfExperience} years of
              experience building scalable web applications — from rapid MVP
              development to production-grade systems in the fintech space...
            </p>
          </motion.div>

          {/* 🔹 Skills section */}
          <motion.div variants={fadeUp} className="inner-card">
            <div className="about-skills-title">Technical Skills</div>

            {/* 🔹 skills object ko loop kar rahe hain */}
            {Object.entries(skills).map(([group, items]) => (
              <div className="skills-group" key={group}>
                {/* 🔹 Group name + icon */}
                <div className="skills-group-label">
                  {skillGroupIcons[group]}
                  {skillGroupLabels[group] || group}
                  {skillCategoryStatus[group] && (
                    <span className="ts-category-status">
                      {skillCategoryStatus[group]}
                    </span>
                  )}
                </div>

                {/* 🔹 Har skill ko tag ke form me show kar rahe hain */}
                <div className="skills-tags">
                  {items.map((s) => (
                    <span key={s} className="tag tag-dark">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* TODO: Sync from LinkedIn — confirm this still reflects the
              latest "currently learning" focus once the profile is synced. */}
          {/* 🔹 Currently Exploring section (AI learning) */}
          <motion.div variants={fadeUp} className="inner-card inner-card-warm">
            <span className="card-label">Currently Exploring</span>

            <div className="about-explore-title">AI-Powered Development</div>

            <p className="about-explore-desc">
              Currently completing the Kodex Full-Stack + AI Bootcamp...
            </p>

            {/* 🔹 Learning skills ko highlight tags me show kar rahe hain */}
            <div className="about-explore-tags">
              {skills.learning.map((s) => (
                <span key={s} className="tag tag-accent">
                  <Zap size={10} strokeWidth={2} style={{ marginRight: 3 }} />
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 🔹 Mindset section */}
          <motion.div variants={fadeUp} className="inner-card inner-card-light">
            <span className="card-label card-label-light">Mindset</span>

            <div className="about-mindset-title">Building with purpose</div>

            <p className="about-mindset-desc">
              I believe in shipping fast, iterating based on real feedback...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
