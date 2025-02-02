import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import generateStore from './store/store.js'

import App from './sections/App';
import reportWebVitals from './reportWebVitals';

const store = generateStore()

ReactDOM.render(
  <React.StrictMode>

     <Provider store={store}>
        <App />      
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
