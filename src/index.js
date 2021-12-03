import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import {FirebaseContext} from './context/firebase';

render(
    <React.StrictMode> {/* permet d'afficher plus d'erreur (utilise pour les connections) */}
      <FirebaseContext.Provider value={{ firebase }}> {/* permet de lier firebase a l'app */}
        {/* appelle des styles globaux et de l'App  */}
        <GlobalStyles /> 
        <App />
      </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root') // Rendu de l'ensemble de l'application avec l'id root
  );
