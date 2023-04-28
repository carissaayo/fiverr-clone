import { Link } from "react-router-dom";


const ProjectCard = ({item}) => {
  return (
    <Link to="/">
        <div className="w-[300px] h-[300px] rounded-[5px]  box-shadow  overflow-hidden">
            <img src={item.img} alt=""  className="w-full h-[70%] object-cover"/>
            <div className=" flex items-center gap-[20px] p-[15px] ">
                <img src={item.profilePicture} alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
                <div className="">
                    <h2 className="text-sm font-[500]">{item.cat}</h2>
                    <span className="">{item.username}</span>
                </div>
            </div>
        </div>
    </Link>
  );
};

export default ProjectCard;
