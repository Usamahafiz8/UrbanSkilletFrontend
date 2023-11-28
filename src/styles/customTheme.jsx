// theme.js
import { createTheme } from '@mui/material/styles';

const CUSTOM_THEME = createTheme({
  // Your custom theme configuration goes here
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: '34px',
          color: 'black', // Set text color to black
          borderColor: 'black', // Set border color to black
        },
        text: {
          fontFamily: 'Inter, sans-serif',
          borderRadius: '34px',
          color: 'black', // Set text color to black
          borderColor: 'black', // Set border color to black
        },
        // You can add more styles for other button variants if needed
      },
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', 

  },
});

export default CUSTOM_THEME;
