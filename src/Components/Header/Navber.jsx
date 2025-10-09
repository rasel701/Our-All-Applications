import React from "react";
import Logo from "../../assets/assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navber = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-[16px] font-semibold  border-b-2 border-[#9F62F2] pb-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "
            : "text-[16px] font-semibold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/apps"}
        className={({ isActive }) =>
          isActive
            ? "text-[16px] font-semibold  border-b-2 border-[#9F62F2] pb-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "
            : "text-[16px] font-semibold"
        }
      >
        Apps
      </NavLink>
      <NavLink
        to={"/installation"}
        className={({ isActive }) =>
          isActive
            ? "text-[16px] font-semibold  border-b-2 border-[#9F62F2] pb-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "
            : "text-[16px] font-semibold"
        }
      >
        Installation
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-15">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-4"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-[40px]" src={Logo} alt="" />
            <NavLink
              to={"/"}
              className="btn btn-ghost text-[17px] font-bold h-14 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
            >
              HERO.IO
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"https://github.com/rasel701"}
            className="flex items-center gap-2  p-3 rounded-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
          >
            <FaGithub size={22} /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
