import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({

  palette: {
      primary: {
        primary: "#fff",
        main: "#FF4F4F",
        black: "#000",
        white: "#FFF",
        secondary: "#fff",
      },
      secondary: {
        main: "#FF4F4F",
        primary: "#fff",
      },
      searchInput: {
        main: "#fff",
        primary: "#fff",
        secondary: "#fff",
        black: "#fff",
        light: '#fff',
        dark: '#fff',
        contrastText: '#fff',
        color: '#fff'
      }
  },

  bgRosa: {
    backgroundColor: "#FF4F4F",
  },

  slider: {
    height: '560px',
    borderRadius: 0,
    backgroundPosition: 'center'
  },

  boxPages: {
    py: 3,
    display: 'flex',
    justifyContent: 'center'  
  },

  header: {
    py: 3,
    display: 'flex',
    justifyContent: 'center'  
  },

  container: {
    width: '100%',
    maxWidth: '1200px'
  },
  
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         backgroundColor: "#000",
  //       }
  //     },    
  //   }
  // },

  typography: {
    fontSize: 15,
  },
});

export default theme;