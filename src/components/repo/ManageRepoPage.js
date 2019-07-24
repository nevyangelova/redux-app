import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as repoActions from "../../actions/repoActions";
import RepoForm from "./RepoForm";
import { authorsFormattedForDropdown } from "../../selectors/selectors";
import toastr from "toastr";

export class ManageRepoPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      repo: Object.assign({}, this.props.repo),
      errors: {},
      saving: false
    };

    this.saverepo = this.saverepo.bind(this);
    this.updaterepoState = this.updaterepoState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.repo.id !== nextProps.repo.id) {
      this.setState({ repo: Object.assign({}, nextProps.repo) });
    }
  }

  updaterepoState(event) {
    const field = event.target.name;
    let repo = Object.assign({}, this.state.repo);
    repo[field] = event.target.value;
    return this.setState({ repo: repo });
  }

  repoFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.repo.title.length < 5) {
      errors.title = "Title must be at least 5 characters.";
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saverepo(event) {
    event.preventDefault();

    if (!this.repoFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions
      .saveRepo(this.state.repo)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success("repo saved.");
    this.props.history.push("/repos");
  }

  render() {
    return (
      <RepoForm
        repo={this.state.repo}
        onChange={this.updaterepoState}
        onSave={this.saverepo}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        saving={this.state.saving}
      />
    );
  }
}

ManageRepoPage.propTypes = {
  repo: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageRepoPage.contextTypes = {
  router: PropTypes.object
};

function getrepoById(repos, id) {
  const repo = repos.filter(repo => repo.id === id);
  if (repo) return repo[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const repoId = ownProps.match.params.id;

  let repo = {
    id: "",
    url: "",
    title: "",
    authorId: "",
    size: "",
    category: ""
  };

  if (repoId && state.repos.length > 0) {
    repo = getrepoById(state.repos, repoId);
  }

  return {
    repo: repo,
    authors: authorsFormattedForDropdown(state.authors)
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
)(ManageRepoPage);
