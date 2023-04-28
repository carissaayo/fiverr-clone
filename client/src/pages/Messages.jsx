import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import img1 from "../assets/carristore.PNG";

const Messages = () => {
    
  
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  const message= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ut. Officiis rerum inventore architecto ab? Aliquid sed assumenda tenetur ad doloribus, reprehenderit modi officia eaque placeat sapiente molestiae doloremque necessitatibus!'

  return (
    <div className="flex justify-center">
      <div className="w-[1200px] py-[50px] px-0 ">
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-2xl">Messages</h1>
        </div>
        <table className="w-full table">
          <tr className="h-[50px] ">
            <th className="text-left p-[10px]">Buyer</th>
            <th className="text-left p-[10px]">Last Message</th>
            <th className="text-left p-[10px]">Date</th>
            <th className="text-left p-[10px]">Action</th>
          </tr>
          <tr className="h-[50px] text-left active">
            <td className="p-[10px]   font-medium">John Doe</td>
            <td className="p-[10px] text-[gray]">
              <Link to="/message/12">
              {message.substring(0, 100)}...{" "}
              </Link>
            </td>
            <td className="p-[10px] text-[gray]">1 day ago</td>

            <td className="p-[10px] ">
              <button className="bg-[#1dbf73] text-white p-[10px] border-[none] ">
                Mark as Read
              </button>
            </td>
          </tr>

          <tr className="h-[50px] text-left active">
            <td className="p-[10px]  font-medium">John Doe</td>
            <td className="p-[10px] text-[gray]">
              {message.substring(0, 100)}...{" "}
            </td>
            <td className="p-[10px] text-[gray]">1 day ago</td>

            <td className="p-[10px] ">
              <button className="bg-[#1dbf73] text-white p-[10px] border-[none] ">
                Mark as Read
              </button>
            </td>
          </tr>

          <tr className="h-[50px] text-left">
            <td className="p-[10px]  font-medium">John Doe</td>
            <td className="p-[10px] text-[gray]">
              {message.substring(0, 100)}...{" "}
            </td>
            <td className="p-[10px]  text-[gray]">1 day ago</td>
          </tr>

          <tr className="h-[50px] text-left">
            <td className="p-[10px]  font-medium">John Doe</td>
            <td className="p-[10px] text-[gray]">
              {message.substring(0, 100)}...{" "}
            </td>
            <td className="p-[10px]  text-[gray]">1 day ago</td>
          </tr>

          <tr className="h-[50px] text-left">
            <td className="p-[10px]  font-medium">John Doe</td>
            <td className="p-[10px] text-[gray]">
              {message.substring(0, 100)}...{" "}
            </td>
            <td className="p-[10px]  text-[gray]">1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
