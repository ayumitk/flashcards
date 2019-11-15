import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../data.json';

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

class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          単語リスト
        </Header>
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
    );
  }
}

export default Home;
