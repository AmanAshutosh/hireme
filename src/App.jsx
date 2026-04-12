import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Education from "./pages/Education";
import Freelance from "./pages/Freelance";
import Social from "./pages/Social";
import TechStack from "./pages/TechStack";
import "./styling/global.css";
import ThemeToggle from "./components/ThemeToggle";
// ✅ Import LAST so mobile fixes override existing styles
import "./styling/mobile-fixes.css";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/education" element={<Education />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/social" element={<Social />} />
        <Route path="/techstack" element={<TechStack />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="grain" />
      <ThemeToggle theme={theme} toggle={toggle} />
      <AnimatedRoutes />
    </Router>
  );
}
