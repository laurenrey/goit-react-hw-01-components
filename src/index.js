import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    gray: '#444444',
    background: '#fff0db',
    backgroundSecondary: '#eed9c4',
    online: '#00FF00',
    offline: '#FF0000',
  },
  fontSizes: {
    xs: '14px',
    s: '18px',
    m: '20px',
    l: '24px',
    xl: '28px',
  },
  shadows: {
    shadow: '6px 16px 19px -8px rgba(90, 83, 83, 0.74)',
  },
  radii: {
    bradius: '4px',
    round: '50%',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
