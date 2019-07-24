import React from "react";
import { Route } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ReposPage from "./components/repo/ReposPage";
import ManageRepoPage from "./components/repo/ManageRepoPage";

export default (
  <App path="/">
    <Route path="/repos" component={ReposPage} />
    <Route path="/repo" exact component={ManageRepoPage} />
    <Route path="/repo/:id" component={ManageRepoPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/" exact component={HomePage} />
  </App>
);
