import React from "react";
import Navber from "../Components/Header/Navber";
import { Outlet } from "react-router";
import AppContext from "../AppContext/AppContext";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen  ">
      <AppContext>
        <Navber />
        <div className="">
          <Outlet />
          <ToastContainer />
        </div>
      </AppContext>
      <Footer />
    </div>
  );
};

export default Root;
