import React, { Component } from 'react';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  state = {
    vocabularies: [
      {
        id: 1,
        word: 'reputation',
        definition: '評判,世評',
        example: 'Maybe it was supposed to be a smile. Probably not, given Kennedy\'s reputaton.',
        ok: 0,
        ng: 0,
      },
      {
        id: 2,
        word: 'obnoxious',
        definition: '気に障る,不快な',
        example: 'Top note sandalwood, bottom note obnoxious.',
        ok: 0,
        ng: 0,
      },
      {
        id: 3,
        word: 'steeple',
        definition: '(教会などの)尖塔(せんとう)',
        example: 'White churches with tall steeples',
        ok: 0,
        ng: 0,
      },
    ],
    cardCount: 0,
    currentView: 'word',
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

  gotIt = (index) => {
    this.setState({
      cardCount: index + 1,
    });
  }

  studyAgain = (index) => {
    this.setState({
      cardCount: index + 1,
    });
  }

  render() {
    const { vocabularies, cardCount, currentView } = this.state;
    const lastCard = vocabularies.length - 1;
    return (
      <div className="container">
        <p>
          {cardCount + 1}
          <span> / </span>
          {vocabularies.length}
          <span> words</span>
        </p>
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
            onGotIt={this.gotIt}
            onStudyAgain={this.studyAgain}
          />
        ))}
      </div>
    );
  }
}

export default App;
