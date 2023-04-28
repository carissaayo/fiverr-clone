import { Link } from "react-router-dom";
import logo from "../assets/Kadarko.com Marketplace Logo.svg"

const Footer = () => {
  return (
    <main className="flex justify-center text-[#999] my-[50px]">
      <div className="w-[1400px]">
        <section className="flex justify-between">
          {/* A Column */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">Categories</h2>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
          </div>
          {/* A Column */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">Categories</h2>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
          </div>{" "}
          {/* A Column */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">Categories</h2>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
          </div>{" "}
          {/* A Column */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">Categories</h2>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
          </div>{" "}
          {/* A Column */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">Categories</h2>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
            <span className="font-[300]">Graphics & Design </span>
          </div>
        </section>

        <hr className="my-[50px] h-0 border-[1px] border-[rgb(237,235,235)] " />

        <section className="flex items-center justify-between ">
          <div className="flex items-center gap-[20px]">
            <h2 className="">fiverr</h2>
            <p className="text-sm"> &copy; Fiverr International Ltd, 2023 </p>
          </div>

          <div className="flex items-center gap-[30px]">
            <div className="flex items-c] gap-[30px]">
              <img src={logo} alt="" className="w-[24px] h-[24px]" />
              <img src={logo} alt="" className="w-[24px] h-[24px]" />{" "}
              <img src={logo} alt="" className="w-[24px] h-[24px]" />{" "}
              <img src={logo} alt="" className="w-[24px] h-[24px]" />{" "}
              <img src={logo} alt="" className="w-[24px] h-[24px]" />
            </div>

            <Link to="/" className="flex items-center gap-[10px]">
              <img src={logo} alt="" className="w-[24px]" />
              <span className="">English</span>
            </Link>

            <Link to="/" className="flex items-center gap-[10px]">
              <img src={logo} alt="" className="w-[24px]" />
              <span className="">USD</span>
            </Link>
            <img src={logo} alt="" className="w-[24px]" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Footer