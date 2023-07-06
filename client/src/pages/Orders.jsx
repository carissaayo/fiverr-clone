import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

import img1 from "../assets/carristore.PNG";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
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
            <h1 className="font-bold text-2xl">Orders</h1>
          </div>
          <table className="w-full table">
            <tr className="h-[50px] ">
              <th className="text-left">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">Contact</th>
            </tr>
            {data.map((order) => (
              <tr key={order._id} className="h-[50px]">
                <td>
                  <img
                    className="w-[50px] h-[25px] object-cover"
                    src={order.img}
                    alt=""
                  />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <img
                    className="w-[25px] cursor-pointer"
                    src={img1}
                    alt=""
                    onClick={() => handleContact(order)}
                  />
                </td>
              </tr>
            ))}
            
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
