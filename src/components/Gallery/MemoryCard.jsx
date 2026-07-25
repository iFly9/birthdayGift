import { motion, AnimatePresence } from "framer-motion";
import "./MemoryCard.css";

export default function MemoryCard({

    memory,
    onClose

}) {

    return (

        <AnimatePresence>

            {memory && (

                <motion.div

                    className="memory-overlay"

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    exit={{ opacity: 0 }}

                >

                    <motion.div

                        className="memory-card"

                        initial={{
                            y: -150,
                            scale: .4,
                            rotate: -15,
                            opacity: 0
                        }}

                        animate={{
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            opacity: 1
                        }}

                        exit={{
                            scale: .8,
                            opacity: 0
                        }}

                        transition={{
                            type: "spring",
                            stiffness: 120
                        }}

                    >

                        <button

                            className="close-btn"

                            onClick={onClose}

                        >

                            ✕

                        </button>

                        <div className="memory-left">

                            <img

                                src={memory.image}

                                alt=""

                            />

                        </div>

                        <div className="sticky-note">

                            

                            <h2>{memory.title}</h2>

                            <p>{memory.note}</p>

                            <span>

                                ❤️ Kausalya

                            </span>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );

}