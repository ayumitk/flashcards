import React, { Component } from 'react';
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  width:100%;
  text-align:center;
`;

class NotFound extends Component {
  render() {
    return (
      <>
        <header>
          <Title>Flashcards</Title>
        </header>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ padding: '2rem 0', fontSize: '2rem' }}>Oops :(</h2>
          <p>
            Page not found! click
            {' '}
            <Link to="/">hear</Link>
            {' '}
            to return to Muchimemo Flashcards homepage.
          </p>
        </div>
      </>
    );
  }
}

export default NotFound;
