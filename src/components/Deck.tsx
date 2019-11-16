/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRepeat } from 'styled-icons/typicons/ArrowRepeat';
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft';
import { Helmet } from 'react-helmet';
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

type DeckProps = {
  match: {
    params: {
      id: string
      deck: object
    }
  }
}

type DeckState = {
  vocabularies: object;
  cardCount: number;
  currentView: string;
  title: string;
}

class Deck extends Component<DeckProps, DeckState> {
  state = {
    vocabularies: [],
    cardCount: 0,
    currentView: 'word',
    title: '',
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const deck: {vocabularies:object, title:string} = data.find(v => v.id === parseInt(params.id, 10));

    this.setState({
      vocabularies: deck.vocabularies,
      title: deck.title,
    } as DeckState);
  }

  switchWord = (view:string) => {
    this.setState({
      currentView: view,
    });
  }

  switchDefinition = (view:string) => {
    this.setState({
      currentView: view,
    });
  }

  switchExample = (view:string) => {
    this.setState({
      currentView: view,
    });
  }

  goPrev = (index:number) => {
    this.setState({
      cardCount: index - 1,
      currentView: 'word',
    });
  }

  goNext = (index:number) => {
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
        <Helmet>
          <title>{title}</title>
        </Helmet>

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

export default Deck;
