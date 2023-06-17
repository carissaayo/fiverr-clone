import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";

import img1 from "../assets/face3.webp";
const Message = () => {
   const { id } = useParams();
   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

   const queryClient = useQueryClient();

   const { isLoading, error, data } = useQuery({
     queryKey: ["messages"],
     queryFn: () =>
       newRequest.get(`/messages/${id}`).then((res) => {
         return res.data;
       }),
   });

   const mutation = useMutation({
     mutationFn: (message) => {
       return newRequest.post(`/messages`, message);
     },
     onSuccess: () => {
       queryClient.invalidateQueries(["messages"]);
     },
   });

   const handleSubmit = (e) => {
     e.preventDefault();
     mutation.mutate({
       conversationId: id,
       desc: e.target[0].value,
     });
     e.target[0].value = "";
   };

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] m-[50px]">
        <p className="font-light text-sm text-[#555]">
          <Link to="/messages">MESSSAGES</Link>
          {`>`} JOHN DOE {`>`}{" "}
        </p>

        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="messages">
            {data.map((m) => (
              <div
                className={`flex gap-[20px] max-w-[600px] text-lg ${
                  m.userId === currentUser._id
                    ? "flex-row-reverse self-end "
                    : ""
                }`}
                key={m._id}
              >
                <img
                  src={img1}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <p
                  className={`max-w-[500px] rounded-[20px] ${
                    m.userId === currentUser._id
                      ? "  rounded-tr-0  bg-[royalblue] text-white "
                      : "p-5 bg-[#e7e7e7]  rounded-tl-0 "
                  } `}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="my-[30px] mx-0 p-[50px] flex flex-col gap-[20px] h-[500px] overflow-y-scroll "></div>
        <hr className="h-0 border-[0.5px] border-[#e9e7e7] mb-[20px]" />
        <form
          className="flex items-center justify-between"
          onSubmit={handleSubmit}
        >
          <textarea
            placeholder="write a message"
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-4/5 h-[100px] p-[10px] border-[1px] border-[lightgray] rounded-xl"
          ></textarea>
          <button className="bg-[#1dbf73] p-[20px] text-white font-medium border-[none] rounded-xl w-[100px]">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
