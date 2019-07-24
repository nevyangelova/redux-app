import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import { loadRepos } from "./actions/repoActions";
import { loadAuthors } from "./actions/authorActions";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";

const store = configureStore();
store.dispatch(loadRepos());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById("root")
);
