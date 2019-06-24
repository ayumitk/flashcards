import React, { Component } from 'react';
import Word from './Word';

class Card extends Component {
  switchWord = () => {
    this.props.onSwitchWord('word');
  }

  switchDefinition = () => {
    this.props.onSwitchDefinition('definition');
  }

  switchExample = () => {
    this.props.onSwitchExample('example');
  }

  gotIt = (index) => {
    this.props.onGotIt(index);
  }

  studyAgain = (index) => {
    this.props.onStudyAgain(index);
  }

  render() {
    const {
      vocabulary, cardCount, index, currentView, lastCard,
    } = this.props;
    return (
      <div className={`card ${cardCount === index ? 'active' : ''}`}>
        <div className="card-body">
          <Word
            vocabulary={vocabulary}
            currentView={currentView}
          />
          <button type="button" className={`btn btn-outline-secondary ${currentView === 'word' ? 'active' : ''}`} onClick={this.switchWord}>Word</button>
          <button type="button" className={`btn btn-outline-secondary ${currentView === 'definition' ? 'active' : ''}`} onClick={this.switchDefinition}>Definition</button>
          <button type="button" className={`btn btn-outline-secondary ${currentView === 'example' ? 'active' : ''}`} onClick={this.switchExample}>Example</button>
          <button type="button" className={`btn btn-info ${lastCard === index ? 'd-none' : ''}`} onClick={() => this.gotIt(index)}>Got It!</button>
          <button type="button" className={`btn btn-danger ${lastCard === index ? 'd-none' : ''}`} onClick={() => this.studyAgain(index)}>Study Again!</button>
        </div>
      </div>
    );
  }
}

export default Card;
