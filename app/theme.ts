'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9C27B0',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    h6: {
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 25,
          fontSize: '1rem',
          fontWeight: 500,
          padding: '12px 24px',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 4,
          borderRadius: 2,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
          width: '100%',
          padding: '12px 16px',
          borderRadius: 8,
          border: '1px solid rgba(0, 0, 0, 0.12)',
          marginBottom: 12,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(33, 150, 243, 0.04)',
            borderColor: '#2196F3',
          },
        },
        label: {
          flex: 1,
          marginLeft: 8,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});