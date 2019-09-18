import React from "react";
import "../styles/header.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Recipes from "./recipe/Recipes";
import Login from "./login/Login";
import ViewRecipe from "./recipe/ViewRecipe";

function HeaderApp() {
  return (
    <Router>
      <div className="navbar-wrapper">
        <div className="container-fluid">
          <nav className="navbar navbar-default-top">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>

                <NavLink className="navbar-brand" to="/">
                  Logo
                </NavLink>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <NavLink activeClassName="active" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li className=" dropdown">
                    {/* <a
                      href="#"
                      className="dropdown-toggle "
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Recipes <span className="caret" />
                    </a> */}
                    <ul className="dropdown-menu">
                      <li className=" dropdown">
                        <NavLink to="/recipes" activeClassName="active">
                          View Recipes
                        </NavLink>
                      </li>
                      <li>{/* <a href="#">Add New</a> */}</li>
                    </ul>
                  </li>

                  <li className="">
                    <NavLink activeClassName="active" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <ul className="nav navbar-nav pull-right">
                  <li className="">
                    <NavLink activeClassName="active" to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
                <ul className="nav navbar-nav pull-right">
                  <li className=" dropdown">
                    {/* <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Signed in as <span className="caret" />
                    </a> */}
                    <ul className="dropdown-menu">
                      {/* <li>
                        <a href="#">Change Password</a>
                      </li>
                      <li>
                        <a href="#">My Profile</a>
                      </li> */}
                    </ul>
                  </li>
                  <li className="">{/* <a href="#">Logout</a> */}</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/recipeView:id" component={ViewRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default HeaderApp;
