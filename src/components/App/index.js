import React, { Component } from 'react';
import Header from '../Header';
import ItemCreator from '../ItemCreator';
import './styles.css';
import '../../assets/css/index.css';

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
