import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C8A8A', // Muted blue-gray
    },
    secondary: {
      main: '#8FBF9F', // Soft green-teal for accents
    },
    background: {
      default: '#F4F6F8', // Light gray background
      paper: '#FFFFFF',  // White for containers
    },
    text: {
      primary: '#2C3E50', // Dark slate for primary text
      secondary: '#6C757D', // Muted gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
      color: '#2C3E50',
    },
    body1: {
      color: '#495057',
    },
    button: {
      textTransform: 'none', // Remove button capitalization
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Slightly rounded buttons
          padding: '10px 16px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '1rem', // Space between fields
        },
      },
    },
  },
});

export default theme;
