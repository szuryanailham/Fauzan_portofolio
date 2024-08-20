import { motion } from "framer-motion";
import { about, about_two } from "../assets/utils/index";
import { textAbout } from "../constant/index";
import React from "react";
const About = () => {
  return (
    <div id="About" className="mt-10">
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 1.5 },
        }}
        className="mb-2"
      >
        <img width={150} height={100} src={about} alt="about one" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 2 },
        }}
        className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md md:text-center"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-md text-gray-900 leading-relaxed p-3">{textAbout}</p>
      </motion.div>
      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 2.5 },
        }}
        className="w-full flex justify-end mt-5"
      >
        <img src={about_two} alt="about two" width={200} height={200} />
      </motion.div>
    </div>
  );
};

export default About;
