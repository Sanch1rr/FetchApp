import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }
  componentDidMount() {
    // fetch(
    //   "http://api.giphy.com/v1/gifs/trending?api_key=7AH1655auFDNR3kT7aSJfxvP7nfezgrj"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ gifs: data.data });
    //   })
    //   .catch((error) => {
    //     console.log("Error fetching and parsing data", error);
    //   });

    axios
      .get(
        "http://api.giphy.com/v1/gifs/trending?api_key=7AH1655auFDNR3kT7aSJfxvP7nfezgrj"
      )
      .then((response) => {
        this.setState({
          gifs: response.data.data,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }
  render() {
    console.log(this.state.gifs);
    return (
      <div className="mean-header">
        <div className="inner">
          <h1 className="main-title">Search form</h1>
          <SearchForm />
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
