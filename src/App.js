import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
        <Helmet titleTemplate="%s - M/M Romance Book Flashcards" defaultTitle="M/M Romance Book Flashcards">
          <meta charSet="utf-8" />
          <meta name="description" content="Let's learn vocabularies from M/M Romance Book!" />
          <link rel="canonical" href="https://flashcards.muchimemo.com/" />
        </Helmet>

        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container height={height} ontouchstart="">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/deck/:id" component={Deck} />
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
