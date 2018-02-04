import React from 'react';
import ReactDOM from 'react-dom';
import Story from './story.jsx';

const storyTitle = 'Adventure';
const storyText = ['Blahhhh', 'bloo'];
const storyOptions = ['one option', 'other option'];

ReactDOM.render(
  <Story 
    storyTitle={storyTitle} 
    storyText={storyText} 
    storyOptions={storyOptions} />,
  document.getElementById('root')
);