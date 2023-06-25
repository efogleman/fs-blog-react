import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA5P7wXQs_psf1zLUh9GEYhzhksibmRgUI",
  authDomain: "sunny-equinox-390717.firebaseapp.com",
  projectId: "sunny-equinox-390717",
  storageBucket: "sunny-equinox-390717.appspot.com",
  messagingSenderId: "888209625131",
  appId: "1:888209625131:web:ed892fc6e4f7677cb4da6e",
  measurementId: "G-2SRYJ3ZZNH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
