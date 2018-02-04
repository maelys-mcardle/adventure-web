import React from 'react';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">{this.props.title}</span>
      </nav>
    );
  }
}