import React from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function Sidebar() {
  return (
    <>
      <div className="sidebar h-screen w-min bg-blue-400 text-white p-8 flex flex-col justify-between">
        <div className="topIcons flex flex-col gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "bg-white text-blue-400 p-3 rounded-2xl" : "text-white bg-blue-300 p-3 rounded-2xl"}`
            }
          >
            <HomeOutlinedIcon />
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${isActive ? "bg-white text-blue-400 rounded-2xl p-3" : "text-white bg-blue-300 p-3 rounded-2xl"}`
            }
          >
            <CalendarMonthIcon />
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `${isActive ? "bg-white text-blue-400 rounded-2xl p-3" : "text-white bg-blue-300 p-3 rounded-2xl"}`
            }
          >
            <MailOutlineIcon />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${isActive ? "bg-white text-blue-400 rounded-2xl p-3" : "text-white bg-blue-300 p-3 rounded-2xl"}`
            }
          >
          <PersonOutlineOutlinedIcon />
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${isActive ? "bg-white text-blue-400 rounded-2xl p-3" : "text-white bg-blue-300 p-3 rounded-2xl"}`
            }
          >
          <SettingsOutlinedIcon />
          </NavLink>
        </div>
        <div className="bottomIcons">
          <LogoutRoundedIcon />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
