import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Word from './Word';

class Card extends Component {
  switchWord = () => {
    const { onSwitchWord } = this.props;
    onSwitchWord('word');
  }

  switchDefinition = () => {
    const { onSwitchDefinition } = this.props;
    onSwitchDefinition('definition');
  }

  switchExample = () => {
    const { onSwitchExample } = this.props;
    onSwitchExample('example');
  }

  gotIt = (index) => {
    const { onGotIt } = this.props;
    onGotIt(index);
  }

  studyAgain = (index) => {
    const { onStudyAgain } = this.props;
    onStudyAgain(index);
  }

  render() {
    const {
      vocabulary, cardCount, index, currentView, lastCard,
    } = this.props;

    if (cardCount !== index) {
      return '';
    }

    return (
      <div className="card">
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

Card.propTypes = {
  onSwitchWord: PropTypes.func.isRequired,
  onSwitchDefinition: PropTypes.func.isRequired,
  onSwitchExample: PropTypes.func.isRequired,
  onGotIt: PropTypes.func.isRequired,
  onStudyAgain: PropTypes.func.isRequired,
  vocabulary: PropTypes.object.isRequired,
  cardCount: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  currentView: PropTypes.string.isRequired,
  lastCard: PropTypes.number.isRequired,
};

export default Card;
