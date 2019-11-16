import React, { Component } from 'react';
import { ChevronRight } from 'styled-icons/boxicons-regular/ChevronRight';
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft';
import styled from 'styled-components';
import Word from './Word';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1.5rem 1fr 3rem;
  height: 100%;
`;

interface ButtonProps {
  active: boolean
};

const Button = styled.button<ButtonProps>`
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  opacity: ${props => (props.disabled ? '0.25' : '1')};
  background: ${props => (props.active ? props.theme.colors.grey.light : props.theme.colors.white)};
  color: ${props => (props.active ? props.theme.colors.white : props.theme.colors.grey.dark)};
`;

const ButtonGroup = styled.div`
  padding:1rem;
  display: inline-flex;
  button{
    width:33.33%;
    border-radius:1rem;
    &:not(:last-child){
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -1px;
    }
  }
`;

const CardContainer = styled.div`
  border: solid 1px ${props => props.theme.colors.grey.ultraLight};
  background: ${props => props.theme.colors.white};
  margin:10px 0;
  border-radius: 0.25rem;
  display: grid;
  grid-template-rows: 1fr 4rem;
`;

const PrevNext = styled.div`
  display:flex;
  justify-content:space-between;
  button{
    background: ${props => props.theme.colors.grey.dark};
    color: ${props => props.theme.colors.white};
    width:3rem;
    height:3rem;
    border-radius:50%;
    svg{
      width:1.75rem;
      height:1.75rem;
    }
  }
`;

const WordContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:1rem;
`;

type CardProps = {
  onSwitchWord: any
  onSwitchDefinition: any
  onSwitchExample: any
  onGoPrev: any
  onGoNext: any
  lastCard:number
  vocabulary:object
  cardCount:number
  index: number
  currentView: string
  allCards: number
};

class Card extends Component<CardProps> {
  switchWord = () => {
    const { onSwitchWord } = this.props;
    onSwitchWord('word');
  }

  switchDefinition = () => {
    const { onSwitchDefinition } = this.props;
    onSwitchDefinition('definition');
  }

  switchExample = () => {
    const { onSwitchExample } = this.props;
    onSwitchExample('example');
  }

  goPrev = (index:number) => {
    const { onGoPrev } = this.props;
    if (index !== 0) {
      onGoPrev(index);
    }
  }

  goNext = (index:number) => {
    const { onGoNext, lastCard } = this.props;
    if (lastCard !== index) {
      onGoNext(index);
    }
  }

  render() {
    const {
      vocabulary, cardCount, index, currentView, lastCard, allCards,
    } = this.props;

    if (cardCount !== index) {
      return '';
    }

    return (
      <Container>
        <p style={{ fontSize: '0.812rem', textAlign: 'center', margin: 'auto' }}>
          {cardCount + 1}
          <span> / </span>
          {allCards}
          <span> words</span>
        </p>
        <CardContainer>
          <WordContainer>
            <Word
              vocabulary={vocabulary}
              currentView={currentView}
            />
          </WordContainer>
          <ButtonGroup>
            <Button type="button" active={currentView === 'word'} onClick={this.switchWord}>Word</Button>
            <Button type="button" active={currentView === 'definition'} onClick={this.switchDefinition}>Definition</Button>
            <Button type="button" active={currentView === 'example'} onClick={this.switchExample}>Example</Button>
          </ButtonGroup>
        </CardContainer>
        <PrevNext>
          <Button
            type="button"
            disabled={index === 0}
            onClick={() => this.goPrev(index)}
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            disabled={lastCard === index}
            onClick={() => this.goNext(index)}
          >
            <ChevronRight />
          </Button>
        </PrevNext>
      </Container>
    );
  }
}

export default Card;
