import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function repos(state = initialState.repos, action) {
  switch (action.type) {
    case types.LOAD_repoS_SUCCESS:
      return action.repos;

    case types.CREATE_repo_SUCCESS:
      return [...state, Object.assign({}, action.repo)];

    case types.UPDATE_repo_SUCCESS:
      return [
        ...state.filter(repo => repo.id !== action.repo.id),
        Object.assign({}, action.repo)
      ];

    default:
      return state;
  }
}
