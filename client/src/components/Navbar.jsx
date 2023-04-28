import { useEffect, useState } from "react";
import { Link ,useLocation} from "react-router-dom";
import userImg from "../assets/face3.webp"
const Navbar = () => {
  const [active, setActive] = useState(false);
const [openOptions, setOpenOptions] = useState(false)
const {pathname} =useLocation()
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div
      className={`sticky z-20 top-0 flex flex-col items-center transition-all duration-[0.5s] ease-in-out ${
        active || pathname !== "/" ? "bg-white  " : "bg-[#013914] text-white "
      } `}
    >
      <div className="w-[1400px] flex justify-between py-[20px] px-0">
        <div className="text-[24px] font-bold">
          <Link to="/">
            <p className="">
              fiverr
              <span className="text-[#1dbf73]">.</span>
            </p>
          </Link>
        </div>
        <div className="flex gap-[24px] items-center font-[500]">
          <span className="">Fiverr Business</span>
          <span className="">Explore</span>
          <span className="">English</span>
          <span className="">Sign in</span>
          {!currentUser?.isSeller && <span className="">Become a Seller</span>}

          {!currentUser && (
            <button className="text-white py-[10px] px-[20px] rounded-[5px] border-[1px] border-white cursor-pointer bg-transparent hover:bg-[#1dbf73] hover:border-[#1dbf73]">
              Join
            </button>
          )}
          {currentUser && (
            <div
              className="flex items-center gap-[10px] cursor-pointer relative"
              onClick={() => setOpenOptions(!openOptions)}
            >
              <img
                src={userImg}
                alt=""
                className="w-[32px] h-[32px] rounded-full object-cover"
              />
              <span className="">{currentUser?.username}</span>
              {openOptions && (
                <div className="absolute top-[50px] right-0 p-[20px] bg-white rounded-[10px] border-1 border-solid border-gray-300 flex flex-col gap-[10px]  text-gray-500 w-[200px] font-[300]">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/gigs" className="">
                        Gigs
                      </Link>
                      <Link to="/create-gig" className="">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="">
                    Orders
                  </Link>
                  <Link to="/messages" className="">
                    Messages
                  </Link>
                  <Link to="/" className="">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr className="w-full h-0 border-[0.5px] border-gray-100" />

            <div className="w-[1400px] py-[10px] px-0 flex justify-between text-gray-500 font-[300] montserrat  ">
              <span className="">test</span>
              <span className="">test</span>
              <span className="">test</span>
            </div>
            <hr className="w-full h-0 border-[0.5px] border-gray-100" />
          </>
        ))}
    </div>
  );
};

export default Navbar;
