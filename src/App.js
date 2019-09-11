import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header/index';
import store from './store';
import { ToastContainer } from 'react-toastify';
import history from './service/history';
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
