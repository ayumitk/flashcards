import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import data from '../data.json';

class Deck extends Component {
  state = {
    vocabularies: [],
  }

  render() {
    const { vocabularies } = this.state;
    const { deckID } = this.props;
    const test = data.find(v => v.deckID === deckID);
    console.log(test);
    console.log(vocabularies);

    // shuffle data array
    // const shuffle = ([...arr]) => {
    //   let m = arr.length;
    //   while (m) {
    //     const i = Math.floor(Math.random() * (m -= 1));
    //     [arr[m], arr[i]] = [arr[i], arr[m]];
    //   }
    //   return arr;
    // };

    // this.setState({
    //   // vocabularies: shuffle(test),
    //   vocabularies: test,
    // });

    return (
      <div>
        deck
        {/* {vocabularies.map(item => (
          <div key={item.id}>{item.word}</div>
        ))} */}
      </div>
    );
  }
}

export default Deck;
