import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import StarRating from './StarRating';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Ok', 'Good', 'Wonderful']}
      defaultRating={3}
      onSetRating
    /> */}
  </React.StrictMode>
);
