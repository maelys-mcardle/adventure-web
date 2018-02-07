import React from 'react';
import ReactDOM from 'react-dom';
import Story from './story/story.jsx';
import story from '../../dist/story';

ReactDOM.render(
  <Story story={story} />,
  document.getElementById('root')
);