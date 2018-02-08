import React from 'react';
import adventure from 'adventure';
import NavigationBar from './navbar.jsx';
import StoryText from './text.jsx';
import StoryOptions from './options.jsx';

const STORAGE_LOCATION = "adventure-story";

export default class Story extends React.Component {

  constructor(props) {
    super(props);
    let story = this.loadStory(props);
    this.state = {
      story: story,
      storyText: adventure.getStoryOutput(story),
    };
    this.processInput = this.processInput.bind(this);
    this.speak = this.speak.bind(this);
    this.clearStory = this.clearStory.bind(this);
  }

  loadStory(props) {
    let story = props.story;
    let storage = window.localStorage;
    let storyAsJson = storage.getItem(STORAGE_LOCATION);
    if (storyAsJson) {
      story = JSON.parse(storyAsJson);
    }
    return story;
  }

  storeStory(story) {
    let storage = window.localStorage;
    let storyAsJson = JSON.stringify(story);
    storage.setItem(STORAGE_LOCATION, storyAsJson);
  }

  clearStory() {
    let storage = window.localStorage;
    storage.removeItem(STORAGE_LOCATION);
    this.setState({
      story: this.props.story,
      storyText: adventure.getStoryOutput(this.props.story),
    });
  }

  processInput(input) {
    let story = this.state.story;
    let [updatedStory, newText] = adventure.evaluateInput(story, input);
    this.setState({
      story: updatedStory,
      storyText: newText
    });
    this.storeStory(updatedStory);
  }

  speak() {
    let text = this.state.storyText.join('\n');
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voices[0];
    synth.speak(utterThis);
  }

  render() {
    return (
      <div>
        <NavigationBar 
          story={this.state.story} 
          speak={this.speak}
          restart={this.clearStory} />
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