import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  certifications,
  socials,
  projects,
  freelance,
} from "../data/portfolioData";
import "../styling/home.css";

const socialIconMap = {
  github: <GitFork size={13} strokeWidth={1.8} />,
  linkedin: <Globe size={13} strokeWidth={1.8} />,
  twitter: <Share2 size={13} strokeWidth={1.8} />,
  code: <Code size={13} strokeWidth={1.8} />,
  gfg: <BookOpen size={13} strokeWidth={1.8} />,
  medium: <ExternalLink size={13} strokeWidth={1.8} />,
};

const parseNum = (val) =>
  parseFloat(String(val).replace(/[^\d.]/g, "")) || 0;

const expNum = parseNum(personal.yearsOfExperience);

// ── Hero left content: fade-up + stagger ──
const heroStagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const heroFadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Hanging profile card: float + mouse-tilt (lanyard swing is pure CSS) ──
function HangingProfileCard() {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 160, damping: 16 });
  const springRotateY = useSpring(rotateY, { stiffness: 160, damping: 16 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 16);
    rotateX.set(-py * 16);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="hero-lanyard">
      <div className="hero-strap" aria-hidden="true" />
      <div className="hero-clip" aria-hidden="true" />
      <motion.div
        ref={cardRef}
        className="hero-profile-card"
        style={{ rotateX: springRotateX, rotateY: springRotateY }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-card-hole" aria-hidden="true" />
        <img
          src={personal.avatar}
          alt={personal.name}
          className="hero-card-photo"
        />
        <div className="hero-card-name">{personal.name}</div>
        <div className="hero-card-role">{personal.role}</div>
        <div className="hero-card-divider" />
        <div className="hero-card-row">
          <MapPin size={12} strokeWidth={1.8} />
          {personal.location}
        </div>
        <div className="hero-card-status">
          <span className="hero-card-status-dot" />
          Open to Opportunities
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const gridRef = useRef(null);
  const blobRefs = useRef([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const blobKillList = [];

    // ── 1. Background blobs — organic wander
    blobRefs.current.forEach((blob, i) => {
      if (!blob) return;
      function wander() {
        const t = gsap.to(blob, {
          x: gsap.utils.random(-340, 340),
          y: gsap.utils.random(-260, 260),
          scale: gsap.utils.random(0.65, 1.55),
          duration: gsap.utils.random(11, 22),
          ease: "sine.inOut",
          onComplete: wander,
        });
        blobKillList.push(t);
      }
      const d = gsap.delayedCall(i * 0.9, wander);
      blobKillList.push(d);
    });

    // ── 2. Nav entrance
    gsap.fromTo(
      ".home-nav",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.05 }
    );

    // ── 3. Cards spring-in with stagger
    const cards = Array.from(grid.querySelectorAll(".bento-card"));
    gsap.set(cards, { opacity: 0, y: 60, scale: 0.92 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.72,
      ease: "back.out(1.65)",
      stagger: 0.065,
      delay: 0.18,
    });

    // ── 4. Hero shimmer sweep (once)
    gsap.fromTo(
      ".hero-shimmer",
      { xPercent: -130, opacity: 0 },
      {
        xPercent: 160,
        opacity: 1,
        duration: 1.2,
        delay: 1.1,
        ease: "power2.inOut",
      }
    );

    // ── 6. Number counter — experience
    const expEl = grid.querySelector(".exp-counter");
    if (expEl) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: expNum,
        duration: 1.7,
        delay: 0.85,
        ease: "power2.out",
        onUpdate() {
          expEl.textContent = Math.round(obj.val);
        },
      });
    }

    // ── 7. Number counter — projects
    const projEl = grid.querySelector(".proj-counter");
    if (projEl) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: projects.length,
        duration: 1.5,
        delay: 0.95,
        ease: "power2.out",
        onUpdate() {
          projEl.textContent = Math.round(obj.val);
        },
      });
    }

    // ── 8. Magnetic 3D tilt hover (desktop only)
    const magneticHandlers = [];
    if (window.innerWidth > 900) {
      cards.forEach((card) => {
        const onEnter = () => {
          gsap.to(card, {
            y: -7,
            duration: 0.22,
            ease: "power2.out",
            overwrite: "auto",
          });
          const arrow = card.querySelector(".card-arrow");
          if (arrow)
            gsap.to(arrow, {
              x: 2,
              y: -2,
              scale: 1.18,
              duration: 0.22,
              ease: "back.out(2.5)",
              overwrite: "auto",
            });
        };
        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          const xPct = (e.clientX - r.left - r.width / 2) / (r.width / 2);
          const yPct = (e.clientY - r.top - r.height / 2) / (r.height / 2);
          gsap.to(card, {
            rotateY: xPct * 5.5,
            rotateX: -yPct * 5.5,
            y: -7,
            transformPerspective: 900,
            duration: 0.38,
            ease: "power2.out",
            overwrite: "auto",
          });
        };
        const onLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            transformPerspective: 900,
            duration: 0.65,
            ease: "elastic.out(1, 0.62)",
            overwrite: "auto",
          });
          const arrow = card.querySelector(".card-arrow");
          if (arrow)
            gsap.to(arrow, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.3,
              overwrite: "auto",
            });
        };
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        magneticHandlers.push({ card, onEnter, onMove, onLeave });
      });
    }

    return () => {
      blobKillList.forEach((t) => t?.kill());
      blobRefs.current.forEach((b) => b && gsap.killTweensOf(b));
      gsap.killTweensOf(".home-nav");
      gsap.killTweensOf(".hero-shimmer");
      gsap.killTweensOf(cards);
      magneticHandlers.forEach(({ card, onEnter, onMove, onLeave }) => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <PageTransition>
      <div className="home-wrapper">
        {/* ── Animated Background Blobs ── */}
        <div className="bg-blobs" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((n, i) => (
            <div
              key={n}
              className={`bg-blob blob-${n}`}
              ref={(el) => (blobRefs.current[i] = el)}
            />
          ))}
        </div>

        {/* ── NAV ── */}
        <nav className="home-nav">
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
        </nav>

        {/* ── BENTO GRID ── */}
        <div className="bento-grid" ref={gridRef}>

          {/* ═══ HERO ═══ */}
          <div className="bento-card card-light card-hero">
            <div className="hero-shimmer" aria-hidden="true" />
            <div className="hero-dotgrid" aria-hidden="true" />
            <motion.div
              className="hero-grid"
              variants={heroStagger}
              initial="initial"
              animate="animate"
            >
              {/* ── Left: intro content ── */}
              <div className="hero-left">
                <motion.div className="hero-badge" variants={heroFadeUp}>
                  <span className="hero-badge-dot" />
                  Available for Work
                </motion.div>

                <motion.h1 className="hero-title-lg" variants={heroFadeUp}>
                  Hello, I'm {personal.name.split(" ")[0]}{" "}
                  <span className="hero-wave">👋</span>
                </motion.h1>

                <motion.div className="hero-subtitle-lg" variants={heroFadeUp}>
                  {personal.role}
                </motion.div>

                <motion.p className="hero-desc-lg" variants={heroFadeUp}>
                  {personal.bio} Working with React, Next.js, Node.js,
                  TypeScript and cloud-native tools.
                </motion.p>

                <motion.div className="hero-cta-row" variants={heroFadeUp}>
                  <motion.a
                    whileHover={{ scale: 1.035, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="hero-cta hero-cta-primary"
                    href={personal.resume || "/resume.pdf"}
                    download="Ashutosh_Aman_Resume.pdf"
                  >
                    <Download size={14} strokeWidth={2} />
                    Download Resume
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.035, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="hero-cta hero-cta-secondary"
                    onClick={() => navigate("/contact")}
                  >
                    <span className="hero-cta-dot" />
                    Let's Connect
                  </motion.button>
                </motion.div>
              </div>

              {/* ── Right: hanging profile card ── */}
              <div className="hero-right">
                <HangingProfileCard />
              </div>
            </motion.div>
          </div>

          {/* ═══ ABOUT ═══ */}
          <div
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
          </div>

          {/* ═══ EXPERIENCE ═══ */}
          <div
            className="bento-card card-darker card-experience"
            onClick={() => navigate("/experience")}
          >
            <span className="card-label">Experience</span>
            <div className="exp-years">
              <span className="exp-counter">0</span>
              <span className="exp-yrs-suffix">+ yrs</span>
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
          </div>

          {/* ═══ TECH STACK ═══ */}
          <div
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
          </div>

          {/* ═══ PROJECTS ═══ */}
          <div
            className="bento-card card-projects-light card-projects"
            onClick={() => navigate("/projects")}
          >
            <span className="card-label">Projects</span>
            <div className="projects-count">
              <span className="proj-counter">0</span>
              <span className="proj-plus">+</span>
            </div>
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
          </div>

          {/* ═══ EDUCATION ═══ */}
          <div
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
          </div>

          {/* ═══ CONNECT ═══ */}
          <div
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
          </div>

          {/* ═══ CERTIFICATIONS ═══ */}
          <div
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
          </div>

          {/* ═══ SOCIAL ═══ */}
          <div
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
          </div>

          {/* ═══ FREELANCE ═══ */}
          <div
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
          </div>

          {/* ═══ STATUS ═══ */}
          <div
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
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
