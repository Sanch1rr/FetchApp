import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }
  componentDidMount() {
    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=7AH1655auFDNR3kT7aSJfxvP7nfezgrj"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div className="mean-header">
        <div className="inner">
          <h1 className="main-title">Search form</h1>
          <SearchForm />
        </div>
        <div className="main-content"></div>
        <GifList />
      </div>
    );
  }
}

export default App;
