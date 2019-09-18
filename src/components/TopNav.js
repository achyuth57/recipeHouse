import React from "react";
import "../styles/topnav.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Recipes from "./recipe/Recipes";
import Login from "./login/Login";
import About from "./about";
import ViewRecipe from "./recipe/ViewRecipe";

function TopNav(props) {
  //console.log("user" + props.user);
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default navbar-expand-xl navbar-light">
          <div className="navbar-header d-flex col">
            <a className="navbar-brand" href="/">
              <i className="fa fa-cutlery" />
              Recipe<b>House</b>
            </a>
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
                {/* <a
                  data-toggle="dropdown"
                  className="nav-link dropdown-toggle"
                  href="javascript:void(0)"
                >
                  Recipes <b className="caret" />
                </a> */}
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
            {/* <form className="navbar-form form-inline">
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
            </form> */}
            {!props.authenticated ? (
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
                    {props.user ? <span>{props.user}</span> : "User"}
                    <b className="caret" />
                  </Link>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <a href="javascript:void(0)" className="dropdown-item">
                        <i className="fa fa-user-o" /> Profile
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dropdown-item">
                        <i className="fa fa-calendar-o" /> Calendar
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dropdown-item">
                        <i className="fa fa-sliders" /> Settings
                      </a>
                    </li>
                    <li className="divider dropdown-divider" />
                    <li>
                      <a href="javascript:void(0)" className="dropdown-item">
                        <i className="fa fa-out" /> Logout
                      </a>
                    </li>
                  </ul> */}
                </li>
              </ul>
            )}
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/Contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/recipeView/:id" component={ViewRecipe} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default TopNav;
