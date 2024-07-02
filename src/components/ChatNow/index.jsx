import Card from "../Card/card";
import { spt } from "../../Simple data";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { choosedata } from "../../Simple data/index";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function ChatNow({ responsiveConfig, text, textSize, hrefLink,AllsponseredAds }) {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setCurrentSlide(swiperRef.current.activeIndex);
      });
    }
  }, []);

  return (
    <div className="m-auto overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
        breakpoints={responsiveConfig}
      >
        {AllsponseredAds?.map((res, id) => (
          <SwiperSlide className="" key={id}>
            <Card
              img={res}
              text={text}
              textSize={textSize}
              hrefLink={res?.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ChatNow;
