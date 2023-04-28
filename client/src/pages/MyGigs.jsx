
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

import img1 from "../assets/carristore.PNG"
const MyGigs = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] py-[50px] px-0 ">
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-2xl">Gigs</h1>
          <Link
            to="/"
            className="bg-[#1dbf73] text-white font-medium border-[none] p-[10px] rounded-sm hover:scale-105"
          >
            Add New Gig
          </Link>
        </div>
        <table className="w-full table">
          <tr className="h-[50px] ">
            <th className="text-left">Image</th>
            <th className="text-left">Title</th>
            <th className="text-left">Price</th>
            <th className="text-left">Orders</th>
            <th className="text-left">Action</th>
          </tr>
          <tr className="h-[50px]">
            <td className="">
              <img
                src={img1}
                alt=""
                className="w-[50px] h-[25px] object-cover"
              />
            </td>
            <td className="">Gig1</td>
            <td className="">88</td>
            <td className="">123</td>
            <td className="">
              <TrashIcon className="w-[10px] h-[10px] text-red-600" />
            </td>
          </tr>
          <tr className="h-[50px]">
            <td className="">
              <img
                src={img1}
                alt=""
                className="w-[50px] h-[25px] object-cover"
              />
            </td>
            <td className="">Gig1</td>
            <td className="">88</td>
            <td className="">123</td>
            <td className="">
              <TrashIcon className="w-[10px] h-[10px] text-red-600" />
            </td>
          </tr>{" "}
          <tr className="h-[50px]">
            <td className="">
              <img
                src={img1}
                alt=""
                className="w-[50px] h-[25px] object-cover"
              />
            </td>
            <td className="">Gig1</td>
            <td className="">88</td>
            <td className="">123</td>
            <td className="">
              <TrashIcon className="w-[10px] h-[10px] text-red-600" />
            </td>
          </tr>{" "}
          <tr className="h-[50px]">
            <td className="">
              <img
                src={img1}
                alt=""
                className="w-[50px] h-[25px] object-cover"
              />
            </td>
            <td className="">Gig1</td>
            <td className="">88</td>
            <td className="">123</td>
            <td className="">
              <TrashIcon className="w-[10px] h-[10px] text-red-600" />
            </td>
          </tr>
          <tr className="h-[50px]">
            <td className="">
              <img
                src={img1}
                alt=""
                className="w-[50px] h-[25px] object-cover"
              />
            </td>
            <td className="">Gig1</td>
            <td className="">88</td>
            <td className="">123</td>
            <td className="">
              <TrashIcon className="w-[10px] h-[10px] text-red-600" />
            </td>
          </tr>{" "}
          <tr className="h-[50px]">
            <td className="">
              <img
                src={img1}
                alt=""
                className="w-[50px] h-[25px] object-cover"
              />
            </td>
            <td className="">Gig1</td>
            <td className="">88</td>
            <td className="">123</td>
            <td className="">
              <TrashIcon className="w-[10px] h-[10px] text-red-600" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
