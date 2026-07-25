import { motion } from "framer-motion";
import "./BirthdayLetter.css";

export default function BirthdayLetter({ onContinue })  {
  return (
    <motion.section
      className="letter-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Spotlight */}
      <div className="spotlight"></div>

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Letter */}

      <motion.div
        className="birthday-letter"
        initial={{
          opacity: 0,
          y: 100,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.6,
          delay: .5,
        }}
      >
        <div className="paper-texture"></div>
         <div className="paper-seal">
    🎼
  </div>

        <div className="watermark">🎹</div>

        <h1>Happy Birthday</h1>

        <div className="divider"></div>

        <p className="greeting">
          Dear My Best Friend,
        </p>

        <p>
          Today is not simply another birthday.
          It is a celebration of every melody you've shared
          with the world.
        </p>

        <p>
          Every key you've touched,
          every note you've played,
          and every smile you've created
          has become a memory that no one can replace.
        </p>

        <p>
          Thank you for inspiring everyone around you,
          not only through music,
          but through your kindness,
          patience and beautiful soul.
        </p>

        <p>
          May your life always be filled with
          happiness,
          health,
          love,
          and countless beautiful melodies.
        </p>

        <div className="signature">
          With Love,
          <br />
          <span>❤️ Kausalya</span>
        </div>

       <motion.button
    className="continue-btn"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: .95 }}
    onClick={onContinue}
>
          Continue The Journey →
        </motion.button>

      </motion.div>
    </motion.section>
  );
}