import { useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

import CinematicBackground from "../CinematicBackground/CinematicBackground";
import FallingPhotos from "./FallingPhotos";
import MemoryCard from "./MemoryCard";
import Feedback from "../Feedback/Feedback";


export default function Gallery({
  audioRef,
  onFeedback
}) {

  const [selectedMemory, setSelectedMemory] = useState(null);


const [showFeedbackBtn, setShowFeedbackBtn] = useState(false);
const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleClose = () => {

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setSelectedMemory(null);
  };

  return (
   <main
    className={`gallery-page ${
        showFeedbackModal ? "gallery-blur" : ""
    }`}
>

      <CinematicBackground
        showPiano={false}
        showEnvelope={false}
      />

      <div className="gallery-overlay"></div>

     {!showFeedbackModal && (
<motion.div
    className="gallery-center"
    animate={{
        filter: selectedMemory ? "blur(5px)" : "blur(0px)",
        opacity: selectedMemory ? .25 : 1
    }}
>
    <div className="heart">❤️</div>

    <h1>
        Every Memory
        <br />
        Has A Melody
    </h1>

    <p>CLICK ANY MEMORY</p>

</motion.div>
)}

     <FallingPhotos
    audioRef={audioRef}
    onPhotoClick={setSelectedMemory}
    onAnimationFinished={() => {
       console.log("ALL PHOTOS FINISHED");
        setShowFeedbackBtn(true);
    }}
/>

      <MemoryCard
        memory={selectedMemory}
        onClose={handleClose}
      />
    {/* <MemoryCard
    memory={selectedMemory}
    onClose={() => setSelectedMemory(null)}
/> */}

{showFeedbackBtn && !showFeedbackModal &&  (
    <motion.div
        className="feedback-btn-wrapper"
        initial={{
            opacity: 0,
            y: 60,
        }}
        animate={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: .8,
        }}
    >
       <button
    className="feedback-btn"
   onClick={() => {
    setShowFeedbackModal(true);
}}
>
    💌 I'd Love To Hear Your Feedback
</button>
    </motion.div>
)}

  

  <Feedback
    open={showFeedbackModal}
    onClose={() => setShowFeedbackModal(false)}
/>

    </main>
    


    
  );
}