import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainLayout from './mainlayout/index'

import rootReducer from './rootReducer';
import './App.css';


const store = createStore(rootReducer);



class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <MainLayout/>
      </div>
    </Provider>
    );
  }
}

export default App;
