import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0,0,0)',
    },
    secondary: {
      main: '#1E2761',
    },
    error: {
      main: red.A400,
    },
  },
});
