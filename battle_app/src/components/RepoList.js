import React from "react";
import "../static/css/grid.css";
export default function RepoList({ repos }) {
    return (
        <ul className="grid">
            {repos.map((repo, index) => {
                const { owner, html_url, stargazers_count, forks, open_issues } =repo;
                const { login, avatar_url } = owner;
                return (
                    <li key={html_url} className="repo">
                        <img
                            className="avatar"
                            src={avatar_url}
                            alt={`avatar for ${login}`}
                        />
                        <h2 className="centerText">
                            <a className="link" href={html_url}>
                                {login}
                            </a>
                        </h2>
                        <ul className="cardlist">
                            <li>
                                {" "}
                                👨🏻‍💻{" "}
                                <a
                                    className="gitlink link"
                                    href={`https://github.com/${login}`}
                                >
                                    {login}
                                </a>{" "}
                            </li>
                            <li> ⭐️ {stargazers_count.toLocaleString()} stars</li>
                            <li> ⌘ {forks.toLocaleString()} forks</li>
                            <li> 🛠 {open_issues.toLocaleString()} open</li>
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
}
