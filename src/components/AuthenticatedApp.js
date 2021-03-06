import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "./Profile";
import Repositories from "./Repositories";
import Repository from "./Repository";
import { SearchController } from "../contexts/search";


const AuthenticatedApplication = () => {
  return (
    <div>
      <SearchController>
        <Navigation />

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/repositories/:id">
            <Repository />
          </Route>
          <Route path="/repositories">
            <Repositories />
          </Route>
          <Route path="/">
            <Home />
          </Route>

          <Route path="*">
            <div>This path doesn't exist</div>
          </Route>
        </Switch>
      </SearchController>
    </div>
  );
};

export default AuthenticatedApplication;
