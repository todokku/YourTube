import React, { Component } from "react";
class SearchBar extends Component {
  render() {
    return (
      <form>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Enter channel keywords"
                aria-label="Search"
                onChange={this.props.searchString}
              />
            </div>
            <div className="col-md-2">
              <select
                onChange={this.props.maxResults}
                className="custom-select"
              >
                <option value={false} defaultChecked>
                  Quantity
                </option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
              </select>
            </div>
            <div className="col-md-2">
              <button
                onClick={this.props.searchButton}
                className="btn btn-dark btn-block"
                type="submit"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
