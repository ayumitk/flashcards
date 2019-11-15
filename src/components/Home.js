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
  @media (min-width: 660px) {
    max-width:640px;
    margin:10px auto;
    width:100%;
  }
  @media (max-width: 659.98px) {
    margin:10px;
  }
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
            <li key={item.id}>
              <Link to={`/deck/${item.id}`}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                  {item.title}
                  <span style={{ fontSize: '0.812rem', paddingLeft: '0.5rem', fontWeight: 'normal' }}>
                    (
                    {item.vocabularies.length}
                    )
                  </span>
                </h2>
                <p style={{ fontSize: '0.812rem' }}>{item.series}</p>
                <p style={{ fontSize: '0.812rem' }}>{item.author}</p>
              </Link>
            </li>
          ))}
        </List>
      </>
    );
  }
}

export default Home;
