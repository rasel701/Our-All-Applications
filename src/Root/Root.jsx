import React from "react";
import Navber from "../Components/Header/Navber";
import { Outlet } from "react-router";
import AppContext from "../AppContext/AppContext";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen ">
      <AppContext>
        <Navber />
        <div className="max-w-[90%] mx-auto">
          <Outlet />
          <ToastContainer />
        </div>
      </AppContext>
    </div>
  );
};

export default Root;
