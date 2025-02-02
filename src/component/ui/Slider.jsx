// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../../styles/Slider.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Button from "./Button";

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-banner banner1">
            <div className="hero-area">
              <h2 className="mb-3">
                Welcome To <span className="font-bold">ARTECHIT</span>{" "}
              </h2>
              <h1 className="text-5xl font-bold">
                Unlock Your Potential with Expert IT Training
              </h1>
              <p>Now a Days Internet Is a Useful Thing, Not Passion</p>
              <div className="flex items-center gap-4">
                 <Button children={'Course Details'} /> 
                 <Button children={'Contact US'} /> 
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-banner banner2">
            <div className="hero-area">
              <h1 className="text-5xl font-bold">
                There is Now Way to Become a Internet Expert 1
              </h1>
              <p>Now a Days Internet Is a Useful Thing, Not Passion</p>
              <button>GET More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-banner banner3">
            <div className="hero-area">
              <h1 className="text-5xl font-bold">
                There is Now Way to Become a Internet Expert 2
              </h1>
              <p>Now a Days Internet Is a Useful Thing, Not Passion</p>
              <button>GET More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-banner banner4">
            <div className="hero-area">
              <h1 className="text-5xl font-bold">
                There is Now Way to Become a Internet Expert 3
              </h1>
              <p>Now a Days Internet Is a Useful Thing, Not Passion</p>
              <button>GET More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
