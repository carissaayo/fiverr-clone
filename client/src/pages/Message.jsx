
import { Link } from "react-router-dom";
import  img1 from "../assets/face3.webp"
const Message = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] m-[50px]">
        <p className="font-light text-sm text-[#555]">
          <Link to="/messages">MESSSAGES</Link>
          {`>`} JOHN DOE {`>`}{" "}
        </p>
        <div className="my-[30px] mx-0 p-[50px] flex flex-col gap-[20px] h-[500px] overflow-y-scroll ">
          <div className="flex gap-[20px] max-w-[600px] text-lg">
            <img
              src={img1}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <p className="p-[20px] bg-[#e7e7e7] rounded-[20px] rounded-tl-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              saepe aliquam a odio amet. Omnis ratione inventore obcaecati minus
              sapiente odit, rerum quod dolorem consequuntur dolores laboriosam
              reprehenderit veniam ea.
            </p>
          </div>

          <div className="flex gap-[20px] max-w-[600px] text-lg message">
            <img
              src={img1}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <p className="p-[20px] bg-[#e7e7e7] rounded-[20px] rounded-tl-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              saepe aliquam a odio amet. Omnis ratione inventore obcaecati minus
              sapiente odit, rerum quod dolorem consequuntur dolores laboriosam
              reprehenderit veniam ea.
            </p>
          </div>

          <div className="flex gap-[20px] max-w-[600px] text-lg">
            <img
              src={img1}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <p className="p-[20px] bg-[#e7e7e7] rounded-[20px] rounded-tl-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              saepe aliquam a odio amet. Omnis ratione inventore obcaecati minus
              sapiente odit, rerum quod dolorem consequuntur dolores laboriosam
              reprehenderit veniam ea.
            </p>
          </div>

          <div className="flex gap-[20px] max-w-[600px] text-lg message">
            <img
              src={img1}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <p className="p-[20px] bg-[#e7e7e7] rounded-[20px] rounded-tl-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              saepe aliquam a odio amet. Omnis ratione inventore obcaecati minus
              sapiente odit, rerum quod dolorem consequuntur dolores laboriosam
              reprehenderit veniam ea.
            </p>
          </div>
        </div>
        <hr className="h-0 border-[0.5px] border-[#e9e7e7] mb-[20px]" />
        <div className="flex items-center justify-between">
          <textarea
            placeholder="write a message"
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-4/5 h-[100px] p-[10px] border-[1px] border-[lightgray] rounded-xl"
          ></textarea>
          <button className="bg-[#1dbf73] p-[20px] text-white font-medium border-[none] rounded-xl w-[100px]">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
