import React from "react";
import "./Navbar.css";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">DESKLIB</div>
        <div className="search-bar">
          <Search />
        </div>
        <div className="nav-menu">
          <ul className="nav-menu-items-ul">
            <li className="nav-menu-items-li">Study</li>
            <li className="nav-menu-items-li">Writing</li>
            <li className="nav-menu-items-li">Homework Help</li>
            <li className="nav-menu-items-li">Blog</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
