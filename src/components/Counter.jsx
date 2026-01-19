import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Counter Component
 * -----------------
 * Animates number from 0 → value
 * - Triggers when component comes into view
 * - Replays animation on hover
 */
const Counter = ({ value, duration = 1.2 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true });

  // Animate when in view
  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, value, duration]);

  // Re-animate on hover
  const replay = () => {
    motionValue.set(0);
    animate(motionValue, value, {
      duration: 1,
      ease: "easeOut",
    });
  };

  return (
    <motion.span ref={ref} onHoverStart={replay}>
      {motionValue}
    </motion.span>
  );
};

export default Counter;
