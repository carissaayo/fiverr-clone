import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

import getCurrentUser from "../../utils/getCurrentUser";
import newRequest from "../../utils/newRequest";
import img1 from "../assets/carristore.PNG";

const MyGigs = () => {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
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
            <h1 className="font-bold text-2xl">Gigs</h1>
            {currentUser.isSeller && (
              <Link
                to="/add"
                className="bg-[#1dbf73] text-white font-medium border-[none] p-[10px] rounded-sm hover:scale-105"
              >
                Add New Gig
              </Link>
            )}
          </div>
          <table className="w-full table">
            <tr className="h-[50px] ">
              <th className="text-left">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">Orders</th>
              <th className="text-left">Action</th>
            </tr>
            {data.map((gig) => (
              <tr key={gig._id} className="h-[50px]">
                <td>
                  <img
                    className="w-[50px] h-[25px] object-cover"
                    src={gig.cover}
                    alt=""
                  />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{gig.sales}</td>
                <td>
                  <td className="">
                    <TrashIcon
                      className="w-[10px] h-[10px] text-red-600"
                      onClick={() => handleDelete(gig._id)}
                    />
                  </td>
                </td>
              </tr>
            ))}
            
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGigs;
