/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ArrowRepeat } from 'styled-icons/typicons/ArrowRepeat';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Card from './components/Card';
import data from './data.json';

import Home from './components/Home';
import Deck from './components/Deck';

const Container = styled.div`
  height:${props => props.height};
  display: grid;
  grid-template-rows: 3rem 1fr;
  max-width: 640px;
  margin: auto;
`;

const Header = styled.header`
  background: ${props => props.theme.colors.grey.dark};
  color:${props => props.theme.colors.white};
  display:flex;
  justify-content:space-between;
  grid-row: 1;
  align-items:center;
  padding:0 1rem;
  p{
    font-size:0.875rem;
  }
  svg{
    width:1.75rem;
    height:1.75rem;
    cursor: pointer;
  }
`;

const Main = styled.main`
  grid-row: 2;
`;


class App extends Component {
  state = {
    deckID: 1,
    vocabularies: [],
    cardCount: 0,
    currentView: 'word',
    height: '640px',
  }

  componentDidMount() {
    // shuffle data array
    const shuffle = ([...arr]) => {
      let m = arr.length;
      while (m) {
        const i = Math.floor(Math.random() * (m -= 1));
        [arr[m], arr[i]] = [arr[i], arr[m]];
      }
      return arr;
    };

    const vh = `${window.innerHeight}px`;

    this.setState({
      vocabularies: shuffle(data),
      height: vh,
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
      deckID, vocabularies, cardCount, currentView, height,
    } = this.state;
    const lastCard = vocabularies.length - 1;

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container height={height}>
            <Router>
              <Header>
                <Link to="/">Home</Link>
                <Link to="/Deck">Deck</Link>
                <p>
                  {cardCount + 1}
                  <span> / </span>
                  {vocabularies.length}
                  <span> words</span>
                </p>
                <ArrowRepeat onClick={this.shuffleData} />
              </Header>


              <Route exact path="/" component={Home} />
              <Route path="/Deck" render={props => <Deck deckID={deckID} {...props} />} />


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
            </Router>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
