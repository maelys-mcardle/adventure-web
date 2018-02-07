import React from 'react';

export default class StoryText extends React.Component {
  render() {
    this.speakText(this.props.paragraphs);
    return (
      <div className="card top-spacer">
        <div className="card-body">
          {this.textParagraphs()}          
        </div>
      </div>
    );
  }

  speakText(paragraphs) {
    let text = paragraphs.join('\n');
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = voices[0];
    synth.speak(utterThis);
  }

  textParagraphs() {
    return this.props.paragraphs.map((paragraph, index) =>
      <p key={index}>
        {paragraph}
      </p>
    );
  }
}