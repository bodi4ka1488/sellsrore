import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store , persistor} from './Components/reducers/store';
import { BrowserRouter } from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google'
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GoogleOAuthProvider clientId='443617114822-7pfojtk6iiqj2jkqkae6qbsusjtqchvt.apps.googleusercontent.com'>
                <App />
            </GoogleOAuthProvider>
            </PersistGate>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


