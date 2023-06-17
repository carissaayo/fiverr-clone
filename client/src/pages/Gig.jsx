import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  ClockIconCheckIcon,
} from "@heroicons/react/24/outline";
import img2 from "../assets/face3.webp";

import newRequest from "../../utils/newRequest";
import GigSlider from "../components/GigSlider";

const Gig = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <main className="flex justify-center">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="w-[1400px] py-[30px] px-0 flex gap-[50px]">
          <section className="flex-[2] flex flex-col gap-[20px]">
            <span className="font-light text-sm text-[#555]">
              {" "}
              `FIVERR {">"} GRAPHICS & DESIGN {">"}`{" "}
            </span>
            <h1 className="font-bold text-xl">{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="flex items-center gap-[10px]">
                <img
                  src={dataUser.img || img2}
                  alt=""
                  className="w-[32px] h-[32px] rounded-full"
                />
                <span className="text-sm font-medium">{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="flex items-center gap-[5px]">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <StarIcon
                          className=" w-[20px] h-[20px] text-[#ffc108] "
                          key={i}
                        />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}

            <div className=" ">
              <GigSlider />
            </div>
            <h2 className="font-normal">About This Gig</h2>
            <p className="font-light text-[#555] text-base">{data.desc}</p>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="mt-[50px] flex flex-col gap-[20px]">
                <h2 className="">About The Seller</h2>
                <div className="flex items-center gap-[20px]">
                  <img
                    src={dataUser.img || img2}
                    alt=""
                    className="w-[100px] h-[100px] rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-[10px]">
                    <span className="">{dataUser.username}</span>

                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="flex items-center gap-[5px]">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <StarIcon
                              className=" w-[20px] h-[20px] text-[#ffc108] "
                              key={i}
                            />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button className="bg-white rounded-md border-[1px] border-[gray] p-[10px]">
                      Contact Me
                    </button>
                  </div>
                </div>
                <div className="border-[1px] border-[lightgray] p-[20px] mt-[20px] text-base">
                  <div className="flex flex-wrap justify-between ">
                    <div className="flex w-[300px]  flex-col gap-[10px] mb-[20px]">
                      <span className="font-light">From</span>
                      <span className="">{dataUser.country}</span>
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
                  <p className="">{dataUser.desc}</p>
                </div>
              </div>
            )}
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
                  nihil perferendis ex sunt amet esse, eligendi unde! Sunt
                  tempore molestias dolores quam hic dignissimos repellat
                  temporibus, illo, esse fugit officia?
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
                  nihil perferendis ex sunt amet esse, eligendi unde! Sunt
                  tempore molestias dolores quam hic dignissimos repellat
                  temporibus, illo, esse fugit officia?
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
                  nihil perferendis ex sunt amet esse, eligendi unde! Sunt
                  tempore molestias dolores quam hic dignissimos repellat
                  temporibus, illo, esse fugit officia?
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
              <h2 className=" text-xl">{data.shortTitle}</h2>
              <h1 className="font-medium text-2xl">${data.price}</h1>
            </div>
            <p className="text-[gray] my-[10px] mx-0">{data.shortDesc}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-[10px] ">
                <ClockIcon className=" w-[20px] h-[20px]  " />
                <p className="">{data.deliveryDate} days Delivery</p>
              </div>

              <div className="flex items-center gap-[10px] ">
                <ClockIcon className=" w-[20px] h-[20px]  " />
                <p className="">{data.revisionNumber} Revisions</p>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[10px]  font-light">
                
                <p className="">Prompt writing</p>
              </div>
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <CheckIcon className=" w-[20px] h-[20px] text-green-600 " />
                  <p>{feature}</p>
                </div>
              ))}
            </div>


               <Link to={`/pay/${id}`}>

            <button className="bg-[#1dbf73] p-[10px] text-white border-0 font-medium text-lg hover:scale-105">
              Continue
            </button>
               </Link>
          </section>
        </div>
      )}
    </main>
  );
};

export default Gig;
