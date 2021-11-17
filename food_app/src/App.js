import React from "react";
import "./index.css";
import Header from "./components/Header";
import CardList from "./Pages/CardList";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <CardList />
      </>
    );
  }
}

export default App;
