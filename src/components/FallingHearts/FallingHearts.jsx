import "./FallingHearts.css";

const colors = [
  "#ff4d6d", // red
  "#ffffff", // white
  "#FFD700", // gold
  "#FFF176", // yellow
];

const hearts = Array.from({ length: 140 });

export default function FallingHearts() {
  return (
    <div className="hearts-container">
      {hearts.map((_, index) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 8 + Math.random() * 10;
        const size = 12 + Math.random() * 18;
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <span
            key={index}
            className="heart"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`,
              color,
            }}
          >
            ❤
          </span>
        );
      })}
    </div>
  );
}