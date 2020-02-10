import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          <FontAwesomeIcon icon={faVideo} /> YourTube
        </span>
        <span className="navbar-text">
          Randomly Generate Organized Youtube Video Cards
        </span>
      </nav>
    );
  }
}

export default NavBar;
