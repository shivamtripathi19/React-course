import React from "react";
const navList = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
import "../static/css/reposPage.css";
import PropTypes from "prop-types";
export default function NavList({ selectLanguage, handleBtnClick }) {
  return (
    <ul className="navBar">
      {navList.map((ele) => {
        return (
          <li className="navList" key={ele}>
            <button
              className="btn-nav"
              style={selectLanguage === ele ? { color: "red" } : null}
              onClick={() => handleBtnClick(ele)}
            >
              {ele}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

NavList.propTypes = {
  selectLanguage: PropTypes.string.isRequired,
  handleBtnClick: PropTypes.func.isRequired,
};
