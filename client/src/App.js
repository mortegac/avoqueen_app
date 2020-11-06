import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './store/store.js'



const App = ()=> {
  const store = generateStore()
  return (
    <Provider store={store}>
      
    </Provider>
  );
}

export default App;