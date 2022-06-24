import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import "./index.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logo-container">
            <img className="header-image" src={logo} />
          </div>

          <nav>
            <div className="nav-list">
              <NavLink
                className={({isActive}) => isActive ? "active-item": "list-item" }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({isActive}) => isActive ? "active-item": "list-item" }
                to={"/about"}
              >
                About
              </NavLink>
              <NavLink
                className={({isActive}) => isActive ? "active-item": "list-item" }
                to={"/services"}
              >
                Services
              </NavLink>
              <NavLink
                className={({isActive}) => isActive ? "active-item": "list-item" }
                to={"/contact"}
              >
                Contact
              </NavLink>
              <NavLink
                exact
                className={({isActive}) => isActive ? "active-item": "list-item" }
                to={"/policy"}
              >
                Policy
              </NavLink>
            </div>
          </nav>

          <div className="icons">
            <SearchIcon className="icon" />
            <PersonIcon className="icon" />
            <CallIcon className="icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
