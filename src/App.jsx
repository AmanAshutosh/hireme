import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
// Home is kept as a static import — it's the landing route, so it should
// be in the initial bundle rather than triggering an extra network round
// trip. Every other route is code-split: visitors only pay for the page
// they actually open.
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Education = lazy(() => import("./pages/Education"));
const Freelance = lazy(() => import("./pages/Freelance"));
const Social = lazy(() => import("./pages/Social"));
const TechStack = lazy(() => import("./pages/TechStack"));
import "./styling/global.css";
import ThemeToggle from "./components/ThemeToggle";
import WaterDots from "./components/WaterDots";
// ✅ Import LAST so mobile fixes override existing styles
import "./styling/mobile-fixes.css";

function RouteFallback() {
  return <div className="route-fallback" aria-hidden="true" />;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteFallback />}>
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
      </Suspense>
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
      <WaterDots />
      <ThemeToggle theme={theme} toggle={toggle} />
      <AnimatedRoutes />
    </Router>
  );
}
