import React from 'react';
import NavigationBar from './navbar.jsx';
import StoryText from './text.jsx';
import StoryOptions from './options.jsx';

export default class Story extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar title={this.props.storyTitle} />
        <div className="container">
          <StoryText paragraphs={this.props.storyText} />
          <StoryOptions options={this.props.storyOptions} />
        </div>
      </div>
    );
  }
}