import img1 from "../../assets/Kadarko.com Marketplace Logo.svg";
import img2 from "../../assets/Konga Logo.svg";
import img3 from "../../assets/Serah Kassim Logo.svg";
import img4 from "../../assets/Slot Logo.svg";
import img5 from "../../assets/Wilson’s Juice Co Logo (1).svg";

const Partners = () => {
  return (
    <div className="bg-[#fafafa] h-[100px] flex justify-center">
      <div className="w-[760px] flex items-center justify-center gap-[20px] text-[lightgray] font-[500]">
        <p className="">Trusted By:</p>
        <img src={img1} alt="" className="h-[60px] " />
        <img src={img2} alt="" className="h-[40px] w-[80px]" />
        <img src={img3} alt="" className="h-[40px] w-[100px]" />
        <img src={img4} alt="" className="h-[40px] w-[100px]" />
        <img src={img5} alt="" className="h-[40px] w-[100px]" />
      </div>
    </div>
  );
};

export default Partners;
