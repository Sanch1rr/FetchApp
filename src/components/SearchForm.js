import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    searchText: "",
  };
  onSearchChange = (e) => {
    console.log(e);
    // this.props.onSearch(this.state.searchText);
    this.setState({ searchText: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);

    e.currentTarget.reset();
  };
  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label className="is-hidden" htmlFor="search">
            Search
          </label>
          <input
            type="search"
            name="search"
            placeholder="Search...."
            onChange={this.onSearchChange}
          ></input>
          <button type="submit" id="submit" className="search-button">
            <i className="material-icons icn-search"></i>
          </button>
        </form>
      </div>
    );
  }
}
