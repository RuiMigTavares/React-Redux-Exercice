import React, { Component } from 'react';
import Header from '../Header';
import ItemCreator from '../ItemCreator';
import './styles.css';
import '../../assets/css/index.css';
import ItemList from '../ItemList/ItemList';

class App extends Component {
  render() {
    return (
      
        <div className="app">
          <Header />
          <div>
            <ItemCreator />
            <ItemList/>
          </div>
        </div>
      
    );
  }
}

export default App;
