import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header/index';
import store from './store';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
