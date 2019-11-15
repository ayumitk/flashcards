/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowRepeat } from 'styled-icons/typicons/ArrowRepeat';
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft';
import data from '../data.json';
import Card from './Card';

const Title = styled.h1`
  text-align:center;
`;

const Main = styled.main`
  grid-row: 2;
  @media (min-width: 660px) {
    max-width:640px;
    margin:10px auto;
    width:100%;
  }
  @media (max-width: 659.98px) {
    margin:10px;
  }
`;

class Deck extends Component {
  state = {
    vocabularies: [],
    cardCount: 0,
    currentView: 'word',
    title: '',
  }

  componentDidMount() {
    // const { deckId } = this.props.match.params;
    const { match: { params } } = this.props;
    const deck = data.find(v => v.deckId === parseInt(params.deckId, 10));

    this.setState({
      vocabularies: deck.vocabularies,
      title: deck.title,
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
    const allCards = vocabularies.length;

    return (
      <>
        <header>
          <Link to="/"><ChevronLeft /></Link>
          <Title>{title}</Title>
          <button type="button" onClick={this.shuffleData}>
            <ArrowRepeat />
          </button>
        </header>

        <Main>
          {vocabularies.map((item, index) => (
            <Card
              key={item.id}
              vocabulary={item}
              cardCount={cardCount}
              index={index}
              currentView={currentView}
              lastCard={lastCard}
              allCards={allCards}
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

Deck.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      deckId: PropTypes.string,
    }),
  }).isRequired,
};

export default Deck;
