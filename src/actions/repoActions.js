import * as types from "./actionTypes";
import repoApi from "../api/mockRepoApi";
import { ajaxCallError, beginAjaxCall } from "./ajaxStatusActions";

export function loadReposSuccess(repos) {
  return { type: types.LOAD_REPOS_SUCCESS, repos };
}

export function createRepoSuccess(repo) {
  return { type: types.CREATE_REPO_SUCCESS, repo };
}

export function updateRepoSuccess(repo) {
  return { type: types.UPDATE_REPO_SUCCESS, repo };
}

export function loadRepos() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return repoApi
      .getAllrepos()
      .then(repos => {
        dispatch(loadReposSuccess(repos));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveRepo(repo) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return repoApi
      .saverepo(repo)
      .then(repo => {
        repo.id
          ? dispatch(updateRepoSuccess(repo))
          : dispatch(createRepoSuccess(repo));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw error;
      });
  };
}
