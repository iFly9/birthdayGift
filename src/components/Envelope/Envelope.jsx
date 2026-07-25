import { motion } from "framer-motion";
import "./Envelope.css";

export default function Envelope({ onOpen }) {
  const handleClick = () => {
    console.log("📩 Envelope Clicked");

    // if (typeof onOpen === "function") {
    //   onOpen();
    // } else {
    //   console.error("onOpen is not a function", onOpen);
    // }

  setTimeout(() => {
    onOpen();
  }, 1000);
  };

  return (
    <motion.div
      className="envelope-wrapper"
      initial={{ opacity: 0, y: -120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
    >
      <motion.div
        className="envelope"
        animate={{
          y: [0, -6, 0],
          rotate: [-6, -5, -6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
          rotate: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={handleClick}
      >
        {/* Back */}
        <div className="env-back"></div>

        {/* Letter */}
        <div className="letter">
          <span>♪</span>
        </div>

        {/* Left Fold */}
        <div className="fold-left"></div>

        {/* Right Fold */}
        <div className="fold-right"></div>

        {/* Top Flap */}
        <div className="top-flap"></div>

        {/* Seal */}
        <div className="seal">♫</div>
      </motion.div>

      <motion.p
        className="click-text"
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        Click to Open
      </motion.p>
    </motion.div>
  );
}
