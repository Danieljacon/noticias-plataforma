import { motion } from "framer-motion";
import { AnimatedNewContentProps } from "./types" 

const animations = {
  initial: { opacity: 0, y: -50},
  animate: { opacity: 1, y: 0},
  exit: { opacity: 0, y: 50},
};

const AnimatedNewContent = (props: AnimatedNewContentProps) => {
  return (
    <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
    >
      <div>{props.children}</div>
    </motion.div>
  );
};

export default AnimatedNewContent;
