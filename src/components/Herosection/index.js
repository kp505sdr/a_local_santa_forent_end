import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";

const Hero = () => {
  const swiperRef = useRef();

  const herosectionImg = [
    {
      id: 1,
      image:
        "https://nris.com/upload/country/152194054262639fda95ac05.12411768.jpg",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1691497254534-fec9bcf9c259?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1691497254534-fec9bcf9c259?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="hidden sm:block relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden max-h-96 mx-auto">
      <div className="absolute inset-0 ">
        <Swiper
          slidesPerView={1}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {herosectionImg.map((img, id) => (
            <SwiperSlide key={id}>
              <img src={img.image} alt="" className="h-96 w-full sm:h-full" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 opacity-50" />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center ">
        <form className="flex justify-between w-7/12 sm:w-6/12 md:w-5/12 bg-[#f5f7fb] p-2 rounded-full">
          <div className="w-full">
            <input
              type="text"
              placeholder="Buy - Sell | Search | Advertise Locally"
              className="w-full px-3 rounded-l border-transparent focus:border-transparent focus:ring-0 border-none text-xs sm:text-sm bg-transparent text-black"
            />
          </div>

          <div className="bg-sky-500 hover:bg-sky-400 flex justify-center items-center rounded-full w-10">
            <button
              type="submit"
              className="whitespace-nowrap text-white rounded-md "
            >
              <i className="fa fa-search text-xs sm:text-sm"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
