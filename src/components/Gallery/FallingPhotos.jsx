import { motion } from "framer-motion";
import "./FallingPhotos.css";
import { memories } from "./memory";

const positions = [
  { x: 8,  y: 12 },
  { x: 24, y: 46 },
  { x: 40, y: 12 },
  { x: 60, y: 12 },
  { x: 78, y: 36 },

  { x: 12, y: 70 },
  { x: 32, y: 64 },
  { x: 54, y: 64 },
  { x: 74, y: 58 },
  { x: 88, y: 72 }
];

export default function FallingPhotos({

    audioRef,
    onPhotoClick,
    paused,
    onAnimationFinished

}) {

    return (

        <>

            {memories.map((memory, index) => (

                <motion.div

                    key={memory.id}

                    className="memory-photo"

                    style={{
                        left: `${positions[index].x}%`,
                        top: `${positions[index].y}%`
                    }}

                    initial={{
                        y: -900,
                        opacity: 0,
                        scale: .8,
                        rotate: -25 + Math.random() * 50
                    }}

                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotate: -8 + Math.random() * 16
                    }}

                   transition={{
    delay: index * 0.25,
    duration: 1.2,
    type: "spring",
    bounce: 0.35,
}}

onAnimationComplete={() => {
    if (
        index === memories.length - 1 &&
        typeof onAnimationFinished === "function"
    ) {
        onAnimationFinished();
    }
}}

                    whileHover={{
                        scale: 1.08,
                        rotate: 0,
                        y: paused ? 0 : -10
                    }}

                    whileTap={{
                        scale: .92
                    }}

                    onClick={() => {

                        audioRef.current.pause();
                        audioRef.current.currentTime = 0;

                        audioRef.current.src = memory.song;
                        audioRef.current.loop = true;

                        audioRef.current.play();

                        onPhotoClick(memory);

                    }}

                >

                    <motion.img

                        src={memory.image}

                        alt=""

                        draggable="false"

                        animate={
                            paused
                                ? {}
                                : {
                                    y: [0, -8, 0]
                                }
                        }

                        transition={{
                            repeat: Infinity,
                            duration: 3 + index % 3,
                            ease: "easeInOut"
                        }}

                    />

                </motion.div>

            ))}

        </>

    );

}