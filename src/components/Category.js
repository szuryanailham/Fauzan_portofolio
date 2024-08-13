import { About_two } from "../constant/index";
import React from "react";

const Category = () => {
  return (
    <>
      <div id="Category" className="w-full h-fit flex flex-col md:flex-row-reverse mt-10">
        <div className="w-full md:full p-5">
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md text-end md:text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-end md:text-center">Category</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed p-3">{About_two}</p>
          </div>
        </div>
      </div>
      {/* Carousel Image */}
    </>
  );
};

export default Category;
