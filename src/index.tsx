import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from "./store";
import TicketsService from "./service/ticketsService";
import {TicketsStoreServiceProvider} from './context/TicketsStoreServiceContext'

const ticketsService = new TicketsService();

ReactDOM.render(
  <Provider store={store}>
      <TicketsStoreServiceProvider value={ticketsService}>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </TicketsStoreServiceProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
