import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data.json';

const Title = styled.h1`
  width:100%;
  text-align:center;
`;

const List = styled.ul`
  list-style:none;
  padding:0;
  margin:0.5rem;
  li{
    a{
      background:${props => props.theme.colors.white};
      border: solid 1px ${props => props.theme.colors.grey.ultraLight};
      display:block;
      margin-bottom:0.25rem;
      padding:1rem;
      text-decoration:none;
      color:${props => props.theme.colors.grey.dark};
      border-radius:0.25rem;
      line-height:1.25;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <Title>Flashcards</Title>
        </header>
        <List>
          {data.map(item => (
            <li key={item.deckId}>
              <Link to={`/deck/${item.deckId}`}>
                <div>
                  {item.title}
                  <span style={{ fontSize: '0.812rem', paddingLeft: '0.5rem' }}>
                    (
                    {item.vocabularies.length}
                    )
                  </span>
                </div>
                <span style={{ fontSize: '0.812rem' }}>{item.author}</span>
              </Link>
            </li>
          ))}
        </List>
      </>
    );
  }
}

export default Home;
