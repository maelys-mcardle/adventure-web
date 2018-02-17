import React from 'react';

export default class StoryText extends React.Component {
  render() {
    return (
      <div className="card-body">
        {this.textParagraphs()}          
      </div>
    );
  }

  textParagraphs() {
    return this.props.paragraphs.map((paragraph, index) =>
      <p key={index}>
        {paragraph}
      </p>
    );
  }
}