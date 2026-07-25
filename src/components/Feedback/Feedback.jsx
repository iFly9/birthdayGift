import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  WhatsappShareButton,
  FacebookShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";

import {
  FaTimes,
  FaCopy
} from "react-icons/fa";

import "./Feedback.css";

export default function Feedback({

    open,
    onClose

}) {

    const WEBSITE = window.location.href;

    const [form, setForm] = useState({

        name: "",
        message: "",
        rating: 5

    });

    const [sending, setSending] = useState(false);

    const [sent, setSent] = useState(false);

    const handleChange = (e) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };

    const copyLink = () => {

        navigator.clipboard.writeText(WEBSITE);

        alert("Link copied ❤️");

    };

    const sendFeedback = (e) => {

        e.preventDefault();

        setSending(true);

        emailjs.send(

            "service_lxwjsuv",
            "template_oon5dlq",

            {

                name: form.name,
                message: form.message,
                rating: form.rating

            },

            "J-Ef5hH7SPd4Gmoy_"

        )

        .then(() => {

setSending(false);

setSent(true);

setForm({
    name:"",
    message:"",
    rating:5
});

})

      .catch((err)=>{

console.error(err);

alert("Couldn't send feedback.");

setSending(false);

});

    };

    return (

        <AnimatePresence>

            {

                open && (

                    <motion.div

                        className="feedback-overlay"

                        initial={{opacity:0}}

                        animate={{opacity:1}}

                        exit={{opacity:0}}

                    >

                        {/* Blur Background */}

                        <div

                            className="feedback-backdrop"

                            onClick={onClose}

                        />

                        <motion.div

                            className="feedback-modal"

                            initial={{

                                opacity:0,

                                y:-250,

                                scale:.7,

                                rotateX:-30

                            }}

                            animate={{

                                opacity:1,

                                y:0,

                                scale:1,

                                rotateX:0

                            }}

                            exit={{

                                opacity:0,

                                y:-250,

                                scale:.8

                            }}

                            transition={{

                                duration:.7,

                                type:"spring",

                                bounce:.35

                            }}

                        >

                            <button

                                className="close-modal"

                                onClick={onClose}

                            >

                                <FaTimes/>

                            </button>

                            <motion.div

                                className="floating-wrapper"

                                animate={{

                                    y:[0,-8,0]

                                }}

                                transition={{

                                    repeat:Infinity,

                                    duration:4,

                                    ease:"easeInOut"

                                }}

                            >

                                <h1>

                                    ❤️ Loved This Surprise?

                                </h1>

                                <p>

                                    Your words would truly mean a lot.

                                </p>

                                {

                                    sent ?

                                    (

                                        <div className="feedback-success">

                                            ❤️ Thank You ❤️

                                            <br/>

                                            Your feedback has been sent.

                                        </div>

                                    )

                                    :

                                    (

                                        <form onSubmit={sendFeedback}>

                                            <input

                                                name="name"

                                                placeholder="Your Name"

                                                value={form.name}

                                                onChange={handleChange}

                                                required

                                            />

                                            <textarea

                                                rows="6"

                                                name="message"

                                                placeholder="Write your beautiful message..."

                                                value={form.message}

                                                onChange={handleChange}

                                                required

                                            />

                                            <select

                                                name="rating"

                                                value={form.rating}

                                                onChange={handleChange}

                                            >

                                                <option value="5">⭐⭐⭐⭐⭐</option>

                                                <option value="4">⭐⭐⭐⭐</option>

                                                <option value="3">⭐⭐⭐</option>

                                                <option value="2">⭐⭐</option>

                                                <option value="1">⭐</option>

                                            </select>

                                            <button

                                                className="send-btn"

                                                disabled={sending}

                                            >

                                                {

                                                    sending ?

                                                    "Sending..."

                                                    :

                                                    "Send With ❤️"

                                                }

                                            </button>

                                        </form>

                                    )

                                }

                                <div className="share-title">

                                    Share This Surprise

                                </div>

                                <div className="share-icons">

                                    <WhatsappShareButton url={WEBSITE}>

                                        <WhatsappIcon round size={52}/>

                                    </WhatsappShareButton>

                                    <FacebookShareButton url={WEBSITE}>

                                        <FacebookIcon round size={52}/>

                                    </FacebookShareButton>

                                    <button

                                        className="copy-link"

                                        onClick={copyLink}

                                    >

                                        <FaCopy/>

                                    </button>

                                </div>

                            </motion.div>

                        </motion.div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}