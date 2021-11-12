import React, { Component } from "react";
import { fetchRepos } from "../static/utils/api";
import NavList from "../components/NavList";
import RepoList from "../components/RepoList";
export default class ReposList extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "All", repos: {}, error: null };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  componentDidMount() {
    this.handleBtnClick();
  }

  handleBtnClick(newlanguage = "All") {
    this.setState({ language: newlanguage, error: null });
    if (!this.state.repos[newlanguage]) {
      fetchRepos(this.state.language)
        .then((data) =>
          this.setState(({ repos }) => ({
            repos: { ...repos, [this.state.language]: data },
          }))
        )
        .catch((err) => {
          console.log(err);
          this.setState({
            error: "There was an error fetching the repositories",
          });
        });
    }
  }

  isLoading = () => {
    return !this.state.repos[this.state.language] && this.state.error === null;
  };

  render() {
    return (
      <div>
        <NavList
          selectLanguage={this.state.language}
          handleBtnClick={this.handleBtnClick}
        />
        {this.isLoading() && <p>Loading...</p>}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.repos[this.state.language] && (
          <RepoList repos={this.state.repos[this.state.language]} />
        )}
      </div>
    );
  }
}
