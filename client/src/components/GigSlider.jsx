import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import img1 from "../assets/carristore.PNG";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const GigSlider = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className=" max-w-[700px] my-[50px] flex items-center justify-center relative">
        <div className="absolute  left-[-8%]">
          <button className="  h-12 w-12 rounded-full">
            <ChevronLeftIcon
              fontSize={32}
              className=" swiper-button-prev  h-12 "
            />
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-full text-black relative  "
        >
          <SwiperSlide className="w-full flex items-center justify-center">
            <img src={img1} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={img1} alt="" className="" />
          </SwiperSlide>{" "}
          <SwiperSlide className="">
            <img src={img1} alt="" className="" />
          </SwiperSlide>
        </Swiper>
        <div className="absolute right-[-8%]">
          <button className="     w-12 h-12  rounded-full z-10 ">
            <ChevronRightIcon
              fontSize={32}
              className=" swiper-button-next h-12"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GigSlider;
