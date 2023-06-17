import  { useState } from 'react';
import  {useNavigate} from "react-router-dom"
import newRequest from '../utils/newRequest';

const Login = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null);

const navigate = useNavigate()

const handleSubmit = async (e)=>{
  e.preventDefault();
  try {
    
      const res = await newRequest.post("/auth/login",{
      username,
      password
    })

      localStorage.setItem("user",JSON.stringify(res.data))
      navigate("/")

  } catch (error) {
    setError(error.response.data);
    console.log(error.response.data);
  }
}
  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="flex flex-col w-[360px] gap-[20px] py-[100px] items-center justify-center"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-5 text-gray-500 ">Sign in</h1>
        <label htmlFor="" className="text-gray-500 text-lg">
          Username
        </label>
        <input
          type="text"
          name="username"
          className=" p-5 border-solid border-[rgb(216, 214, 214)] border-[1px]"
          placeholder="John Doe"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="" className="text-gray-500 text-lg">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className=" p-5 border-solid border-[rgb(216, 214, 214)] border-[1px]"
        />

        <button
          type="submit"
          className="border-none p-5 text-white font-medium text-lg bg-[#1dbf73] cursor-pointer"
        >
          Login
        </button>
        {error && error}
      </form>
    </div>
  );
}

export default Login