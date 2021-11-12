import React from "react";
import "./index.css";

import BattlePage from "./Pages/BattlePage";
import ReposPage from "./Pages/ReposPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <ReposPage />
        <BattlePage />
      </div>
    );
  }
}

export default App;
