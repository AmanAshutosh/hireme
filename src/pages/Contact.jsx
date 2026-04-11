import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitFork, Globe, Send } from "lucide-react";
import PageTransition from "../components/PageTransition";
import BackButton from "../components/BackButton";
import { personal } from "../data/portfolioData";
import "../styling/pages.css";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <PageTransition>
      <div className="inner-page">
        <div className="inner-header">
          <BackButton />
          <h1 className="inner-title">Contact</h1>
        </div>

        <div className="contact-grid">
          {/* ── Form ── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="inner-card"
          >
            <span className="card-label" style={{ marginBottom: 20 }}>
              Send a Message
            </span>
            <form className="contact-form-wrap" onSubmit={handleSubmit}>
              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  placeholder="Project Collaboration"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                {sent ? (
                  "Opening Mail Client..."
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <Send size={14} strokeWidth={2} /> Send Message
                  </span>
                )}
              </button>
            </form>
          </motion.div>

          {/* ── Info (Fix #5 – profiles NOT dark/black) ── */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {/* Contact info – light card */}
            <div className="inner-card inner-card-light">
              <span
                className="card-label card-label-light"
                style={{ marginBottom: 16 }}
              >
                Contact Info
              </span>
              <div className="contact-info-section">
                {[
                  {
                    label: "Email",
                    value: personal.email,
                    icon: <Mail size={15} strokeWidth={1.5} />,
                  },
                  {
                    label: "Phone",
                    value: personal.phone,
                    icon: <Phone size={15} strokeWidth={1.5} />,
                  },
                  {
                    label: "Location",
                    value: personal.location,
                    icon: <MapPin size={15} strokeWidth={1.5} />,
                  },
                ].map((item) => (
                  <div key={item.label} className="contact-info-item">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div className="contact-info-label">{item.label}</div>
                      <div className="contact-info-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profiles – also light card (Fix #5) */}
            <div className="inner-card inner-card-light">
              <span
                className="card-label card-label-light"
                style={{ marginBottom: 14 }}
              >
                Profiles
              </span>
              <div className="contact-profiles-list">
                {[
                  {
                    label: "GitHub",
                    url: "https://github.com/ashutoshhify",
                    icon: <GitFork size={15} strokeWidth={1.8} />,
                  },
                  {
                    label: "LinkedIn",
                    url: "https://linkedin.com/in/ashutoshhify",
                    icon: <Globe size={15} strokeWidth={1.8} />,
                  },
                  {
                    label: "Portfolio",
                    url: personal.portfolio,
                    icon: <Mail size={15} strokeWidth={1.8} />,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-profile-item"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
