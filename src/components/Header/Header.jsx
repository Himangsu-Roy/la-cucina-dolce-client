import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avater from "../../assets/avatar1.png";
import { AuthContex } from "../../contexts/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const { logOut, user } = useContext(AuthContex);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-base-100 my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-[32px]"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          La Cucina Dolce
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-9 text-[18px] font-[600]">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
          
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {user ?
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user ? <img title={user.displayName} src={user.photoURL} /> : ""}
              </div>
            </label> :
            <ActiveLink to="/login">Login</ActiveLink>}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {user ? (
                  <Link onClick={handleLogOut} to="/login">
                    Logout
                  </Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
