import React from 'react';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-primary">
        <span class="navbar-brand mb-0 h1">{this.props.title}</span>
      </nav>
    );
  }
}