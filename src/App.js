/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ArrowRepeat } from 'styled-icons/typicons/ArrowRepeat';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Card from './components/Card';
import data from './data.json';

const Container = styled.div`
  height: 100vh;
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
    vocabularies: [],
    cardCount: 0,
    currentView: 'word',
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

    this.setState({
      vocabularies: shuffle(data),
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
    const { vocabularies, cardCount, currentView } = this.state;
    const lastCard = vocabularies.length - 1;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container>
            <Header>
              <p>
                {cardCount + 1}
                <span> / </span>
                {vocabularies.length}
                <span> words</span>
              </p>
              <ArrowRepeat onClick={this.shuffleData} />
            </Header>
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
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
