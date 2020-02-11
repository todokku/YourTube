import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import YoutubeCard from "./components/youtubecard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      maxVideoIds: 0,
      channelId: "",
      videoItemsArray: []
    };
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleSearchString = this.handleSearchString.bind(this);
    this.handleMaxResults = this.handleMaxResults.bind(this);
  }

  async handleSearchButton(e) {
    e.preventDefault();
    const KEY = "AIzaSyCOBXIlX2CUetmOTJph15TSmoWEaMYTI9k";
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${this.state.q}&type=channel&key=${KEY}`
    )
      .then(res => res.json())
      .then(res => {
        const channelId = res.items[0].id.channelId;
        this.setState({ channelId });
      });

    await this.fetchVideoItems(KEY);
  }

  async fetchVideoItems(KEY) {
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${KEY}&channelId=${this.state.channelId}&part=snippet,id&order=date&maxResults=50`
    )
      .then(res => res.json())
      .then(res => {
        const allVideoItemsArray = res.items;
        let videoItemsArray = this.getRandomVideos(allVideoItemsArray);
        this.setState({ videoItemsArray });
      });
  }

  async handleSearchString(e) {
    const q = e.target.value;
    await this.setState({ q });
  }

  async handleMaxResults(e) {
    const maxResults = e.target.value;
    await this.setState({
      maxVideoIds: maxResults
    });
  }

  getRandomVideos(allVideoItemsArray) {
    let videoItemsArray = [];
    const { maxVideoIds } = this.state;
    for (let i = 0; i < maxVideoIds; i++) {
      videoItemsArray.push(
        allVideoItemsArray[
          Math.floor(50 * (Math.random() * (1 / maxVideoIds) + i / maxVideoIds))
        ]
      );
    }
    return videoItemsArray;
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SearchBar
          searchButton={this.handleSearchButton}
          searchString={this.handleSearchString}
          maxResults={this.handleMaxResults}
        />
        <div className="container">
          <div className="row">
            {this.state.videoItemsArray.map(e => (
              <YoutubeCard
                key={e.id.videoId}
                videoId={e.id.videoId}
                title={e.snippet.title}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
