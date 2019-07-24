import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const repos = [
  {
    id: "my-amplify-app",
    title: "My Amplify App",
    url: "https://github.com/nevyangelova/my-amplify-app",
    authorId: "nevyangelova",
    year: "2019",
    category: "Tool experiments"
  },
  {
    id: "coup-react-coding-challenge",
    title: "Coup Coding Challenge",
    url: "https://github.com/nevyangelova/coup-react-coding-challenge",
    authorId: "nevyangelova",
    year: "2018",
    category: "Coding challenge"
  },
  {
    id: "json-token-user-authentication",
    title: "Json Token Auth",
    url: "https://github.com/nevyangelova/json-token-user-authentication",
    authorId: "nevyangelova",
    year: "2017",
    category: "Practice"
  },
  {
    id: "javascript-development-environment",
    title: "JS Dev environment",
    url: "https://github.com/nevyangelova/javascript-development-environment",
    authorId: "nevyangelova",
    year: "2017",
    category: "Tool experiments"
  },
  {
    id: "movielist-autocomplete",
    title: "Movie List autocomplete",
    url: "https://github.com/nevyangelova/movielist-autocomplete",
    authorId: "nevyangelova",
    year: "2017",
    category: "Practice"
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
          const existingrepoIndex = repos.findIndex(a => a.id === repo.id);
          repos.splice(existingrepoIndex, 1, repo);
        } else {
          repo.id = generateId(repo);
          repo.url = `http://www.pluralsight.com/repos/${repo.id}`;
          repos.push(repo);
        }

        resolve(repo);
      }, delay);
    });
  }

  static deleterepo(repoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfrepoToDelete = repos.findIndex(repo => repo.id === repoId);
        repos.splice(indexOfrepoToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default repoApi;
