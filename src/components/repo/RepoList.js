import React from 'react';
import PropTypes from 'prop-types';
import RepoListRow from "./RepoListRow";

const RepoList = ({ repos }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {repos.map(repo => (
          <RepoListRow key={repo.id} repo={repo} />
        ))}
      </tbody>
    </table>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired
};

export default RepoList;
