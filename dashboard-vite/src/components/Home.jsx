import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <TopBar />
      <Dashboard />

    </>
  );
};

export default Home;
