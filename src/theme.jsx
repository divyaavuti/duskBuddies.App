import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a3c4f3', // Pastel blue
    },
    secondary: {
      main: '#f8c3c3', // Pastel pink
    },
    background: {
      default: '#f9f9f9', // Light pastel background
    },
    text: {
      primary: '#333', // Neutral dark
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});


export default theme;
