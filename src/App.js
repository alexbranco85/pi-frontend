import React from 'react';
import Router from './pages/router';
import Header from './components/Header';
import Footer from './components/Footer';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>

        <Router />

      </Provider>
    </>
  );
}

export default App;
