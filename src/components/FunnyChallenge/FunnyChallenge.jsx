import { useState } from "react";
import { motion } from "framer-motion";
import "./FunnyChallenge.css";

export default function FunnyChallenge({ onComplete }) {

  const [reply, setReply] = useState("");
  const [yesScale, setYesScale] = useState(1);
  const [jumpCount, setJumpCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const [noVisible, setNoVisible] = useState(true);

  const [noPos, setNoPos] = useState({
    x: 0,
    y: 0
  });

  /* ==========================================
     PARTICLES
  ========================================== */

  const [particles] = useState(
    Array.from({ length: 80 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: 2 + Math.random() * 5,
      duration: 5 + Math.random() * 8
    }))
  );

  const notes = [
    "♪",
    "♫",
    "♩",
    "♬",
    "♪",
    "♫"
  ];

  /* ==========================================
     RANDOM
  ========================================== */

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  /* ==========================================
     SAFE NO BUTTON MOVEMENT
  ========================================== */

  const moveNo = () => {

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    /*
      Keep the NO button safely inside the viewport.

      We intentionally leave space around the edges so
      the button never touches the browser boundary.
    */

    const horizontalPadding = Math.max(
      20,
      Math.min(40, screenWidth * 0.06)
    );

    const verticalPadding = Math.max(
      30,
      Math.min(70, screenHeight * 0.08)
    );

    /*
      Responsive approximation of button size.
      Matches the CSS clamp sizing below.
    */

    const buttonWidth = Math.min(
      260,
      Math.max(150, screenWidth * 0.72)
    );

    const buttonHeight = 62;

    /*
      Maximum safe movement.
    */

    const maxX = Math.max(
      35,
      screenWidth / 2 -
      buttonWidth / 2 -
      horizontalPadding
    );

    const maxY = Math.max(
      35,
      screenHeight / 2 -
      buttonHeight / 2 -
      verticalPadding
    );

    /* ==========================================
       FINAL ESCAPE
    ========================================== */

    if (jumpCount >= 9) {

      setNoPos({
        x: random(
          -maxX,
          maxX
        ),
        y: random(
          -maxY,
          maxY
        )
      });

      setJumpCount(prev => prev + 1);

      setTimeout(() => {

        setNoVisible(false);

        setYesScale(1.3);

        setReply("");

      }, 500);

      return;
    }

    /* ==========================================
       NORMAL ESCAPE
    ========================================== */

    const x = random(
      -maxX,
      maxX
    );

    const y = random(
      -maxY,
      maxY
    );

    setNoPos({
      x,
      y
    });

    setJumpCount(prev => prev + 1);

    setYesScale(prev =>
      Math.min(prev + 0.08, 1.55)
    );

    const replies = [
      "😂 Nice try!",
      "Too slow 😎",
      "Catch me if you can!",
      "I'm too fast 🤭",
      "Almost caught me!",
      "NO is running away 😂"
    ];

    setReply(
      replies[
        Math.floor(
          Math.random() * replies.length
        )
      ]
    );
  };

  /* ==========================================
     YES
  ========================================== */

  const handleYes = () => {

    setSuccess(true);

    setReply("success");

    setTimeout(() => {
      onComplete();
    }, 1800);
  };

  return (

    <div className="challenge-scene">

      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="gold-glow"></div>

      {/* ======================================
          PARTICLES
      ====================================== */}

      <div className="particles">

        {particles.map((p, i) => (

          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />

        ))}

      </div>

      {/* ======================================
          FLOATING MUSIC NOTES
      ====================================== */}

      <div className="music-notes">

        {notes.map((note, i) => (

          <motion.span
            key={i}
            className="music-note"

            animate={{
              y: [0, -120],
              opacity: [0, 1, 0],
              rotate: [0, 20, -20]
            }}

            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.8
            }}
          >
            {note}
          </motion.span>

        ))}

      </div>

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <motion.div
        className="challenge-content"

        initial={{
          opacity: 0,
          y: 50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1,
          type: "spring"
        }}
      >

        {/* ==================================
            QUESTION
        ================================== */}

        <h2 className="question">

          Before unlocking your surprise...

          <br />

          Do you agree that you are

          <br />

          <span>
            Idiot? 😂❤️
          </span>

        </h2>

        {/* ==================================
            HINT
        ================================== */}

        <p className="hint">

          Think carefully...

          <br />

          There is only one correct answer 😌

        </p>

        {/* ==================================
            PROGRESS
        ================================== */}

        <div className="journey">

          {Array.from({ length: 10 }).map((_, i) => (

            <span
              key={i}
              className={
                i < jumpCount
                  ? "journey-dot active"
                  : "journey-dot"
              }
            />

          ))}

        </div>

        {/* ==================================
            REPLY
        ================================== */}

        <motion.div
          key={reply}
          className="funny-reply"

          initial={{
            opacity: 0,
            scale: 0.8
          }}

          animate={{
            opacity: 1,
            scale: 1
          }}
        >
          {reply}
        </motion.div>

        {/* ==================================
            ANSWERS
        ================================== */}

        <div className="answer-zone">

          {/* YES */}

          <motion.button
            className="magic-yes"

            animate={{
              scale: yesScale,

              boxShadow: [
                "0 0 20px rgba(255,215,100,.4)",
                "0 0 45px rgba(255,215,100,.9)",
                "0 0 20px rgba(255,215,100,.4)"
              ]
            }}

            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity
              },

              scale: {
                type: "spring",
                stiffness: 200
              }
            }}

            onClick={handleYes}
          >
            YES ❤️
          </motion.button>

          {/* NO */}

          {noVisible && (

            <motion.div
              className="escape-container"

              animate={{
                x: noPos.x,
                y: noPos.y
              }}

              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20
              }}
            >

              <motion.button
                className="funny-no"

                whileHover={{
                  rotate: -10,
                  scale: 1.08
                }}

                onMouseEnter={moveNo}
                onTouchStart={moveNo}
                onClick={moveNo}
              >
                NO 🙈
              </motion.button>

            </motion.div>

          )}

        </div>

        {/* ==================================
            PIANO
        ================================== */}

        <motion.div
          className="piano-stage"

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 1
          }}
        >

          <div className="piano-light"></div>

          <div className="mini-piano">

            <div className="black-keys">

              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}></span>
              ))}

            </div>

            <div className="white-keys">

              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i}></span>
              ))}

            </div>

          </div>

          <motion.div
            className="piano-caption"

            animate={{
              opacity: [.5, 1, .5]
            }}

            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            🎹 A Little Surprise Awaits...
          </motion.div>

        </motion.div>

        {/* ==================================
            GOLD WAVE
        ================================== */}

        <div className="gold-wave">

          <span></span>
          <span></span>
          <span></span>

        </div>

      </motion.div>

      {/* ======================================
          SUCCESS SCREEN
      ====================================== */}

      {success && (

        <motion.div
          className="success-screen"

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            duration: .5
          }}
        >

          {/* CONFETTI */}

          {Array.from({ length: 120 }).map((_, i) => (

            <motion.span
              key={i}
              className="celebration-piece"

              style={{
                left: `${Math.random() * 100}%`
              }}

              initial={{
                y: -100,
                opacity: 1,
                rotate: 0
              }}

              animate={{
                y: window.innerHeight + 300,
                rotate: Math.random() * 1000,
                x: (Math.random() - .5) * 500,
                opacity: 0
              }}

              transition={{
                duration: 2 + Math.random() * 2,
                ease: "easeOut"
              }}
            />

          ))}

          {/* GIFT */}

          <motion.div
            className="surprise-gift"

            initial={{
              scale: .3,
              rotate: -20,
              opacity: 0
            }}

            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1
            }}

            transition={{
              type: "spring",
              stiffness: 200
            }}
          >
            🎁
          </motion.div>

          <motion.h2
            initial={{
              y: 40,
              opacity: 0
            }}

            animate={{
              y: 0,
              opacity: 1
            }}

            transition={{
              delay: .5
            }}
          >
            Opening Your Surprise...
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              delay: 1
            }}
          >
            ❤️ Get ready for something special ❤️
          </motion.p>

        </motion.div>

      )}

    </div>
  );
}