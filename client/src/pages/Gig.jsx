import img2 from "../assets/face3.webp";
import GigSlider from "../components/GigSlider";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  ClockIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const Gig = () => {
  return (
    <main className="flex justify-center">
      <div className="w-[1400px] py-[30px] px-0 flex gap-[50px]">
        <section className="flex-[2] flex flex-col gap-[20px]">
          <span className="font-light text-sm text-[#555]">
            {" "}
            `FIVERR {">"} GRAPHICS & DESIGN {">"}`{" "}
          </span>
          <h1 className="font-bold text-xl">
            I will create AI generated art for you
          </h1>

          <div className="flex items-center gap-[10px]">
            <img src={img2} alt="" className="w-[32px] h-[32px] rounded-full" />
            <span className="text-sm font-medium">John Doe</span>

            <div className="flex items-center gap-[5px]">
              <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
              <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
              <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />{" "}
              <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
              <span className="text-sm font-bold text-[#ffc108]">4</span>
            </div>
          </div>

          <div className=" ">
            <GigSlider />
          </div>
          <h2 className="font-normal">About This Gig</h2>
          <p className="font-light text-[#555] text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            sunt corporis animi ex debitis aut autem, iure perferendis sapiente
            accusamus quaerat obcaecati minima error temporibus ad facilis
            dolorum tempore eius.
          </p>
          <div className="mt-[50px] flex flex-col gap-[20px]">
            <h2 className="">About The Seller</h2>
            <div className="flex items-center gap-[20px]">
              <img
                src={img2}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-[10px]">
                <span className="">John Doe</span>

                <div className="flex items-center gap-[5px]">
                  <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                  <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                  <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />{" "}
                  <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                  <span className="text-sm font-bold text-[#ffc108]">4</span>
                </div>
                <button className="bg-white rounded-md border-[1px] border-[gray] p-[10px]">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="border-[1px] border-[lightgray] p-[20px] mt-[20px] text-base">
              <div className="flex flex-wrap justify-between ">
                <div className="flex w-[300px]  flex-col gap-[10px] mb-[20px]">
                  <span className="font-light">From</span>
                  <span className="">Nigeria</span>
                </div>

                <div className="flex w-[300px]  flex-col gap-[10px] mb-[20px]">
                  <span className="font-light">Member since</span>
                  <span className="">2023</span>
                </div>

                <div className="flex w-[300px]  flex-col gap-[10px] mb-[20px]">
                  <span className="font-light">Avg. response time</span>
                  <span className="">4 hours</span>
                </div>

                <div className="flex w-[300px]  flex-col gap-[10px] mb-[20px]">
                  <span className="font-light">Last delivery</span>
                  <span className="">1 day</span>
                </div>
                <div className="flex w-[300px]  flex-col gap-[10px] mb-[20px]">
                  <span className="font-light">Language</span>
                  <span className="">English</span>
                </div>
              </div>
              <hr className="w-full h-0 border-[1px] border-[light-gray]  mb-[20px]" />
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus laboriosam veritatis voluptatibus ratione non
                expedita placeat facere aliquid magni, doloremque atque mollitia
                necessitatibus autem aspernatur in delectus voluptate iste
                provident.
              </p>
            </div>
          </div>

          <div className="mt-[50px] ">
            <h2 className="">Reviews</h2>
            <div className="flex flex-col gap-[20px] my-[20px] mx-0">
              <div className="flex items-center gap-[10px]">
                <img
                  src={img2}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="">
                  <span className="">John Doe</span>
                  <div className="flex items-center gap-[10px] text-[gray] ">
                    <img src={img2} alt="" className="w-[20px] h-[20px] " />
                    <span className="">Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />{" "}
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <span className="text-sm font-bold text-[#ffc108]">4</span>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                nihil perferendis ex sunt amet esse, eligendi unde! Sunt tempore
                molestias dolores quam hic dignissimos repellat temporibus,
                illo, esse fugit officia?
              </p>
              <div className="flex items-center gap-[10px] ">
                <span className="">Helpful?</span>
                <HandThumbUpIcon className=" w-[20px] h-[20px]  " />
                <span className=""></span>
                <HandThumbDownIcon className=" w-[20px] h-[20px]  " />
                <span className=""></span>
                <HandThumbUpIcon className=" w-[20px] h-[20px]  " />
              </div>
            </div>
            <hr className="h-0 border-[0.5px] border-[lightgray] my-[50px] mx-0" />

            <div className="flex flex-col gap-[20px] my-[20px] mx-0">
              <div className="flex items-center gap-[10px]">
                <img
                  src={img2}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="">
                  <span className="">John Doe</span>
                  <div className="flex items-center gap-[10px] text-[gray] ">
                    <img src={img2} alt="" className="w-[20px] h-[20px] " />
                    <span className="">Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />{" "}
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <span className="text-sm font-bold text-[#ffc108]">4</span>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                nihil perferendis ex sunt amet esse, eligendi unde! Sunt tempore
                molestias dolores quam hic dignissimos repellat temporibus,
                illo, esse fugit officia?
              </p>
              <div className="flex items-center gap-[10px] ">
                <span className="">Helpful?</span>
                <HandThumbUpIcon className=" w-[20px] h-[20px]  " />
                <span className=""></span>
                <HandThumbDownIcon className=" w-[20px] h-[20px]  " />
                <span className=""></span>
                <HandThumbUpIcon className=" w-[20px] h-[20px]  " />
              </div>
            </div>
            <hr className="h-0 border-[0.5px] border-[lightgray] my-[50px] mx-0" />

            <div className="flex flex-col gap-[20px] my-[20px] mx-0">
              <div className="flex items-center gap-[10px]">
                <img
                  src={img2}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="">
                  <span className="">John Doe</span>
                  <div className="flex items-center gap-[10px] text-[gray] ">
                    <img src={img2} alt="" className="w-[20px] h-[20px] " />
                    <span className="">Nigeria</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />{" "}
                <StarIcon className=" w-[20px] h-[20px] text-[#ffc108] " />
                <span className="text-sm font-bold text-[#ffc108]">4</span>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                nihil perferendis ex sunt amet esse, eligendi unde! Sunt tempore
                molestias dolores quam hic dignissimos repellat temporibus,
                illo, esse fugit officia?
              </p>
              <div className="flex items-center gap-[10px] ">
                <span className="">Helpful?</span>
                <HandThumbUpIcon className=" w-[20px] h-[20px]  " />
                <span className=""></span>
                <HandThumbDownIcon className=" w-[20px] h-[20px]  " />
                <span className=""></span>
                <HandThumbUpIcon className=" w-[20px] h-[20px]  " />
              </div>
            </div>
            <hr className="h-0 border-[0.5px] border-[lightgray] my-[50px] mx-0" />
          </div>
        </section>
        <section className="flex-1 border-[1px] border-[lightgray] p-[20px] rounded-md flex flex-col gap-[20px] sticky top-[150px] h-[max-content]  max-h-[500px]">
          <div className="flex items-center justify-between ">
            <h2 className=" text-xl">AI generated image</h2>
            <h1 className="font-medium text-2xl">$59.00</h1>
          </div>
          <p className="text-[gray] my-[10px] mx-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-[10px] ">
              <ClockIcon className=" w-[20px] h-[20px]  " />
              <p className="">3 days Delivery</p>
            </div>

            <div className="flex items-center gap-[10px] ">
              <ClockIcon className=" w-[20px] h-[20px]  " />
              <p className="">3 Revisions</p>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]  font-light">
              <CheckIcon className=" w-[20px] h-[20px] text-green-600 " />
              <p className="">Prompt writing</p>
            </div>

            <div className="flex items-center gap-[10px] ">
              <CheckIcon className=" w-[20px] h-[20px] text-green-600 " />
              <p className="">Prompt writing</p>
            </div>
            <div className="flex items-center gap-[10px] ">
              <CheckIcon className=" w-[20px] h-[20px] text-green-600 " />
              <p className="">Prompt writing</p>
            </div>
            <div className="flex items-center gap-[10px] ">
              <CheckIcon className=" w-[20px] h-[20px] text-green-600 " />
              <p className="">Prompt writing</p>
            </div>
          </div>
          <button className="bg-[#1dbf73] p-[10px] text-white border-0 font-medium text-lg hover:scale-105">Continue</button>
        </section>
      </div>
    </main>
  );
};

export default Gig;
