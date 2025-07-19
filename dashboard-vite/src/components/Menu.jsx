import React, { useState , useContext} from "react";
import {UserContext} from './UserContextAPI';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Menu = () => {
   const {user}= useContext(UserContext);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }; // for the logout code
const handleLogout= async()=>{
  try{
    const {data}= await axios.get("https://full-stack-stock-trading-platform.onrender.com/logout",{withCredentials:true});   
    const {message, success}= data;
    if(success){
      toast.success(message);
      setTimeout(()=>{
        window.location.href= "http://localhost:5173/";
      }, 1000);
      setIsProfileDropdownOpen(false);
      setIsProfile(false);
      }
    
    else{
      toast.error(message);
    }
  }
  catch(err){
    console.log(err);
    toast.error("Logout failed, please try agian");
  }
}





  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    if(user){
      setIsProfile(!isProfile);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

 

  return (
    <div className="menu-container  ">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar ">{ user?user.username:"user"}</div>
          <p className="username text-muted">{ user?"":"USERID"}</p>



        </div>

{isProfileDropdownOpen && isProfile && (
          <div
            className=" drop  "
            style={{  zIndex: 10000}}
          >
       <div className="ur" style={{paddingTop:"10px",paddingLeft:"10px",marginLeft:"4px", marginTop:"20px"}}><i className="  text-muted ur fa-solid fa-user " 
        style={{ fontSize: '18px' }}></i> <span style={{ marginLeft: '3px',
        fontFamily: "'sans-serif',Poppins ", fontSize: '1.25rem' }}>
          {user.username}</span></div>
           <div className="ur"  style={{paddingTop:"10px",paddingLeft:"10px",marginLeft:"4px"}}><i className="fa-solid fa-envelope" style={{ fontSize: '16px' }}></i><span  style={{ marginLeft: '3px',
        fontFamily: "'sans-serif',Poppins ", fontSize: '1.25rem' }}> {user.email}</span></div> 
         

 <div className="ur"  style={{paddingTop:"10px",paddingLeft:"10px",marginLeft:"4px"}}><i className="fa-solid fa-gear" style={{ fontSize: '16px' }}></i><span  style={{ marginLeft: '3px',
        fontFamily: "'sans-serif',Poppins ", fontSize: '1.25rem' }}> Settings</span></div> 

         <div className="ur"  style={{paddingTop:"10px",paddingLeft:"10px",marginLeft:"4px"}}><i className="fas fa-circle-question" style={{ fontSize: '16px' }}></i><span  style={{ marginLeft: '3px',
        fontFamily: "'sans-serif',Poppins ", fontSize: '1.25rem' }}> Help</span></div> 





 

         <div className="ur"  style={{paddingTop:"10px",paddingLeft:"10px",marginLeft:"4px"}}><i className="fas fa-circle-question" style={{ fontSize: '16px' }}></i><span  style={{ marginLeft: '3px',
        fontFamily: "'sans-serif',Poppins ", fontSize: '1.25rem' }}>Customize Kite</span></div> 


           {/* <div className="ur"  style={{paddingTop:"10px",paddingLeft:"10px",
            marginLeft:"4px"}}>< i class="fa-solid fa-arrow-right-from-bracket" 
            style={{ fontSize: '20px' }}></i>
            <span>

<button
  style={{
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontFamily: "'Poppins', sans-serif",
    cursor: 'pointer',
    display: 'flex',
    
    gap: '8px'
  }}
>
  Logout
</button>








              // </span></div>  */}


              <div
  className="ur"
  style={{
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10px',
    paddingLeft: '10px',
    marginLeft: '4px',
    gap: '10px', // spacing between icon and button
    fontFamily: "'Poppins', sans-serif"
  }}
>
  <i
    className="fa-solid fa-arrow-right-from-bracket"
    style={{ fontSize: '16px', color: '#dc3545' }}
  ></i>

  <button
    style={{
      padding: '8px 16px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontWeight: '500',
      cursor: 'pointer',
      fontFamily: "'Poppins', sans-serif",
    }}

    onClick={handleLogout}
    className="logout-button"
  >
    Logout
  </button>
</div>

          </div>
        )}


      </div>
     
    </div>
  );
};

export default Menu;
