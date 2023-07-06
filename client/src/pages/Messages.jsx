import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import moment from "moment";
import { TrashIcon } from "@heroicons/react/24/solid";

import newRequest from "../../utils/newRequest";

import img1 from "../assets/carristore.PNG";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });
   const mutation = useMutation({
     mutationFn: (id) => {
       return newRequest.put(`/conversations/${id}`);
     },
     onSuccess: () => {
       queryClient.invalidateQueries(["conversations"]);
     },
   });

   const handleRead = (id) => {
     mutation.mutate(id);
   };
  return (
    <div className="flex justify-center">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="w-[1200px] py-[50px] px-0 ">
          <div className="flex justify-between items-center ">
            <h1 className="font-bold text-2xl">Messages</h1>
          </div>
          <table className="w-full table">
            <tr className="h-[50px] ">
              <th className="text-left p-[10px]">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
              <th className="text-left p-[10px]">Last Message</th>
              <th className="text-left p-[10px]">Date</th>
              <th className="text-left p-[10px]">Action</th>
            </tr>
            
            {data.map((c) => (
             <tr
              className={`h-[50px] text-left active ${
                ((currentUser.isSeller && !c.readBySeller) ||
                  (!currentUser.isSeller && !c.readByBuyer)) &&
                "bg-[#1dbf730f]"
              }`}
              key={c.id}
            >
              <td className="p-[10px]   font-medium">
                {currentUser.isSeller ? c.buyerId : c.sellerId}
              </td>
              <td className="p-[10px] text-[gray]">
                <Link to={`/message/${c.id}`}>{ {c?.lastMessage?.substring(0, 100)}...</Link>
              </td>
              <td className="p-[10px] text-[gray]">{moment(c.updatedAt).fromNow()}</td>

              <td className="p-[10px] ">
                {((currentUser.isSeller && !c.readBySeller) ||
                    (!currentUser.isSeller && !c.readByBuyer)) && (
                    <button  className="bg-[#1dbf73] text-white p-[10px] border-[none] " onClick={() => handleRead(c.id)}>
                      Mark as Read
                    </button>
                  )}
              </td>
            </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
