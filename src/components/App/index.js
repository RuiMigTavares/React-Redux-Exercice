import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import configureStore from './redux/store';
import Header from '../Header';
import ItemCreator from '../ItemCreator';
import './styles.css';
import '../../assets/css/index.css';

//const store = configureStore();

class App extends Component {
  render() {
    return (
      
        <div className="app">
          <Header />
          <div>
            <ItemCreator />
          </div>
        </div>
      
    );
  }
}

export default App;
