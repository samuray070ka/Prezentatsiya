import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

// redux config 
import { Provider } from 'react-redux'

//redux-persist - LOCALSTORAGE BILAN ISHLASH
import { PersistGate } from 'redux-persist/integration/react'


// const store = createStore(rootReducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);


