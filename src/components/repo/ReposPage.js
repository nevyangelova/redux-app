import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import * as repoActions from "../../actions/repoActions";
import RepoList from "./RepoList";

class ReposPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddrepoPage = this.redirectToAddrepoPage.bind(this);
  }

  repoRow(repo, index) {
    return <div key={index}>{repo.title}</div>;
  }

  redirectToAddrepoPage() {
    browserHistory.push("/repo");
  }

  render() {
    const { repos } = this.props;
    return (
      <div className="container-fluid">
        <h1>repos</h1>
        <input
          type="submit"
          value="Add repo"
          className="btn btn-primary"
          onClick={this.redirectToAddrepoPage}
        />

        <RepoList repos={this.props.repos} />
      </div>
    );
  }
}

ReposPage.propTypes = {
  repos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    repos: state.repos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(repoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposPage);
