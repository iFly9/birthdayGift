import "./FallingMusic.css";

/* ==========================================================
   MUSIC ICONS
========================================================== */

const icons = [
    "🎹",
    "🎻",
    "🎸",
    "🎷",
    "🎺",
    "🥁",
    "🎼",
    "🎵",
    "🎶",
    "🎤",
    "🎧",
    "📯"
];


/* ==========================================================
   FALLING MUSIC DATA
========================================================== */

/*
   Fewer items = less crowding.

   Each item gets:
   - Random horizontal starting position
   - Random size
   - Random falling speed
   - Random delay
   - Random opacity

   This makes the falling effect feel continuous
   instead of all instruments appearing together.
*/

const items = Array.from({ length: 28 }, (_, i) => ({

    id: i,

    icon:
        icons[
            Math.floor(
                Math.random() * icons.length
            )
        ],

    left:
        Math.random() * 100,

    size:
        24 + Math.random() * 35,

    duration:
        14 + Math.random() * 8,

    delay:
        Math.random() * 18,

    opacity:
        0.3 + Math.random() * 0.65

}));


/* ==========================================================
   COMPONENT
========================================================== */

export default function FallingMusic() {

    return (

        <div className="music-rain">

            {items.map((item) => (

                <span
                    key={item.id}
                    className="music-item"

                    style={{
                        left: `${item.left}%`,
                        fontSize: `${item.size}px`,
                        animationDuration: `${item.duration}s`,
                        animationDelay: `${item.delay}s`,
                        opacity: item.opacity
                    }}
                >
                    {item.icon}
                </span>

            ))}

        </div>

    );

}