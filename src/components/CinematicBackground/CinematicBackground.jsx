import "./CinematicBackground.css";
import GrandPiano from "../GrandPiano/GrandPiano";
import Envelope from "../Envelope/Envelope";
import desktopPiano from "../../assets/images/desktopPiano.png";
import mobilePiano from "../../assets/images/mobilePiano.png";
const particles = Array.from({ length: 150 });

function CinematicBackground({
  onEnvelopeClick,
  showPiano = true,
  showEnvelope = true,
  showReflection = true,
  showShadow = true,
}) {
  return (
    <div className="cinematic-bg">

      {/* =======================
          Stars
      ======================== */}
      <div className="stars"></div>

      {/* =======================
          Center Glow
      ======================== */}
      <div className="center-glow"></div>

      {/* =======================
          Stage Lights
      ======================== */}
      <div className="stage-lights">

        <div className="lamp lamp-left"></div>
        <div className="lamp lamp-center"></div>
        <div className="lamp lamp-right"></div>

        <div className="light left-light"></div>
        <div className="light center-light"></div>
        <div className="light right-light"></div>

      </div>

      {/* =======================
          Floating Dust
      ======================== */}
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

      {/* =======================
          Fog Layers
      ======================== */}
      <div className="fog fog1"></div>
      <div className="fog fog2"></div>
      <div className="fog fog3"></div>

      {/* =======================
          Piano Ambient Glow
      ======================== */}
      <div className="piano-glow"></div>

      {/* =======================
          Piano Section
      ======================== */}
     {/* =======================
      Piano Section
======================= */}

{showPiano && (

    <div className="piano-area">

        <div className="piano-wrapper">

            <picture>

                {/* Mobile */}

                <source
                    media="(max-width:768px)"
                    srcSet={mobilePiano}
                />

                {/* Desktop */}

                <img
                    src={desktopPiano}
                    alt="Grand Piano"
                    className="piano-image"
                    draggable="false"
                />

            </picture>

            <div className="interactive-layer">

       {showEnvelope && (



                <div className="envelope-layer">



                    <Envelope

                        onOpen={onEnvelopeClick}

                    />



                </div>



            )}    </div>

        </div>

    </div>

)}

      {/* =======================
          Stage Reflection
      ======================== */}
      {showReflection && (
        <div className="stage-reflection"></div>
      )}

      {/* =======================
          Stage Shadow
      ======================== */}
      {showShadow && (
        <div className="stage-shadow"></div>
      )}

      {/* =======================
          Stage Floor
      ======================== */}
      <div className="stage-floor"></div>

    </div>
  );
}

export default CinematicBackground;