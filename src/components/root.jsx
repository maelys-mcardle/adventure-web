import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navbar.jsx';
import StoryText from './text.jsx';
import StoryOptions from './options.jsx';

const storyTitle = 'Adventure';
const storyText = ['Blahhhh', 'bloo'];
const storyOptions = ['one option', 'other option'];

ReactDOM.render(
  <div>
    <NavigationBar title={storyTitle} />

    <div className="container">
      <StoryText paragraphs={storyText} />
      <StoryOptions options={storyOptions} />
    </div>

  </div>,
  document.getElementById('root')
);