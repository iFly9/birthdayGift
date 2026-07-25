import "./FallingMusic.css";

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

const items = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  icon: icons[Math.floor(Math.random() * icons.length)],
  left: Math.random() * 100,
  size: 20 + Math.random() * 45,
  duration: 20 + Math.random() * 15,
  delay: Math.random() * 12,
  rotate: Math.random() * 360,
  opacity: 0.25 + Math.random() * 0.75,
}));

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
            opacity: item.opacity,
            transform: `rotate(${item.rotate}deg)`
          }}
        >
          {item.icon}
        </span>

      ))}

    </div>
  );
}