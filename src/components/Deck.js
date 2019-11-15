/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowRepeat } from 'styled-icons/typicons/ArrowRepeat';
import data from '../data.json';
import Card from './Card';

const Main = styled.main`
  grid-row: 2;
`;

class Deck extends Component {
  state = {
    vocabularies: [],
    cardCount: 0,
    currentView: 'word',
    title: '',
  }

  componentDidMount() {
    const { deckId } = this.props.match.params;
    const deck = data.find(v => v.deckId === parseInt(deckId, 10));

    this.setState({
      vocabularies: deck.vocabularies,
      title: deck.deckTitle,
    });
  }

  switchWord = (view) => {
    this.setState({
      currentView: view,
    });
  }

  switchDefinition = (view) => {
    this.setState({
      currentView: view,
    });
  }

  switchExample = (view) => {
    this.setState({
      currentView: view,
    });
  }

  goPrev = (index) => {
    this.setState({
      cardCount: index - 1,
      currentView: 'word',
    });
  }

  goNext = (index) => {
    this.setState({
      cardCount: index + 1,
      currentView: 'word',
    });
  }

  shuffleData = () => {
    const { vocabularies } = this.state;

    const shuffle = ([...arr]) => {
      let m = arr.length;
      while (m) {
        const i = Math.floor(Math.random() * (m -= 1));
        [arr[m], arr[i]] = [arr[i], arr[m]];
      }
      return arr;
    };

    this.setState({
      vocabularies: shuffle(vocabularies),
      cardCount: 0,
      currentView: 'word',
    });
  }

  render() {
    const {
      vocabularies, cardCount, currentView, title,
    } = this.state;
    const lastCard = vocabularies.length - 1;

    return (
      <>
        <header>
          <Link to="/">Home</Link>
          <p>{title}</p>
          <ArrowRepeat onClick={this.shuffleData} />
        </header>

        <p>
          {cardCount + 1}
          <span> / </span>
          {vocabularies.length}
          <span> words</span>
        </p>

        <Main>
          {vocabularies.map((item, index) => (
            <Card
              key={item.id}
              vocabulary={item}
              cardCount={cardCount}
              index={index}
              currentView={currentView}
              lastCard={lastCard}
              onSwitchWord={this.switchWord}
              onSwitchDefinition={this.switchDefinition}
              onSwitchExample={this.switchExample}
              onGoPrev={this.goPrev}
              onGoNext={this.goNext}
            />
          ))}
        </Main>
      </>
    );
  }
}

export default Deck;
