import React from "react";
import { Gallerytext } from "../constant/index";
import { wedding1, wedding2, wedding3, sport1, sport2, sport3, wisuda1, wisuda2, wisuda3, wisuda4, wisuda5, wisuda6 } from "../assets/utils";

const Images = [wedding1, wedding2, wedding3, sport1, sport2, sport3, wisuda1, wisuda2, wisuda3, wisuda4, wisuda5, wisuda6];
const Gallery = () => {
  return (
    <div id="Gallery">
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-md text-center mx-auto mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Gallery</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed p-3">{Gallerytext}</p>
      </div>
      {/*  video fram */}
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-3">
          {Images.map((image, index) => (
            <div key={index}>
              <img className="h-auto max-w-full rounded-lg" src={image} alt={`Gallery  ${index + 1}dfdf`} />
            </div>
          ))}
        </div>
      </div>
      {/* and video frame */}
    </div>
  );
};

export default Gallery;
