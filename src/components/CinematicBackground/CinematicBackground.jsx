import "./CinematicBackground.css";
import GrandPiano from "../GrandPiano/GrandPiano";
import Envelope from "../Envelope/Envelope";

const particles = Array.from({ length: 70 });

function CinematicBackground({
    onEnvelopeClick,
    showPiano = true,
    showEnvelope = true,
    showReflection = true,
    showShadow = true,
}) {
  return (
    <div className="cinematic-bg">

      {/* Stars */}
      <div className="stars"></div>

      {/* Center Glow */}
      <div className="center-glow"></div>

      {/* Stage Lights */}
      <div className="stage-lights">

        <div className="lamp lamp-left"></div>
        <div className="lamp lamp-center"></div>
        <div className="lamp lamp-right"></div>

        <div className="light left-light"></div>
        <div className="light center-light"></div>
        <div className="light right-light"></div>

      </div>

      {/* Dust */}
      <div className="dust-container">
        {particles.map((_, i) => (
          <span
            key={i}
            className="dust"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
              transform: `scale(${0.4 + Math.random()})`,
            }}
          />
        ))}
      </div>

      {/* Fog */}
      <div className="fog fog1"></div>
      <div className="fog fog2"></div>
      <div className="fog fog3"></div>

      {/* Piano Glow */}
      <div className="piano-glow"></div>

      {/* Piano */}
      {showPiano && (
        <div className="piano-area">
          <GrandPiano />
        </div>
      )}

      {/* Envelope */}
      {showEnvelope && (
        <div className="envelope-layer">
          <Envelope onOpen={onEnvelopeClick} />
        </div>
      )}

      {/* Stage Reflection */}
     {showReflection && <div className="stage-reflection"></div>}

      {/* Stage */}
     {showShadow && <div className="stage-shadow"></div>}
      <div className="stage-floor"></div>

    </div>
  );
}

export default CinematicBackground;