import React from 'react';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary justify-content-between">
        <span className="navbar-brand mb-0 h1">
          "{this.props.story.title}" by {this.props.story.author}
        </span>
        <form className="form-inline">
          <button className="btn btn-outline-light" type="button">
            <i className="fas fa-volume-up"></i>
          </button>
          <button className="btn btn-outline-light left-spacer" type="button">
            <i className="fas fa-microphone"></i>
          </button>
        </form>
      </nav>
    );
  }
}