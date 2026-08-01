import { motion } from "framer-motion";
import "./FallingPhotos.css";
import { memories } from "./memory";
import { useEffect } from "react";


// ==========================================================
// PHOTO POSITIONS
// ==========================================================

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


// ==========================================================
// FALLING PHOTOS
// ==========================================================

export default function FallingPhotos({

    audioRef,
    onPhotoClick,
    paused,
    onAnimationFinished

}) {


    // ======================================================
    // PRELOAD MEMORY IMAGES
    // ======================================================

    useEffect(() => {

        memories.forEach((memory) => {

            const img = new Image();

            img.src = memory.image;

            // Ask browser to decode image before displaying
            if (img.decode) {

                img.decode().catch(() => {});

            }

        });

    }, []);


    // ======================================================
    // RENDER
    // ======================================================

    return (

        <div className="falling-photos-container">

            {

                memories.map((memory, index) => {

                    const position =
                        positions[index % positions.length];


                    return (

                        <motion.div

                            key={memory.id}

                            className="memory-photo"

                            style={{
                                "--photo-x": `${position.x}%`,
                                "--photo-y": `${position.y}%`
                            }}


                            // ==================================
                            // FALL-IN ANIMATION
                            // ==================================

                            initial={{
                                y: -900,
                                opacity: 0,
                                scale: 0.8,
                                rotate:
                                    -25 +
                                    Math.random() * 50
                            }}


                            animate={{
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                rotate:
                                    -8 +
                                    Math.random() * 16
                            }}


                            transition={{
                                delay: index * 0.25,
                                duration: 1.2,
                                type: "spring",
                                bounce: 0.35
                            }}


                            // ==================================
                            // LAST PHOTO FINISHED
                            // ==================================

                            onAnimationComplete={() => {

                                if (

                                    index ===
                                    memories.length - 1 &&

                                    typeof onAnimationFinished ===
                                    "function"

                                ) {

                                    onAnimationFinished();

                                }

                            }}


                            // ==================================
                            // HOVER
                            // ==================================

                            whileHover={{

                                scale: 1.08,

                                rotate: 0,

                                y:
                                    paused
                                        ? 0
                                        : -10

                            }}


                            // ==================================
                            // MOBILE TAP
                            // ==================================

                            whileTap={{

                                scale: 0.94

                            }}


                            // ==================================
                            // PHOTO CLICK
                            // ==================================

                            onClick={() => {

                                if (audioRef.current) {

                                    audioRef.current.pause();

                                    audioRef.current.currentTime = 0;

                                    audioRef.current.src =
                                        memory.song;

                                    audioRef.current.loop = true;

                                    audioRef.current
                                        .play()
                                        .catch((err) => {

                                            console.log(
                                                "Memory audio play error:",
                                                err
                                            );

                                        });

                                }


                                onPhotoClick(memory);

                            }}

                        >


                            {/* ==================================
                                MEMORY IMAGE
                            ================================== */}

                            <motion.img

                                src={memory.image}

                                alt={
                                    memory.title ||
                                    "Memory"
                                }

                                draggable="false"

                                decoding="async"

                                loading="eager"


                                // ==================================
                                // FLOATING ANIMATION
                                // ==================================

                                animate={

                                    paused

                                        ? {}

                                        : {

                                            y: [
                                                0,
                                                -8,
                                                0
                                            ]

                                        }

                                }


                                transition={{

                                    repeat: Infinity,

                                    duration:
                                        3 +
                                        (index % 3),

                                    ease:
                                        "easeInOut"

                                }}

                            />

                        </motion.div>

                    );

                })

            }

        </div>

    );

}