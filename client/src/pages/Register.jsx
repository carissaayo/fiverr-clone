import  { useState } from 'react'

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    username:"",
    email:"",
    password:"",
    img:"",
    country:"",
    isSeller:false,
    desc:""
  })
  return (
    <div>Register</div>
  )
}

export default Register