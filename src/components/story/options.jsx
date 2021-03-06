import React from 'react';

export default class StoryOptions extends React.Component {
  render() {
    return (
      <div className="list-group list-group-flush">
        <small className="list-group-item list-group-item-action active text-center">
        </small>
        {this.listItems()}
      </div>
    );
  }

  listItems() {
    return this.props.options.sort().map((text, index) =>
      <a 
        key={index} 
        href="#" 
        onClick={() => this.props.processInput(text)}
        className="list-group-item list-group-item-action">
        {text}
      </a>
    );
  }
}