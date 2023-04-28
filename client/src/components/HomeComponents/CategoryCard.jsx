import { Link } from "react-router-dom";



const CategoryCard = ({item}) => {
    console.log(item);
  return (
    <Link to="/gigs">
      <div className="w-[252px] h-[344px] text-white rounded-[5px] cursor-pointer relative">
        <img src={item.img} alt=""  className="w-full h-full oject-cover"/>
        <span className="font-[300] absolute top-[15px] left-[15px]">{item.desc}</span>
        <span className="font-[500] text-[24px] absolute left-[15px] top-[40px]">{item.title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
