import React from 'react';
import Router from './pages/router';
import Header from './components/Header';
import Footer from './components/Footer';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Router />
        <Footer />
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
