import React from "react";
import "../static/css/input.css";
export default function Preview({ username, label, onReset }) {
  return (
    <div className="column player">
      <h3 className="label">{label}</h3>
      <div
        className="row-player"
        style={{ backgroundColor: "rgb(0, 0, 0, 0.08)", borderRadius: "3px" }}
      >
        <div className="info">
          <img
            className="avatar-git"
            src={`https://github.com/${username}.png?size=200`}
            alt={`avator for ${username}`}
          />
          <a className="link" href={`https://github.com/${username}`}>
            {username}
          </a>
        </div>
        <button className="btn-clear" onClick={onReset}>
          ❌
        </button>
      </div>
    </div>
  );
}
