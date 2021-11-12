const id = "";
const sec = "";
const params = `?client_id=${id}&client_secret=${sec}`;

function getMessage(message, username) {
  if (message === "Not Found") {
    return `${username} doesn't exist`;
  }

  return message;
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
    .then((res) => res.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(getErrorMsg(repos.message, username));
      }

      return repos;
    });
}

function getUser(username) {
  return fetch(`https://api.github.com/users/${username}${params}`)
    .then((res) => res.json())
    .then((profile) => {
      if (profile.message) {
        throw new Error(getMessage(profile.message, username));
      }
      return profile;
    });
}

function getStarCount(repos) {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos);
}

function getUserData(player) {
  return Promise.all([getUser(player), getRepos(player)]).then(
    ([profile, repos]) => ({
      profile,
      score: calculateScore(profile.followers, repos),
    })
  );
}

function sortPlayers(player) {
  return player.sort((a, b) => b.score - a.score);
}

export function Battle(player) {
  return Promise.all([getUserData(player[0]), getUserData(player[1])]).then(
    (results) => sortPlayers(results)
  );
}

export function fetchRepos(language) {
  return fetch(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data.items;
    });
}
