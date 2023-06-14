import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({

  palette: {
    primary: {
      main: "#FF4F4F",
      black: "#000",
      white: "#FFF",
      secondary: "#fff",
      gray: "#D9D9D9"
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
  productCard: {
    pb: 6,
    background: 'linear-gradient(180deg, #F6F6F6 0%, #D6D6D6 100%)',
    borderRadius: 3,
    textAlign: 'center',
    ':hover': { background: '#000', color: '#fff' }
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
    maxWidth: '1240px'
  },

  typography: {
    fontFamily: 'Lato, Verdana',
    fontSize: 15,

    h1: {
      fontSize: '32px',
      fontWeight: 'bold',
    },

    h2: {
      fontSize: '24px',
      color: '#000',
      marginBottom: 10,
      marginTop: 10
    },
  },
});

export default theme;