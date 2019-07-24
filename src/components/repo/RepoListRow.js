import React, { PropTypes } from "react";
import { Link } from "react-router";

const repoListRow = ({ repo }) => {
  return (
    <tr>
      <td>
        <a href={repo.watchHref} target="_blank">
          Watch
        </a>
      </td>
      <td>
        <Link to={"/repo/" + repo.id}>{repo.title}</Link>
      </td>
      <td>{repo.authorId}</td>
      <td>{repo.category}</td>
      <td>{repo.length}</td>
    </tr>
  );
};

repoListRow.propTypes = {
  repo: PropTypes.object.isRequired
};

export default repoListRow;
