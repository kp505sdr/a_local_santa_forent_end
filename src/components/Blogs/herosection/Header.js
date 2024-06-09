import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper/modules";

const MyImageGallery = ({ imgs }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const responsiveConfig = {
    360: {
      direction: "horizontal",
    },
    550: {
      direction: "vertical",
    },
  };

  const selectMainImage = (index) => {
    thumbsSwiper.slideTo(index); // Set the main image based on the index of the selected thumbnail
  };

  return (
    <div className="bg-yellow-500 sm:flex gap-x-10 max-w-3xl">
      <div className="">
        <Swiper
          loop={true}
          spaceBetween={40}
          navigation={true}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : false}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
          autoplay={{ delay: 2000 }}
          className="mySwiper2 sm:max-w-xl sm:h-96"
        >
          {imgs.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.image} alt={`Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper w-1/8 h-96"
          breakpoints={responsiveConfig}
        >
          {imgs.map((img, index) => (
            <SwiperSlide key={index} onClick={() => selectMainImage(index)}>
              <img
                className="min-w-14 sm:max-w-1/5"
                src={img.image}
                alt={`Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MyImageGallery;
