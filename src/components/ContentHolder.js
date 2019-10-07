import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home/HomeComp";
import Contact from "./contact/Contact";
import Recipes from "./recipe/Recipes";
import Login from "./login/Login";
import About from "./about";
import ViewRecipe from "./recipe/ViewRecipe";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import RegisterComponent from "./register/RegisterComponent";

function MainContainer() {
  return (
    <React.Fragment>
      <div className="container-fluid" style={{ position: "relative" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/Contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterComponent} />
          <ProtectedRoute path="/recipeView/:id" component={ViewRecipe} />} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default MainContainer;
