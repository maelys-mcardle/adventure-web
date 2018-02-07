import React from 'react';
import adventure from 'adventure';
import NavigationBar from './navbar.jsx';
import StoryText from './text.jsx';
import StoryOptions from './options.jsx';

export default class Story extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      story: props.story,
      storyText: adventure.getStoryOutput(props.story),
    };
    this.processInput = this.processInput.bind(this);
  }

  processInput(input) {
    let story = this.state.story;
    let [updatedStory, newText] = adventure.evaluateInput(story, input);
    this.setState({
      story: updatedStory,
      storyText: newText
    });
  }

  render() {
    return (
      <div>
        <NavigationBar story={this.state.story} />
        <div className="container">
          <StoryText paragraphs={this.state.storyText} />
          <StoryOptions 
            options={adventure.getInputExamples(this.state.story)} 
            processInput={this.processInput} />
        </div>
      </div>
    );
  }
}