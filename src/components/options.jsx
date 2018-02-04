import React from 'react';

export default class StoryOptions extends React.Component {
  render() {
    return (
      <div className="list-group top-spacer">
        {this.listItems()}
      </div>
    );
  }

  listItems() {
    return this.props.options.map((text) =>
      <a key={text} href="#" className="list-group-item list-group-item-action">
        {text}
      </a>
    );
  }
}