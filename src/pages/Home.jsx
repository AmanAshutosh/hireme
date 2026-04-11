import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  GitFork,
  Globe,
  Share2,
  Code,
  BookOpen,
  ExternalLink,
  Zap,
  Sparkles,
  Download,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import {
  personal,
  skills,
  experience,
  certifications,
  socials,
  projects,
  freelance,
} from "../data/portfolioData";
import "../styling/home.css";

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const socialIconMap = {
  github: <GitFork size={13} strokeWidth={1.8} />,
  linkedin: <Globe size={13} strokeWidth={1.8} />,
  twitter: <Share2 size={13} strokeWidth={1.8} />,
  code: <Code size={13} strokeWidth={1.8} />,
  gfg: <BookOpen size={13} strokeWidth={1.8} />,
  medium: <ExternalLink size={13} strokeWidth={1.8} />,
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="home-wrapper">
        {/* ── NAV ── */}
        <motion.nav
          className="home-nav"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="nav-logo">
            AA<span className="nav-dot">.</span>
          </span>
          <div className="nav-links">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                className="nav-link"
                onClick={() => navigate(`/${item.toLowerCase()}`)}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.nav>

        {/* ── BENTO GRID ── */}
        <motion.div
          className="bento-grid"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* ═══ HERO ═══ */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-light card-hero"
          >
            <div className="hero-inner">
              <div className="hero-avatar-wrap">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="hero-avatar"
                />
                {/* Fix #9 – darker, more visible ring */}
                <div className="hero-avatar-ring" />
                <div className="hero-status-dot" />
              </div>

              {/* Fix #9 – spread evenly with gap */}
              <div className="hero-text-block">
                <div className="hero-name">{personal.name}</div>
                <div className="hero-role">{personal.role}</div>
              </div>

              <p className="hero-tagline">{personal.bio}</p>

              <div className="hero-btns">
                {/* Fix #10 – Download Resume instead of View Projects */}
                <a
                  className="hero-btn hero-btn-primary"
                  href={personal.resume || "/resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={13} strokeWidth={2} />
                  Download Resume
                </a>
                <button
                  className="hero-btn hero-btn-secondary"
                  onClick={() => navigate("/contact")}
                >
                  Let's Talk
                </button>
              </div>

              <div className="hero-location">
                <MapPin size={11} strokeWidth={1.8} />
                {personal.location}
              </div>
            </div>
          </motion.div>

          {/* ═══ ABOUT ═══ */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-light card-about"
            onClick={() => navigate("/about")}
          >
            <span className="card-label">About Me</span>
            <div className="about-card-title">
              Crafting scalable web experiences
            </div>
            <p className="about-card-text">
              Full-Stack Developer with {personal.yearsOfExperience} years of
              experience. From fintech MVPs to production-grade systems.
            </p>
            <div className="card-arrow">
              <ArrowUpRight size={13} />
            </div>
          </motion.div>

          {/* ═══ EXPERIENCE ═══ */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-darker card-experience"
            onClick={() => navigate("/experience")}
          >
            <span className="card-label">Experience</span>
            <div className="exp-years">
              {personal.yearsOfExperience}
              <span className="exp-yrs-suffix">yrs</span>
            </div>
            <div className="exp-label">of professional development</div>
            <div className="exp-company-row">
              <div className="exp-company-dot" />
              <span className="exp-company-name">
                Quick Wage — Founding Engineer
              </span>
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={13} />
            </div>
          </motion.div>

          {/* ═══ TECH STACK ═══ Fix #4 – navigate to /about (tech section) */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-light card-tech"
            onClick={() => navigate("/techstack")}
          >
            <span className="card-label">Tech Stack</span>
            <div className="tech-grid">
              {skills.frontend.slice(0, 4).map((s) => (
                <span key={s} className="tech-tag tech-tag-accent">
                  {s}
                </span>
              ))}
              {skills.backend.slice(0, 3).map((s) => (
                <span key={s} className="tech-tag">
                  {s}
                </span>
              ))}
              {skills.devops.slice(0, 2).map((s) => (
                <span key={s} className="tech-tag">
                  {s}
                </span>
              ))}
              <span className="tech-tag tech-tag-more">+more</span>
            </div>
          </motion.div>

          {/* ═══ PROJECTS ═══ Fix #1 – not black */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-projects-light card-projects"
            onClick={() => navigate("/projects")}
          >
            <span className="card-label">Projects</span>
            <div className="projects-count">{projects.length}+</div>
            <div className="projects-label">featured projects</div>
            <div className="projects-dots">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`proj-dot ${i === 0 ? "active" : ""}`}
                />
              ))}
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={13} />
            </div>
          </motion.div>

          {/* ═══ EDUCATION ═══ */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-light card-education"
            onClick={() => navigate("/education")}
          >
            <span className="card-label">Education</span>
            <div className="edu-degree">B.Tech CS</div>
            <div className="edu-school">GL Bajaj Institute of Technology</div>
            <div style={{ marginTop: 10 }}>
              <span className="tag tag-accent">AI Bootcamp · Ongoing</span>
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={13} />
            </div>
          </motion.div>

          {/* ═══ CONNECT ═══ Fix #2 – not black */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-connect-light card-connect"
            onClick={() => navigate("/contact")}
          >
            <div className="connect-icon-wrap">
              <Mail size={22} strokeWidth={1.2} />
            </div>
            <div className="connect-title">Let's Connect</div>
            <div className="connect-cta">
              Ready to collaborate on your next big idea
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={13} />
            </div>
          </motion.div>

          {/* ═══ CERTIFICATIONS ═══ Fix #6 – column layout like tech stack */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-light card-achievements"
            onClick={() => navigate("/achievements")}
          >
            <span className="card-label">Certifications</span>
            <div className="cert-grid">
              {certifications.map((c) => (
                <span key={c.name} className="cert-tag">
                  {c.name}
                </span>
              ))}
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={13} />
            </div>
          </motion.div>

          {/* ═══ SOCIAL ═══ */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-light card-social"
            onClick={() => navigate("/social")}
          >
            <span className="card-label">Find Me Online</span>
            <div className="social-grid">
              {socials.map((s) => (
                <div
                  key={s.name}
                  className="social-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(s.url, "_blank");
                  }}
                >
                  {socialIconMap[s.icon]}
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ═══ FREELANCE ═══ */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-pink card-freelance"
            onClick={() => navigate("/freelance")}
          >
            <div className="freelance-inner">
              <div>
                <span className="card-label">Available For</span>
                <div className="freelance-title">Freelance & Consulting</div>
                <p className="freelance-subtitle">
                  Building MVPs, full-stack apps & AI-integrated solutions
                </p>
              </div>
              <div className="freelance-tags">
                {freelance.services.slice(0, 4).map((s) => (
                  <span key={s} className="freelance-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={13} />
            </div>
          </motion.div>

          {/* ═══ STATUS ═══ Fix #7 – not black */}
          <motion.div
            variants={fadeUp}
            className="bento-card card-status-light card-status"
            onClick={() => navigate("/about")}
          >
            <div className="status-badge">
              <span className="status-pulse" />
              Open to Work
            </div>
            <div className="status-title">Currently Learning</div>
            <p className="status-desc">
              <Sparkles
                size={13}
                strokeWidth={1.8}
                className="status-sparkle"
              />
              {personal.currentFocus}
            </p>
            <div className="status-tags">
              <span className="tag tag-outline">
                <Zap size={11} strokeWidth={1.8} /> Remote / Hybrid
              </span>
              <span className="tag tag-green-soft">Available Now</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
