import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { catgeory_dua, catgeory_satu, catgeory_tiga, catgeory_empat } from "../assets/utils/index";
import Autoplay from "embla-carousel-autoplay";
const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const CategoryCard = ({ url, title }) => {
    return (
      <div className="relative group w-full h-[300px] transition duration-300 ease-in-out">
        <div className="w-full h-full bg-cover bg-center transition duration-300 ease-in-out group-hover:brightness-75" style={{ backgroundImage: `url(${url})`, filter: "brightness(100%)" }}></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <span className="text-white text-3xl">{title}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-shrink-0 w-full md:w-1/3 h-fit md:h-fit">
            <CategoryCard url={catgeory_satu} title={"Graduation"} />
          </div>
          <div className="flex-shrink-0 w-full md:w-1/3 h-fit md:h-fit">
            <CategoryCard url={catgeory_dua} title={"Wedding"} />
          </div>
          <div className="flex-shrink-0 w-full md:w-1/3 h-fit md:h-fit">
            <CategoryCard url={catgeory_tiga} title={"Product"} />
          </div>
          <div className="flex-shrink-0 w-full md:w-1/3 h-fit md:h-fit">
            <CategoryCard url={catgeory_empat} title={"Events"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
