import { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#47a89c', // Color for buttons or links
  bg: '#f5f5f5', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.2)',
  },
  white: 'white',
  secondary: '#f36979',
};

const transitions = {
  normal: '0.5s',
};

const fontSize = {
  small: '0.812rem',
};

const fontFamily = {
  serif: '\'Bitter\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Helvetica\', \'Arial\', serif',
  sansSerif: '\'Open Sans\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
};

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
};


const theme: DefaultTheme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '640px',
  baseFontSize: '18px',
}

export { theme }