import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000000',
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
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
