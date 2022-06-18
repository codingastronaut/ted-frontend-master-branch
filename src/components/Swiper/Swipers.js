import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Servicecards from "../ServiceCard";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Box from "src/components/Box";
import Swiper_1 from "src/assets/Swiper_1.png";
import Swiper_2 from "src/assets/Swiper_2.png";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { padding } from "styled-system";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default () => {
  return (
    <Box position={{ tablet: "relative" }} right={{ tablet: "-4rem" }}>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          1500: {
            slidesPerView: 4,
          },
          1250: {
            slidesPerView: 3,
          },
          750: {
            slidesPerView: 2,
          },
          375: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Servicecards
            heading="Data and analysis"
            text="They know the uni, the courses, the accommodation, and the
            nightlife!"
            img={Swiper_1}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
