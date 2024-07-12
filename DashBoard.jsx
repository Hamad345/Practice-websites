import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import person from "../images/person.png";
import Main from "./Main.jsx";
import overview from "../images/overview.png";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <>
      {/* parentdiv */}
      <div className="flex ">
        <div className="bg-[#E6E6EB] w-52 h-[1400px]  ">
          <div className="fixed">
            <Link to="/DashBoard">
              <button className="flex ml-5 gap-x-6 w-40  h-12 pt-3 border rounded-xl text-md font-[Poppins]  font-medium mt-40 hover:bg-black active:bg-black active:text-white hover:text-white">
                <span className="pl-4 ">
                  <img src={overview}></img>
                </span>
                Overview
              </button>
            </Link>
            <Link to="/UserManage">
              <button className="flex ml-5 pl- gap-x-2 w-40  h-12  border rounded-xl text-md font-[Poppins] font-medium mt-6 hover:bg-black active:bg-black active:text-white hover:text-white">
                <span className="pl-4 pt-3 ">
                  <img src={overview}></img>
                </span>
                User management{" "}
              </button>
            </Link>
            <Link to="/CategoryManage">
              <button className="flex ml-5 gap-x- w-40 h-12   border rounded-xl text-md font-[Poppins] font-medium mt-6 hover:bg-black active:bg-black active:text-white hover:text-white">
                <span className="pl-4 pt-3">
                  <img src={overview}></img>
                </span>
                Category management
              </button>{" "}
            </Link>
          </div>
        </div>
        <nav className="flex mt-3">
          <h1 className="text-4xl font-bold font-[Poppins] mt-3 ml-5">
            Dashboard
          </h1>
          <input
            type="text"
            placeholder=" Search"
            className="h-10 mt-3 border bg-[#E6E6EB] rounded-3xl ml-72 pl-8 placeholder:-pl-2  placeholder:font-normal placeholder:text-black placeholder:font-[Poppins]"
          />
          <span className="absolute ml-[485px] text-black text-xl mt-6 font-bold ">
            <IoIosSearch />
          </span>
          <IoIosNotifications className="text-2xl mt-5 ml-4" />
          <Link to="/Profile">
            {" "}
            <img
              src={person}
              className="w-10 h-10 border rounded-full mt-3 ml-36 whitespace-nowrap  "
            ></img>
          </Link>
          <Link to="/Profile">
            {" "}
            <h1 className="font-[Poppins] text-xl font-semibold mt-4 ml-3">
              John Smith
            </h1>
          </Link>
        </nav>
        {/* parentdiv ends */}
      </div>
      <Main />
    </>
  );
}
