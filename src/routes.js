import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ReposPage from "./components/repo/ReposPage";
import { ManageRepoPage } from "./components/repo/ManageRepoPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="repos" component={ReposPage} />
    <Route path="repo" component={ManageRepoPage} />
    <Route path="repo/:id" component={ManageRepoPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
