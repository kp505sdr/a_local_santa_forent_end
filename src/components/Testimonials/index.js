import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { choosedata } from "../../Simple data/index";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CardBlog from "../Card/CardBlog";

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setCurrentSlide(swiperRef.current.activeIndex);
      });
    }
  }, []);

  const responsiveConfig = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  return (
    <div className="mx-auto py-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl font-medium mb-2 font-primary leading-8 text-center">
          Find the best business and professionals in minutes
        </p>
      </div>
      <div className="m-auto">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="grid grid-cols-1 text-center gap-2 m-1 md:grid-cols-4"
          breakpoints={responsiveConfig}
        >
          {choosedata.map((c, i) => {
            return (
              <SwiperSlide key={i} className="p-4 ">
                <CardBlog
                  img={c.img}
                  title={c.title}
                  name={c.name}
                  stars={c.rating}
                  description={c.decscription}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
