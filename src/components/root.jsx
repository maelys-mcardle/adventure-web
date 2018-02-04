import React from 'react';
import ReactDOM from 'react-dom';
import Story from './story.jsx';
import adventure from 'adventure';
import story from '../../dist/story';

const storyTitle = story.title;
const storyText = adventure.getStoryOutput(story);
const storyOptions = adventure.getInputExamples(story);

ReactDOM.render(
  <Story 
    storyTitle={storyTitle} 
    storyText={storyText} 
    storyOptions={storyOptions} />,
  document.getElementById('root')
);