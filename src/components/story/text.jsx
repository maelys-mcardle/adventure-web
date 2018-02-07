import React from 'react';

export default class StoryText extends React.Component {
  render() {
    return (
      <div className="card top-spacer">
        <div className="card-body">
          {this.textParagraphs()}          
        </div>
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