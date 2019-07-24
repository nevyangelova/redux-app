import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const repoListRow = ({ repo }) => {
  return (
    <tr>
      <td>
        <a href={repo.url} rel="noopener noreferrer" target="_blank">
          Click to open
        </a>
      </td>
      <td>
        <Link to={"/repo/" + repo.id}>{repo.title}</Link>
      </td>
      <td>{repo.authorId}</td>
      <td>{repo.category}</td>
      <td>{repo.year}</td>
    </tr>
  );
};

repoListRow.propTypes = {
  repo: PropTypes.object.isRequired
};

export default repoListRow;
