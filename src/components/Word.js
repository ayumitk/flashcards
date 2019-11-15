import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.p`
  font-size: ${props => (props.word ? '2rem' : '1rem')};
  text-align: ${props => (props.word ? 'center' : 'left')};
  font-weight: ${props => (props.word ? 'bold' : 'normal')};
`;

class Word extends Component {
  render() {
    const { vocabulary, currentView } = this.props;

    if (currentView === 'definition') {
      return <Content definition>{vocabulary.definition}</Content>;
    }
    if (currentView === 'example') {
      return <Content example>{vocabulary.example}</Content>;
    }
    return <Content word>{vocabulary.word}</Content>;
  }
}

Word.propTypes = {
  vocabulary: PropTypes.object.isRequired,
  currentView: PropTypes.string.isRequired,
};

export default Word;
