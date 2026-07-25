import { motion } from "framer-motion";
import "./Home.css";

import CinematicBackground from "../CinematicBackground/CinematicBackground";
import FallingMusic from "../FallingMusic/FallingMusic";
import BirthdayLetter from "../BirthdayLetter/BirthdayLetter";

export default function Home({ onContinue })  {
  return (
    <main className="birthday-page">

      {/* Background */}
      <CinematicBackground
        showPiano={false}
        showEnvelope={false}
        showReflection={false}
        showShadow={false}
      />

      {/* Overlay */}
      <div className="birthday-overlay"></div>

      {/* Music */}
      <FallingMusic />

      {/* Letter */}
      <motion.div
        className="letter-wrapper"
        initial={{
          opacity: 0,
          scale: .85,
          y: 60,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
      >
       <BirthdayLetter onContinue={onContinue} />
      </motion.div>

    </main>
  );
}