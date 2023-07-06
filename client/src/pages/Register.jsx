import  { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [file, setFile] = useState(null);

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

   const navigate = useNavigate();

   const handleChange = (e) => {
     setUser((prev) => {
       return { ...prev, [e.target.name]: e.target.value };
     });
   };

   const handleSeller = (e) => {
     setUser((prev) => {
       return { ...prev, isSeller: e.target.checked };
     });
   };
   const handleSubmit = async (e) => {
     e.preventDefault();

     const url = await upload(file);
     try {
       await newRequest.post("/auth/register", {
         ...user,
         img: url,
       });
       navigate("/");
     } catch (err) {
       console.log(err);
     }
   };


  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-960px flex gap-[120px] py-24 px-0 "
      >
        <div className="flex-1 flex flex-col justify-between gap-[10px] ">
          <h1 className="text-gray-400 mb-5">Create a new account</h1>
          <label htmlFor="" className="text-gray-400 text-lg">
            Username
          </label>
          <input
            name="username"
            type="text"
            placeholder="john doe"
            onChange={handleChange}
            className="border-[1px] border-solid border-[rgb(216, 214, 214)]"
          />
          <label htmlFor="" className="text-gray-400 text-lg">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="" className="text-gray-400 text-lg">
            Password
          </label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="border-[1px] border-solid border-[rgb(216, 214, 214)]"
          />
          <label htmlFor="" className="text-gray-400 text-lg">
            Profile Picture
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border-[1px] border-solid border-[rgb(216, 214, 214)]"
          />
          <label htmlFor="" className="text-gray-400 text-lg">
            Country
          </label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
            className="border-[1px] border-solid border-[rgb(216, 214, 214)]"
          />
          <button
            type="submit"
            className="border-none p-5 text-white font-medium text-lg bg-[#1dbf73] cursor-pointer"
          >
            Register
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-between gap-[10px]">
          <h1 className="text-gray-400 mb-5">I want to become a seller</h1>
          <div className="toggle flex items-center gap-[10px]">
            <label htmlFor="" className="text-gray-400 text-lg">
              Activate the seller account
            </label>
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleSeller}
                className="border-[1px] border-solid border-[rgb(216, 214, 214)]"
              />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
            className="border-[1px] border-solid border-[rgb(216, 214, 214)]"
          />
          <label htmlFor="" className="text-gray-400 text-lg">
            Description
          </label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
            className="border-[1px] border-solid border-[rgb(216, 214, 214)]"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
