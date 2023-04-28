import React from "react";
import {Link} from "react-router-dom";
import img1 from "../assets/carristore.PNG"
import img2 from "../assets/face3.webp";

const GigCard = ({item}) => {
  return (
    <Link to="/gigs/123" className="">
      <section className="w-[324px] h-[370px] border-[1px] border-[lightgray] mb-[25px]  ">
        <img src={item.img} alt="" className="w-full h-[50%] object-cover  " />
        <div className="py-[10px] px-[20px] flex flex-col gap-[15px] ">
          <div className="flex items-center gap-[10px]">
            <img
              src={item.pp}
              alt=""
              className="rounded-full w-[26px] h-[26px]"
            />
            <span className="">{item.username}</span>
            <p className="">{item.desc}</p>
            <div className="flex items-cneter gap-[5px]">
              <img src="" alt="" className="w-[14px] h-[24px]" />
              <span className="font-bold text-sm text-[#ffc108]">
                {item.star}{" "}
              </span>
            </div>
          </div>
        </div>
        <hr className="h-0 border-[0.5px] border-[lightgray]" />
        <div className="py-[10px] px-[20px] flex items-center justify-between">
          <img src={item.pp} alt="" className="cursor-pointer h-[16px] w-[16px] rounded-full object-contain"/>
          <div className="">

          <span className="text-[#999] text-xs ">STARTING AT</span>
          <h2 className="text-[#555] text-lg font-normal">${item.price}</h2>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default GigCard;
