import videoUrl from "../../assets/production ID_5190548.mp4";
import img1 from "../../assets/customer-care.jfif"
import {CheckCircleIcon } from "@heroicons/react/24/outline";
const About = () => {
  return (
    <section className="">
      <div className="flex justify-center py-[50px] bg-[#f1fdf7] ">
        <div className="w-[1400px] flex items-center gap-[50px] justify-between">
          <div className="flex-[2]">
            <h1 className="text-3xl font-bold mb-[10px]">
              A whole world of freelance talent at your fingertips
            </h1>
            <div className="mb-[10px]">
              <div className="flex items-center gap-[10px] mb-[10px]">
                <CheckCircleIcon className="h-4 text-[gray]" />
                <p className="text-lg font-[500] text-[gray]">
                  The best for every budget
                </p>
              </div>
              <p className="text-[gray] font-[300]">
                Find high-quality service at every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>

            <div className="mb-[10px]">
              <div className="flex items-center gap-[10px] mb-[10px]">
                <CheckCircleIcon className="h-4 text-[gray]" />
                <p className="text-lg font-[500] text-[gray]">
                  The best for every budget
                </p>
              </div>
              <p className="text-[gray] font-[300]">
                Find high-quality service at every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>

            <div className="mb-[10px]">
              <div className="flex items-center gap-[10px] mb-[10px]">
                <CheckCircleIcon className="h-4 text-[gray]" />
                <p className="text-lg font-[500] text-[gray]">
                  The best for every budget
                </p>
              </div>
              <p className="text-[gray] font-[300]">
                Find high-quality service at every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>

            <div className="mb-[10px]">
              <div className="flex items-center gap-[10px] mb-[10px]">
                <CheckCircleIcon className="h-4 text-[gray]" />
                <p className="text-lg font-[500] text-[gray]">
                  The best for every budget
                </p>
              </div>
              <p className="text-[gray] font-[300]">
                Find high-quality service at every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
          </div>
          <div className="flex-[3]">
            <video src={videoUrl} controls className="w-[720px]"></video>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[50px] bg-[#0d084d] ">
        <div className="w-[1400px] flex items-center gap-[50px] justify-between text-white">
          <div className="flex-[2]">
            <h1 className="text-[42px] font-bold mb-[10px] ">
              fiverr business
            </h1>
            <h1 className="text-3xl font-bold mb-[10px] ">
              A business solution designed for teams
            </h1>
            <p className="text-[gray] text-xl mb-[5px]">
              Upgrade to a curated experience with tools and benefits, dedicated
              to businesses
            </p>
            <div className="flex items-center gap-[10px] mb-[10px]">
              <CheckCircleIcon className="h-6 text-[#cdc8c8]" />
              <p className="text-lg font-[500] text-[#cdc8c8]">
                Connect to freelancers with proven business experience
              </p>
            </div>
            <div className="flex items-center gap-[10px] mb-[10px]">
              <CheckCircleIcon className="h-6 text-[#cdc8c8]" />
              <p className="text-lg font-[500] text-[#cdc8c8]">
                Connect to freelancers with proven business experience
              </p>
            </div>{" "}
            <div className="flex items-center gap-[10px] mb-[10px]"> 
              <CheckCircleIcon className="h-6 text-[#cdc8c8]" />
              <p className="text-lg font-[500] text-[#cdc8c8]">
                Connect to freelancers with proven business experience
              </p>
            </div>
            <button className="mt-[10px] w-[max-content]  bg-[#1dbf73] text-white py-[10px] px-[20px] rounded-[5px] text-base hover:scale-110">
              Explore Fiverr Business
            </button>
          </div>
          <div className="flex-[3]">
            <img src={img1} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
