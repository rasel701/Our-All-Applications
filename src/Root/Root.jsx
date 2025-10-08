import React from "react";
import Navber from "../Components/Header/Navber";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen ">
      <Navber />
      <div className="max-w-[90%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
