import React, { Component } from 'react';

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

export default Word;
