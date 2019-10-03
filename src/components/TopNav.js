import React, { useContext } from "react";
import "../styles/topnav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import FireConnection from "firebase";

const TopNav = () => {
  const { currentUser } = useContext(AuthContext);
  let userName = "";
  if (currentUser) {
    userName = currentUser.email.split("@")[0];
  }
  const logOutStyle = {
    border: "none",
    color: "#777",
    padding: "8px 25px",
    lineHeight: "normal",
    display: "block",
    clear: "both",
    fontWeight: "400"
  };
  return (
    <nav className="navbar navbar-default navbar-expand-xl navbar-light">
      <div className="navbar-header d-flex col">
        <Link to="/" className="navbar-brand">
          <i className="fa fa-cutlery" />
          Recipe<b>House</b>
        </Link>
        <button
          type="button"
          data-target="#navbarCollapse"
          data-toggle="collapse"
          className="navbar-toggle navbar-toggler ml-auto"
        >
          <span className="navbar-toggler-icon" />
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>

      <div
        id="navbarCollapse"
        className="collapse navbar-collapse justify-content-start"
      >
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to=""
              data-toggle="dropdown"
              className="nav-link dropdown-toggle"
            >
              Recipes <b className="caret" />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/recipes" className="dropdown-item">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/recipes/chinees" className="dropdown-item">
                  Chinees
                </Link>
              </li>
              <li>
                <Link to="/recipes/south" className="dropdown-item">
                  South
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <form className="navbar-form form-inline">
          <div className="input-group search-box">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search by Name"
            />
            <span className="input-group-addon">
              <i className="fa fa-search" />
            </span>
          </div>
        </form>
        {!currentUser ? (
          <ul className="nav navbar-nav navbar-right ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav navbar-right ml-auto">
            {/* <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="nav-link notifications"
                  >
                    <i className="fa fa-bell-o" />
                    <span className="badge">1</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="javascript:void(0)" className="nav-link messages">
                    <i className="fa fa-envelope-o" />
                    <span className="badge">10</span>
                  </a>
                </li> */}
            <li className="nav-item dropdown">
              <Link
                to=""
                data-toggle="dropdown"
                className="nav-link dropdown-toggle user-action"
              >
                {/* <img src="" className="avatar" alt="Avatar" /> */}
                {userName && <span>{userName}</span>}
                <b className="caret" />
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="" className="dropdown-item">
                    <i className="fa fa-user-o" /> Profile
                  </Link>
                </li>
                <li>
                  <Link to="" className="dropdown-item">
                    <i className="fa fa-calendar-o" /> Calendar
                  </Link>
                </li>
                <li>
                  <Link to="" className="dropdown-item">
                    <i className="fa fa-sliders" /> Settings
                  </Link>
                </li>
                <li className="divider dropdown-divider" />
                <li>
                  <button
                    style={logOutStyle}
                    onClick={() => {
                      FireConnection.auth().signOut();
                    }}
                  >
                    <i className="fa fa-out" />
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
