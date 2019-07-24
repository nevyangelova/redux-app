import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import LoadingDots from "./loadingDots";

const Header = ({ loading }) => {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      {" | "}
      <NavLink to="/repos" activeClassName="active">
        Repos
      </NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};
export default Header;
