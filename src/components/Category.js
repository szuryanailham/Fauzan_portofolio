import { motion } from "framer-motion";
import { About_two } from "../constant/index";
import React from "react";
const Category = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 2.5 },
        }}
        id="Category"
        className="w-full h-fit flex flex-col md:flex-row-reverse mt-10"
      >
        <div className="w-full md:full p-5">
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md text-end md:text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-end md:text-center">Category</h1>
            <p className="text-lg text-gray-900 leading-relaxed p-3">{About_two}</p>
          </div>
        </div>
      </motion.div>
      {/* Carousel Image */}
    </>
  );
};

export default Category;
