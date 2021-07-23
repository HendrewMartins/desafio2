import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CarrinhoProvider } from './hooks/useCarrinho';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </CarrinhoProvider>
    </BrowserRouter>
  );
};

export default App;
