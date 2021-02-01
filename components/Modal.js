import { motion, AnimatePresence } from "framer-motion";
const backdrop = {
  visibile: { opacity: 1 },
  hidden: { opacity: 0 },
};
export default function Modal({ showModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="bg-green-600 fixed top-0 left-0 h-screen w-full z-50"
          animate="visible"
          variants={backdrop}
          initial="hidden"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}
