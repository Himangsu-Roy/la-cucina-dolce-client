import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "bg-[#FBC278] text-black py-[10px] px-[15px] rounded" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
