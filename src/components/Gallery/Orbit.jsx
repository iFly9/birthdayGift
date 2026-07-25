import { motion } from "framer-motion";
import "./Orbit.css";

import img1 from "../../assets/images/groom.png";
import img2 from "../../assets/images/groom.png";
import img3 from "../../assets/images/groom.png";
import img4 from "../../assets/images/groom.png";
import img5 from "../../assets/images/groom.png";
import img6 from "../../assets/images/groom.png";
import img7 from "../../assets/images/groom.png";
import img8 from "../../assets/images/groom.png";
import img9 from "../../assets/images/groom.png";
import img10 from "../../assets/images/groom.png";

const photos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

export default function Orbit() {
  return (
   <div className="orbit">
    
      {photos.map((photo, index) => (
        <div
          key={index}
          className="orbit-arm"
          style={{
            transform: `rotate(${index * 36}deg)`,
          }}
        >
          <motion.img
            src={photo}
            className="orbit-photo"
            whileHover={{
              scale: 1.15,
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2 + index * 0.15,
              repeat: Infinity,
            }}
          />
        </div>
      ))}
    </div>
  );
}