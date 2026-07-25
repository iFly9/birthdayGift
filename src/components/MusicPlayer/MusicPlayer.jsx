import { useEffect, useRef } from "react";
import pianoMusic from "../../assets/music/p5.mp3";

export default function MusicPlayer() {

  const audioRef = useRef(null);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    audio.play().catch(() => {
      console.log("Autoplay blocked until user interaction.");
    });

  }, []);

  return (
    <audio
      ref={audioRef}
      src={pianoMusic}
      loop
      preload="auto"
    />
  );
}