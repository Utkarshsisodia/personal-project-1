import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      // 1. Start slightly to the right and transparent
      initial={{ opacity: 0, x: 40 }}
      // 2. Animate to original position and fully opaque
      animate={{ opacity: 1, x: 0 }}
      // 3. When leaving the page, slide slightly to the left and fade out
      exit={{ opacity: 0, x: -40 }}
      // 4. Smooth easing curve
      transition={{ duration: 0.4, ease:"easeInOut" }}
    >
      {children}
    </motion.div>
  );
}