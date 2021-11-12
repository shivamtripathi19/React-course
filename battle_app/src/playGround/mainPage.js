import React, { Component } from "react";
import Name from "./playGround/Names";
import GetNamed from "./playGround/GetNamed";
import Counter from "./playGround/Counter";
import List from "./playGround/List";
const list = [
  { id: "001", name: "Shivam" },
  { id: "002", name: "garry" },
  { id: "003", name: "bham" },
  { id: "004", name: "peeyesh" },
  { id: "005", name: "jai" },
];

export default class mainPage extends Component {
  handleClick = (e) => {
    console.log("Im clicked");
  };
  render() {
    return (
      <div>
        <h1>Shivam</h1>
        <Name name={`Shivam\tMani\tTripathi`} />
        <GetNamed name={`Shivam`} handleClick={this.handleClick} />
        <List title="Friends List" friendList={list} />
        <Counter />
      </div>
    );
  }
}
