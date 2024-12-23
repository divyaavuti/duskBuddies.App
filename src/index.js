import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new createRoot API
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
