import { motion } from "framer-motion";

// 🔹 Ye animation ke different states define karta hai
// 🔹 Jab page load hota hai, animate hota hai, ya exit hota hai
const variants = {
  // 🔹 Initial state (jab component mount hota hai)
  initial: { opacity: 0, y: 18, scale: 0.99 },

  // 🔹 Final visible state (normal state)
  animate: { opacity: 1, y: 0, scale: 1 },

  // 🔹 Exit state (jab component unmount ho raha ho / page change ho raha ho)
  exit: { opacity: 0, y: -10, scale: 0.99 },
};

// 🔹 Ye wrapper component hai jo har page ko smooth animation deta hai
// 🔹 children = jo bhi page content hai (Home, About, etc.)
export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants} // 🔹 upar defined animation states use ho rahe hain
      initial="initial" // 🔹 start kaha se kare animation
      animate="animate" // 🔹 final visible state
      exit="exit" // 🔹 jab page exit kare
      // 🔹 animation ki speed aur easing control karta hai
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* 🔹 yaha actual page ka content render hota hai */}
      {children}
    </motion.div>
  );
}
