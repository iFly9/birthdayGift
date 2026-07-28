import { useState } from "react";
 import "./Scrapbook.css";
 import CinematicBackground from "../CinematicBackground/CinematicBackground";
 import MusicPlayer from "../MusicPlayer/MusicPlayer";

function Scrapbook({ onComplete }) {

  const [opening, setOpening] = useState(false);

  const handleEnvelopeClick = () => {

    if (opening) return;

    setOpening(true);

    // Later we'll add envelope opening animation here
    setTimeout(() => {

      onComplete();

    }, 1500);

  };

  return (
    <section className="scrapbook-screen">
      
      <CinematicBackground
        onEnvelopeClick={handleEnvelopeClick}
      />

    </section>
  );
}

export default Scrapbook;
