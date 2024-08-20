import { motion } from "framer-motion";
import React from "react";
const Footer = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 2.5 },
        }}
        className="bg-white dark:bg-gray-900 mt-10"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
          <h1 className="mb-4 text-3xl font-lexend font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white tracking-wider">“ Abadikan Setiap Moment “</h1>
          <p className="mb-8 text-md font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Abadikan setiap momen dengan tangkapan lensa yang memukau, menciptakan kenangan yang dapat dinikmati selamanya.</p>
        </div>
      </motion.section>
    </>
  );
};

export default Footer;
