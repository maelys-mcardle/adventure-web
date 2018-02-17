import React from 'react';

export default class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showConfirmStartOver: false
    };
  }

  setConfirmStartOver(value) {
    this.setState({
      showConfirmStartOver: value,
    })
  }

  startOver() {
    this.props.restart();
    this.setConfirmStartOver(false);
  }

  renderStartOverButton() {
    if (!this.state.showConfirmStartOver) {
      return (
        <button 
          className="btn btn-outline-light" 
          type="button"
          onClick={() => this.setConfirmStartOver(true)}>
          Start Over
        </button>
      );
    } else {
      return (
        <span>
          <span className="navbar-brand">
            Are you sure?
          </span>
          <button 
            className="btn btn-danger left-spacer" 
            type="button"
            onClick={() => this.startOver()}>
            Yes
          </button>
          <button 
            className="btn btn-outline-light left-spacer" 
            type="button"
            onClick={() => this.setConfirmStartOver(false)}>
            No
          </button>
        </span>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary justify-content-between">
        <span className="navbar-brand mb-0 h1 d-none d-sm-block">
          "{this.props.story.title}" by {this.props.story.author}
        </span>
        <form className="form-inline">
          {this.renderStartOverButton()}
          <button 
            className="btn btn-outline-light left-spacer" 
            type="button"
            onClick={this.props.speak}>
            <i className="fas fa-volume-up"></i>
          </button>
        </form>
      </nav>
    );
  }
}