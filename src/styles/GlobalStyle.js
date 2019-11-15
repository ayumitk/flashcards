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
    padding:0 1rem;
    svg{
      width:1.75rem;
      height:1.75rem;
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
