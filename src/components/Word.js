import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Word extends Component {
  render() {
    const { vocabulary, currentView } = this.props;

    if (currentView === 'definition') {
      return <p>{vocabulary.definition}</p>;
    }
    if (currentView === 'example') {
      return <p>{vocabulary.example}</p>;
    }
    return <p>{vocabulary.word}</p>;
  }
}

Word.propTypes = {
  vocabulary: PropTypes.object.isRequired,
  currentView: PropTypes.string.isRequired,
};

export default Word;
