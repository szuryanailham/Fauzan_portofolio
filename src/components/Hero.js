import Profile from "../assets/Images/profile_image.jpg";
import { tagTitle, Title } from "../constant/index";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import React from "react";
const Hero = () => {
  return (
    <section id="Hero" className="h-screen bg-gray-100 dark:bg-gray-900">
      {/* Background Image */}
      <div className="w-full h-3/5 md:h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Profile})` }}></div>

      {/* Title and Social Media */}
      <div className="flex flex-col items-center justify-center text-center mt-10 z-10 px-5">
        {/* Title */}
        <h1 initial={{ opacity: 0 }} duration animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-4xl font-bold text-gray-800 dark:text-white font-lexend md:text-6xl">
          {Title}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300 md:text-2xl">{tagTitle}</h2>

        {/* Social Media Icons */}
        <div className="flex mt-5 text-3xl space-x-4 text-gray-800 dark:text-white">
          {/* WhatsApp */}
          <a href="https://wa.me/6283895710142?text=%22Hai%20kak%2C%20saya%20tertarik%20dengan%20jasa%20fotografi%20dan%20videografi%20Anda.%20Bolehkah%20saya%20bertanya-tanya%20tentang%20paket%20dan%20harga%20yang%20tersedia%3F%20Terima%20kasih%21%22">
            <FaWhatsappSquare />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/fauzanalmarsus_?igsh=MXBocnp0bm9xOWlr&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:scale-125">
            <FaSquareInstagram />
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@fauzanalmarsus?_t=8odLta5x8ye&_r=1" target="_blank" rel="noopener noreferrer" className="hover:scale-125 hover:text-black">
            <AiFillTikTok />
          </a>
        </div>

        {/* Contact Button */}
        <div className="mt-8">
          <button type="button" className="px-5 py-2.5 text-sm font-medium text-black transition-colors duration-300 border-2 border-black bg-transparent hover:bg-gray-800 hover:text-white focus:ring-4">
            <a href="https://wa.me/6283895710142?text=%22Hai%20kak%2C%20saya%20tertarik%20dengan%20jasa%20fotografi%20dan%20videografi%20Anda.%20Bolehkah%20saya%20bertanya-tanya%20tentang%20paket%20dan%20harga%20yang%20tersedia%3F%20Terima%20kasih%21%22">
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
