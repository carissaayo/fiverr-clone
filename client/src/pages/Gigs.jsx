import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";


import img1 from "../assets/search-icon.svg";
import img2 from "../assets/face3.webp";
import GigCard from "../components/GigCard";

const gigs = [
  {
    id: 1,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
  {
    id: 2,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
  {
    id: 3,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
  {
    id: 4,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
  {
    id: 5,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
  {
    id: 6,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
  {
    id: 7,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
  {
    id: 8,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
  {
    id: 9,
    img: img1,
    pp: img2,
    username: "John Doe",
    desc: "Gig desc",
    star: 4,
    price: 100,
  },
];
const Gigs = () => {
  const [openOpitons, setOpenOpitons] = useState(false);
  const [sort, setSort] = useState("sales");
   const minRef = useRef();
   const maxRef = useRef();

   const { search } = useLocation();

   const { isLoading, error, data, refetch } = useQuery({
     queryKey: ["gigs"],
     queryFn: () =>
       newRequest
         .get(
           `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
         )
         .then((res) => {
           return res.data;
         }),
   });

  const reSort = (type) => {
    setSort(type);
    setOpenOpitons(false);
  };

   useEffect(() => {
     refetch();
   }, [sort]);

   const apply = () => {
     refetch();
   };



  return (
    <main className="flex justify-center ">
      <div className="w-[1440px]  py-[30px] px-0 flex flex-col gap-[15px]">
        <span className="font-light text-[13px] text-[#555]">
          `FIVERR {">"} GRAPHICS & DESIGN {">"}`{" "}
        </span>
        <h1 className="">AI Artists</h1>
        <p className="text-[#999] font-light">
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <section className="flex items-cenrer justify-between">
          <div className="flex items-center gap-[10px] text-[#555] font-light">
            <span className="">Budget</span>
            <input
              type="text"
              ref={minRef}
              className="p-[5px] border-[1px] border-[lightgray] outline-none placeholder:text-[gray]"
              placeholder="min"
            />
            <input
              type="text"
              ref={maxRef}
              className="p-[5px] border-[1px] border-[lightgray] outline-none placeholder:text-[gray]"
              placeholder="max"
            />
            <button
              className=" bg-[#1dbf73] text-white font-medium border-none cursor-pointer py-[5px] px-[10px] rounded-[5px]"
              onClick={apply}
            >
              Apply
            </button>
          </div>
          <div className="flex items-center gap-[10px] relative">
            <span className="text-[#555] font-light">Sort By</span>
            <span className="font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}{" "}
            </span>
            <img
              src={img1}
              alt=""
              className="w-[15px] cursor-pointer"
              onClick={() => setOpenOpitons(!openOpitons)}
            />
            {openOpitons && (
              <div className="absolute p-[20px] bg-white rounded-md border-[.5px] border-[lightgray] top-[30px] right-0 flex flex-col gap-[20px] text-[#555]">
                <button
                  disabled={sort === "createdAt"}
                  className="cursor-pointer disabled:cursor-text disabled:opacity-[0.7]"
                  onClick={() => reSort("createdAt")}
                >
                  Newest
                </button>
                <button
                  disabled={sort === "sales"}
                  className="cursor-pointer disabled:cursor-text disabled:opacity-[0.7]"
                  onClick={() => reSort("sales")}
                >
                  Best Selling
                </button>
              </div>
            )}
          </div>
        </section>
        <section className="flex flex-wrap justify-between">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
         
        </section>
      </div>
    </main>
  );
};

export default Gigs;
