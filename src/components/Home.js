import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../data.json';

class Home extends Component {
  render() {
    return (
      <>
        <header>
          単語リスト
        </header>
        <div>
          {data.map(item => (
            <div key={item.deckId}>
              <Link to={`/deck/${item.deckId}`}>
                {item.deckTitle}
                <span>
                  (
                  {item.vocabularies.length}
                  )
                </span>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Home;
