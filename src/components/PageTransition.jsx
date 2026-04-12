import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const variants = {
  initial: { opacity: 0, y: 0 }, // appear at top of page, just invisible
  animate: { opacity: 1, y: 0 }, // fade in in place — no vertical drift
  exit: { opacity: 0, y: 0 }, // fade out in place
};

export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  // Instantly jump to top of page on every route change,
  // BEFORE the new page animates in — so it always opens from the top.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}
