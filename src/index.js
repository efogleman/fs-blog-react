import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAg4F_rxoBKWyqQPxs5xalACVjnlcgakE",
  authDomain: "my-react-blog-aa769.firebaseapp.com",
  projectId: "my-react-blog-aa769",
  storageBucket: "my-react-blog-aa769.appspot.com",
  messagingSenderId: "248108273216",
  appId: "1:248108273216:web:55a5f84fb03f95b421d9a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
