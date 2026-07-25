import "./BackgroundEffects.css";

const particles = Array.from({ length: 160 });

export default function BackgroundEffects() {
  return (
    <>

      <div className="bg-gradient"></div>

      <div className="spotlight"></div>

      <div className="fog fog1"></div>
      <div className="fog fog2"></div>

      <div className="particles">

        {particles.map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              transform: `scale(${0.3 + Math.random()})`
            }}
          />
        ))}

      </div>

    </>
  );
}