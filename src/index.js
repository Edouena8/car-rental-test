import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import './styles/fonts.css';
import './styles/variables.css';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/car-rental-test">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
