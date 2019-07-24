import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const repos = [
  {
    id: "my-amplify-app",
    title: "repo 1",
    watchHref: "https://github.com/nevyangelova/my-amplify-app",
    authorId: "nevyangelova",
    length: "5:08",
    category: "practice"
  },
  {
    id: "coup-react-coding-challenge",
    title: "repo 2",
    watchHref: "https://github.com/nevyangelova/coup-react-coding-challenge",
    authorId: "nevyangelova",
    length: "3:10",
    category: "practice"
  },
  {
    id: "json-token-user-authentication",
    title: "repo 3",
    watchHref: "https://github.com/nevyangelova/json-token-user-authentication",
    authorId: "nevyangelova",
    length: "2:52",
    category: "practice"
  },
  {
    id: "javascript-development-environment",
    title: "repo 4",
    watchHref:
      "https://github.com/nevyangelova/javascript-development-environment",
    authorId: "nevyangelova",
    length: "2:30",
    category: "practice"
  },
  {
    id: "movielist-autocomplete",
    title: "repo 5",
    watchHref: "https://github.com/nevyangelova/movielist-autocomplete",
    authorId: "nevyangelova",
    length: "5:10",
    category: "practice"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

const generateId = repo => {
  return replaceAll(repo.title, " ", "-");
};

class repoApi {
  static getAllrepos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], repos));
      }, delay);
    });
  }

  static saverepo(repo) {
    repo = Object.assign({}, repo);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minrepoTitleLength = 1;
        if (repo.title.length < minrepoTitleLength) {
          reject(`Title must be at least ${minrepoTitleLength} characters.`);
        }

        if (repo.id) {
          const existingrepoIndex = repos.findIndex(a => a.id == repo.id);
          repos.splice(existingrepoIndex, 1, repo);
        } else {
          repo.id = generateId(repo);
          repo.watchHref = `http://www.pluralsight.com/repos/${repo.id}`;
          repos.push(repo);
        }

        resolve(repo);
      }, delay);
    });
  }

  static deleterepo(repoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfrepoToDelete = repos.findIndex(repo => {
          repo.id == repoId;
        });
        repos.splice(indexOfrepoToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default repoApi;
