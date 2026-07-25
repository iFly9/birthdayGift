import { useRef, useState } from "react";
import Scrapbook from "./components/Scrapbook/Scrapbook";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Feedback from "./components/Feedback/Feedback";
import pianoMusic from "./assets/music/p5.mp3";
import FunnyChallenge from "./components/FunnyChallenge/FunnyChallenge";

function App() {

 const [scene, setScene] = useState("challenge");

  // One audio object for the entire app
  const audioRef = useRef(new Audio(pianoMusic));

  const handleEnvelopeOpen = () => {
    audioRef.current.src = pianoMusic;
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    audioRef.current.play().catch((err) => {
      console.log(err);
    });

    setScene("birthday");
  };

  const handleContinue = () => {

    // Stop intro piano music
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    setScene("gallery");
  };

  return (
    <>

      {
scene === "challenge" && (

<FunnyChallenge
    onComplete={() => setScene("intro")}
/>

)
}
      {scene === "intro" && (
        <Scrapbook onComplete={handleEnvelopeOpen} />
      )}

      {scene === "birthday" && (
        <Home
          onContinue={handleContinue}
        />
      )}

      {scene === "gallery" && (
    <Gallery
        audioRef={audioRef}
    />
)}
 {/* {scene === "feedback" && (
      <Feedback />
    )} */}
  
    </>
  );
}

export default App;