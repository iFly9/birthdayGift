import { motion } from "framer-motion";

export default function GrandPiano() {
  return (
    <motion.div
      className="grand-piano"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
    viewBox="0 0 1100 650"  preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
>
        <defs>

          {/* Piano Body */}

          <linearGradient id="bodyGradient" x1="0" y1="0" x2="1" y2="1">

            <stop offset="0%" stopColor="#222"/>

            <stop offset="30%" stopColor="#111"/>

            <stop offset="70%" stopColor="#080808"/>

            <stop offset="100%" stopColor="#000"/>

          </linearGradient>

          {/* Gold */}

          <linearGradient id="goldGradient">

            <stop offset="0%" stopColor="#ffe7a3"/>

            <stop offset="40%" stopColor="#e6c56d"/>

            <stop offset="100%" stopColor="#8c6612"/>

          </linearGradient>

          {/* Keyboard */}

          <linearGradient id="keyGradient">

            <stop offset="0%" stopColor="#ffffff"/>

            <stop offset="100%" stopColor="#dddddd"/>

          </linearGradient>

          {/* Piano Gloss */}

          <linearGradient id="glossGradient" x1="0" y1="0" x2="0" y2="1">

            <stop offset="0%" stopColor="rgba(255,255,255,.25)"/>

            <stop offset="100%" stopColor="rgba(255,255,255,0)"/>

          </linearGradient>

          <filter id="shadow">

            <feGaussianBlur stdDeviation="12"/>

          </filter>

        </defs>

        {/* ===========================
            SHADOW
        =========================== */}
        <g transform="translate(-20,0)"></g>
        <ellipse
          cx="500"
          cy="570"
          rx="250"
          ry="35"
          fill="#000"
          opacity=".35"
          filter="url(#shadow)"
        />

        {/* ===========================
            GRAND PIANO BODY
        =========================== */}

        <path
          d="
          M220 170

          Q250 70 420 60

          L640 60

          Q860 70 900 220

          Q920 300 900 360

          Q880 470 760 500

          L340 500

          Q210 500 190 360

          Z
          "
          fill="url(#bodyGradient)"
        />

        {/* ===========================
            OPEN LID
        =========================== */}

        <path
          d="
          M300 170

          Q520 -10 760 70

          L830 185

          Q620 130 310 205

          Z
          "
          fill="url(#bodyGradient)"
        />

        {/* Lid Highlight */}

        <path
          d="
          M340 150

          Q520 35 720 90
          "
          stroke="rgba(255,255,255,.12)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* ===========================
            KEYBOARD BASE
        =========================== */}

        <rect
          x="300"
          y="300"
          width="430"
          height="90"
          rx="4"
          fill="#111"
        />

        <rect
          x="315"
          y="315"
          width="400"
          height="62"
          fill="url(#keyGradient)"
        />

        {/* Keyboard Border */}

        <rect
          x="300"
          y="300"
          width="430"
          height="90"
          rx="4"
          fill="none"
          stroke="#444"
          strokeWidth="2"
        />

        {/* ===========================
            GLOSS
        =========================== */}

        <path
          d="
          M280 170

          Q500 110 770 220
          "
          stroke="rgba(255,255,255,.10)"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="
          M260 210

          Q470 170 720 250
          "
          stroke="rgba(255,255,255,.05)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />

               {/* ===========================
            WHITE KEYS
        =========================== */}

        {Array.from({ length: 26 }).map((_, i) => (
          <rect
            key={`white-${i}`}
            x={318 + i * 15}
            y="315"
            width="14"
            height="62"
            fill="#fafafa"
            stroke="#cfcfcf"
            strokeWidth="0.6"
          />
        ))}

        {/* ===========================
            BLACK KEYS
        =========================== */}

        {[0,1,3,4,5,7,8,10,11,12,14,15,17,18,19,21,22,24].map((n) => (
          <rect
            key={`black-${n}`}
            x={329 + n * 15}
            y="315"
            width="9"
            height="38"
            rx="2"
            fill="#111"
          />
        ))}

        {/* ===========================
            GOLD STRIP ABOVE KEYS
        =========================== */}

        <rect
          x="300"
          y="294"
          width="430"
          height="4"
          fill="url(#goldGradient)"
        />

        {/* ===========================
            LEGS
        =========================== */}

        {/* Left */}
        <path
          d="
            M315 500
            L295 575
            L315 575
            L335 500
          "
          fill="url(#bodyGradient)"
        />

        {/* Middle */}
        <path
          d="
            M520 500
            L505 585
            L525 585
            L540 500
          "
          fill="url(#bodyGradient)"
        />

        {/* Right */}
        <path
          d="
            M735 500
            L715 575
            L735 575
            L755 500
          "
          fill="url(#bodyGradient)"
        />

        {/* ===========================
            PEDALS
        =========================== */}

        <rect
          x="505"
          y="560"
          width="6"
          height="22"
          rx="2"
          fill="url(#goldGradient)"
        />

        <rect
          x="520"
          y="560"
          width="6"
          height="22"
          rx="2"
          fill="url(#goldGradient)"
        />

        <rect
          x="535"
          y="560"
          width="6"
          height="22"
          rx="2"
          fill="url(#goldGradient)"
        />

        {/* ===========================
            GOLD RIM
        =========================== */}

        <path
          d="
          M220 170
          Q250 70 420 60
          L640 60
          Q860 70 900 220
          "
          stroke="url(#goldGradient)"
          strokeWidth="3"
          fill="none"
        />

        {/* ===========================
            MUSIC STAND
        =========================== */}

        <rect
          x="610"
          y="150"
          width="10"
          height="110"
          fill="#111"
        />

        {/* ===========================
            FRONT LOGO
        =========================== */}

        <text
          x="515"
          y="285"
          textAnchor="middle"
          fill="#d4af37"
          fontSize="18"
          fontFamily="serif"
          letterSpacing="3"
        >
          MELODY
        </text>

      </svg>
    </motion.div>
  );
}