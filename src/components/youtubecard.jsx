import React, { Component } from "react";
class YoutubeCard extends Component {
  render() {
    const link = (
      <iframe
        title={this.props.title}
        src={`https://www.youtube.com/embed/${this.props.videoId}`}
        frameBorder={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
    return (
      <div className="col-md-3 ">
        <div className="card shadow-sm p-3 mb-5 bg-white rounded h-100">
          {link}
          <div className="card-body">
            <p className="card-text">
              <b>Title:</b> <span>{this.props.title}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeCard;

/**/
