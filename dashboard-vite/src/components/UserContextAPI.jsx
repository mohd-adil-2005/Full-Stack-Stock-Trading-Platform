import { createContext, useContext, useState,useEffect } from "react";
import axios from "axios";

// Create the context
export const UserContext = createContext();

// Create a provider that wraps the whole app
export const UserProvider = ({ children }) => {
  const [user, setuser] = useState(null);
    useEffect(()=>{
       axios.get("http://localhost:3000/getuser",{ withCredentials: true })
      .then((res)=>{
        console.log(res.data.user);
        setuser(res.data.user);
      })
     .catch((err) => {
    console.error("Error fetching user is that :", err);
  });
  
    }, []); // Shared user state
  return (
    <UserContext.Provider value={{ user: user,}}>
      {children}
    </UserContext.Provider>
  );
};


