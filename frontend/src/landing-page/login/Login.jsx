import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {

const [loginData, setLoginData]= useState({
  email: "",
  password: ""
});
const navigate = useNavigate();
const handleInputChange=(event)=>{
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  setLoginData((currentValues) => {
    currentValues[fieldName] = fieldValue;
    return { ...currentValues };
  });
  console.log(loginData);
}


const onSubmit=async(e)=>{
  e.preventDefault();
  try{
    const {data}=await axios.post("https://full-stack-stock-trading-platform.onrender.com/login",
      {...loginData},
      {withCredentials:true});
      const {message, success}= data;
      if(success){
        toast.success(message);
      setTimeout(()=>{
        window.location.href = "https://full-stack-stock-trading-platform-1.onrender.com";

      }, 1000);  
    
    }
    else{
      toast.error(message);
    }
  }
  catch(err){
    console.log(err);
    toast.error("Login failed try again !");
  }
}


  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 "style={{ paddingBottom: "10rem" }}>
      <div className="card p-4 shadow rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-3 fw-bold">Login</h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              name="email"
              value={loginData.email} 
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <Link to="#" className="small">Forgot password?</Link>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>
        </form>

        <div className="text-center mt-3">
          <small>Don't have an account? <Link to="/signup">Sign Up</Link></small>
        </div>
      </div>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
  
  />
    </div>
  );
}

export default Login;
