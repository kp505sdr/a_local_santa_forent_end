import React, { useEffect, useRef, useState } from "react";
import Hero from ".";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";
import { herosectionImg } from "../../Simple data";

const Carosousel = () => {
  const swiperRef = useRef();

  return (
    <div className="">
      <div className="flex">
        {/* left */}
        <div className="hidden lg1:block w-full">
          {/* <img
            src="https://nris.com/upload/us_ads/1724738679648173eb3b0816.67726057.gif"
            alt=""
            className="w-full"
          />
          <img
            src="https://nris.com/upload/us_ads/1724738679648173eb3b0816.67726057.gif"
            alt=""
            className="w-full"
          />
          <img
            src="https://nris.com/upload/us_ads/1724738679648173eb3b0816.67726057.gif"
            alt=""
            className="w-full"
          /> */}
        </div>
        {/* center */}
        <div className="w-full">
          <div className="container">
            <>
              <Swiper
                // onSwiper={(swiper) => {
                //   swiperRef.current = swiper;
                // }}
                // onResize={() => {
                //   if (window.innerWidth < 768) {
                //     swiperRef.current.params.slidesPerView = 3;
                //   } else {
                //     swiperRef.current.params.slidesPerView = 8;
                //   }
                // }}
                slidesPerView={8}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className=""
              >
                {herosectionImg.map((img, id) => (
                  <SwiperSlide key={id}>
                    <ProductCard image={img.img} />
                    {/* <img
                      src={img.img}
                      alt={img.img}
                      className="w-full h-auto pb-2"
                    /> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
          <Hero />
        </div>
        {/* right */}
        <div className="hidden lg1:block w-full h-full bg-green-300">
          {/* <img
            src="https://nris.com/upload/us_ads/1724738679648173eb3b0816.67726057.gif"
            alt=""
            className="w-full"
          />
          <img
            src="https://nris.com/upload/us_ads/1724738679648173eb3b0816.67726057.gif"
            alt=""
            className="w-full"
          />
          <img
            src="https://nris.com/upload/us_ads/1724738679648173eb3b0816.67726057.gif"
            alt=""
            className="w-full"
          /> */}
        </div>
      </div>

      {/* <div className="relative z-10  my-5">
          <div className="flex gap-x-5">
            <div className="flex flex-col items-center">
              <img
                src="https://nris.com/icon/restaurants_icon.png"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-xs sm:text-sm">Restaurants</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://nris.com/icon/temple_icon.png"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-xs sm:text-sm">Temple</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://nris.com/icon/pub_icon.png"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-xs sm:text-sm">Pubs</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://nris.com/icon/casinos_icon.png"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-xs sm:text-sm">Casino</p>
            </div>{" "}
            <div className="flex flex-col items-center">
              <img
                src="https://nris.com/icon/carpool_icon.png"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-xs sm:text-sm">Carpool</p>
            </div>{" "}
            <div className="flex flex-col items-center">
              <img
                src="https://nris.com/icon/jobs_icon.png"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-xs sm:text-sm">Jobs</p>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Carosousel;
