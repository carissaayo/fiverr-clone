import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import img1 from "../../assets/carristore.PNG";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CategoryCard from "./CategoryCard";
const data = [
  {
    id: 1,
    title: "Web Design",
    desc: "Get a neat website for your brand ",
    img: img1,
  },
  {
    id: 2,
    title: "Web Design",
    desc: "Get a neat website for your brand ",
    img: img1,
  },
  {
    id: 3,
    title: "Web Design",
    desc: "Get a neat website for your brand ",
    img: img1,
  },
  {
    id: 4,
    title: "Web Design",
    desc: "Get a neat website for your brand ",
    img: img1,
  },
  {
    id: 5,
    title: "Web Design",
    desc: "Get a neat website for your brand ",
    img: img1,
  },
  {
    id: 6,
    title: "Web Design",
    desc: "Get a neat website for your brand ",
    img: img1,
  },
];

const Slider = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-[1300px] relative my-[50px] ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className=" text-black relative w-[90%] "
        >
          {data?.map((item) => (
            <SwiperSlide className="testimonial- slide " key={item.id}>
              <CategoryCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="">
          <button className="absolute left-0 top-[50%] bg-white h-12 w-12 rounded-full">
            <ChevronLeftIcon
              fontSize={32}
              className=" swiper-button-prev  h-12 "
            />
          </button>
          <button className=" absolute right-0   top-[50%]   w-12 h-12 bg-white rounded-full ">
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

export default Slider;
