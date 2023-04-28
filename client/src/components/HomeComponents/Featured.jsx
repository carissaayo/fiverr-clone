import React from "react";
import foodImg from "../../assets/face3.webp"
import searchImg from "../../assets/search-icon.svg";
const Featured = () => {

  return (
    <section className="h-[600px] flex justify-center w-full bg-[#013914] text-white">
      <div className="w-[1400px] flex items-center justify-between gap-[60px]">
        <div className="flex flex-col gap-[30px] flex-[3] ">
          <h1 className="text-[50px]">
            Find the perfect <span className="italic font-[300]">freelance</span> services for
            your business
          </h1>
          <div className="flex items-center justify-between bg-white rounded-lg ">
            <div className="flex items-center gap-[10px] justify-between w-full">
              <img
                src={searchImg}
                alt=""
                className="w-[20px] h-[20px] m-[10px]"
              />
              <input
                type="text"
                placeholder="try building an e-commerce website"
                className="border-0 outline-none w-full text-black flex-1"
              />
            </div>
            <button className=" w-[120px] h-[50px] border-0 bg-[#1dbf73] cursor-pointer rounded-r-lg">
              Search
            </button>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="">Popular:</span>
            <button className="text-white  bg-transparent border-[1px]  border-white py-[5px] px-[10px] rounded-2xl text-[14px] border-solid hover:bg-white hover:border-[#1dbf73] hover:text-[#1dbf73]">
              Web Design
            </button>
            <button className="text-white  bg-transparent border-[1px]  border-white py-[5px] px-[10px] rounded-2xl text-[14px] border-solid hover:bg-white hover:border-[#1dbf73] hover:text-[#1dbf73]">
              Logo Design
            </button>
            <button className="text-white  bg-transparent border-[1px]  border-white py-[5px] px-[10px] rounded-2xl text-[14px] border-solid hover:bg-white hover:border-[#1dbf73] hover:text-[#1dbf73]">
              Data Analysis
            </button>
            <button className="text-white  bg-transparent border-[1px]  border-white py-[5px] px-[10px] rounded-2xl text-[14px] border-solid hover:bg-white hover:border-[#1dbf73] hover:text-[#1dbf73]">
              Copy Writing
            </button>
          </div>
        </div>
        <div className="h-full ">
          <img src={foodImg} alt="" className="object-contain h-full" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
