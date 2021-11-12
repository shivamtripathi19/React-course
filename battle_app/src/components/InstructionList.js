import React from "react";
import "../static/css/instructionList.css";
export default function InstructionList() {
  return (
    <div className="instructions">
      <h1 className="centerText header">Instructions</h1>
      <ul className="container-sm grid battle">
        <li className="header-sm">
          <h3 className="centerText">Enter two Github users</h3>
          <div style={{ fontSize: "60px" }} className="bg-light">
            👨🏻‍💻
          </div>
        </li>
        <li className="header-sm">
          <h3 className="centerText">Battle</h3>
          <div style={{ fontSize: "60px" }} className="bg-light ">
            🚀
          </div>
        </li>
        <li className="header-sm">
          <h3 className="centerText">See the winners</h3>
          <div style={{ fontSize: "60px" }} className="bg-light">
            🏆
          </div>
        </li>
      </ul>
    </div>
  );
}
