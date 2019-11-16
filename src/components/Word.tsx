import React, { Component } from 'react';
import styled from 'styled-components';

interface ContentProps {
  word: string
};

type WordProps = {
  vocabulary: {
    word: string;
    definition: string
    example: string
  }
  currentView: string
};

const Content = styled.p<ContentProps>`
  font-size: ${props => (props.word ? '2rem' : '1rem')};
  text-align: ${props => (props.word ? 'center' : 'left')};
  font-weight: ${props => (props.word ? 'bold' : 'normal')};
`;

class Word extends Component<WordProps> {
  render() {
    const { vocabulary, currentView } = this.props;

    // if (currentView === 'definition') {
    //   return <Content {currentView}>{vocabulary.definition}</Content>;
    // }
    // if (currentView === 'example') {
    //   return <Content {currentView}>{vocabulary.example}</Content>;
    // }

    return (
      <>
        <Content {currentView}>{vocabulary.currentView}</Content>
      </>
    );
  }
}

export default Word;
