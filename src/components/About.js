import { about, about_two } from "../assets/utils/index";
import { textAbout } from "../constant/index";
import React from "react";
const About = () => {
  return (
    <div id="About" className="mt-10">
      {/* Section 1 */}
      <div className="mb-2">
        <img width={150} height={100} src={about} alt="about one" />
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md md:text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
        <p className="text-md text-gray-900 dark:text-gray-300 leading-relaxed p-3">{textAbout}</p>
      </div>
      {/* Section 2 */}
      <div className="w-full flex justify-end mt-5">
        <img src={about_two} alt="about two" width={200} height={200} />
      </div>
    </div>
  );
};

export default About;
