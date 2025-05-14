import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#12AA9E',
      light: '#4FC3BB',
      dark: '#0B7A71',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6B9AC4',
      light: '#8FB3D3',
      dark: '#4A7BA9',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Arial", sans-serif',
    h1: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Inter", "Arial", sans-serif',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '10px 20px',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;