import React, { useState } from "react";
import PropTypes from "prop-types";
import "../static/css/input.css";
export default function Input({ label, id, onSubmit }) {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id, username);
  };

  return (
    <form className="column player" onSubmit={handleSubmit}>
      {username}
      <label htmlFor="username" className="label">
        {label}
      </label>
      <div className="row-player">
        <input
          type="text"
          className="input-label"
          placeholder="github-username"
          value={username}
          onChange={handleChange}
        />
        <button className="btn dark-btn" type="submit" disabled={!username}>
          submit
        </button>
      </div>
    </form>
  );
}

// Input.PropTypes = {
//   label: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
