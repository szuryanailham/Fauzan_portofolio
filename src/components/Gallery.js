import React from "react";
import { Gallerytext } from "../constant/index";
import { wedding1, wedding2, wedding3, sport1, sport2, sport3, wisuda1, wisuda2, wisuda3, wisuda4, wisuda5, wisuda6, shoot1, shoot2, shoot3, shoot4, shoot5, shoot6 } from "../assets/utils";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Images = [wedding1, wedding2, wedding3, sport1, sport2, sport3, wisuda1, wisuda2, wisuda3, wisuda4, wisuda5, wisuda6, shoot1, shoot2, shoot3, shoot4, shoot5, shoot6];
const Gallery = () => {
  return (
    <div id="Gallery">
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-md text-center mx-auto mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 2.5 },
          }}
          className="text-xl text-gray-900 leading-relaxed p-3"
        >
          {Gallerytext}
        </motion.p>
      </div>
      {/*  video fram */}
      <div className="">
        <div variants={container} className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3">
          {Images.map((image, index) => (
            <motion.div key={index}>
              <img variants={item} className="h-auto max-w-full rounded-lg" src={image} alt={`Gallery  ${index + 1}dfdf`} />
            </motion.div>
          ))}
        </div>
      </div>
      {/* and video frame */}
    </div>
  );
};

export default Gallery;
