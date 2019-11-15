import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body,
  p {
    padding: 0;
    margin: 0;
  }
  body{
    background: ${theme.colors.bg};
    font-family: ${theme.fontFamily.sansSerif};
    font-size: ${theme.baseFontSize};
    line-height: 1.6;
  }
  svg{
    width:1rem;
    height:1rem;
  }
  button{
    border: solid 1px ${theme.colors.grey.light};
    background: transparent;
    border-radius: 0.25rem;
    padding:0.5rem;
    cursor: pointer;
    &:hover{
      background:${theme.colors.grey.ultraLight};
    }
    &:active,
    &:focus{
      background:${theme.colors.grey.light};
      color:${theme.colors.white};
    }
  }
  header{
    background: ${theme.colors.grey.dark};
    color:${theme.colors.white};
    display:flex;
    justify-content:space-between;
    grid-row: 1;
    align-items:center;
    /* padding:0 1rem; */
    h1{
      font-size:1rem;
      line-height:1.25;
    }
    a,
    button{
      width: 2.5rem;
      height: 2.5rem;
      /* border: solid 1px red; */
      margin: 0.25rem;
      border-radius: 50%;
      padding: 0.25rem;
      /* line-height:1; */
      svg{
        width:1.75rem;
        height:1.75rem;
        fill: ${theme.colors.white};
      }
      &:active,
      &:hover,
      &:focus{
        background:rgba(255,255,255,0.2);
      }
    }
  }
`;

export default GlobalStyle;
