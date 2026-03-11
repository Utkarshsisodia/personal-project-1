import {motion} from "framer-motion";

export default function FadeIn({ children, delay = 0, direction = "up" }) {
  // Define starting positions based on the direction we want it to slide from
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }, // Just a pure fade, no movement
  };

  return (
    <motion.div
      // 1. Initial state (invisible and offset)
      initial={{ opacity: 0, ...directions[direction] }}
      // 2. Animate to (fully visible and at original position)
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      // 3. Viewport settings: 'once: true' means it won't hide again if you scroll up
      // margin: "-100px" means it waits until it is 100px inside the screen before animating
      viewport={{ once: true, margin: "-100px" }}
      // 4. Timing
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}