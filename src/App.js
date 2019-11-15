import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Home from './components/Home';
import Deck from './components/Deck';
import NotFound from './components/NotFound';

const Container = styled.div`
  height:${props => props.height};
  display: grid;
  grid-template-rows: 3rem 1fr;
`;


class App extends Component {
  state = {
    height: '640px',
  }

  componentDidMount() {
    const vh = `${window.innerHeight}px`;
    this.setState({
      height: vh,
    });
  }


  render() {
    const { height } = this.state;

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container height={height} ontouchstart="">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/deck/:deckId" component={Deck} />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
