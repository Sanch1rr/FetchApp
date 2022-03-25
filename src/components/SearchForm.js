import React, { Component } from "react";

export default class SearchForm extends Component {
  render() {
    return (
      <div>
        <form className="search-form">
          <label className="is-hidden" htmlFor="search">
            Search
          </label>
          <input type="search" name="search" placeholder="Search...."></input>
          <button type="submit" id="submit" className="search-button">
            <i className="material-icons icn-search"></i>
          </button>
        </form>
      </div>
    );
  }
}
