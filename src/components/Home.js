import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../data.json';

class Home extends Component {
  render() {
    return (
      <div>
        home
        {data.map(item => (
          <div>
            <Link to="/Deck" key={item.deckID}>{item.deckID}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
