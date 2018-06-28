import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';

const render = Component => {
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>,
      document.getElementById('root'),
    )
  }
  
  render(App)
  
  // webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      // if you are using harmony modules ({modules:false})
      render(App)
      // in all other cases - re-require App manually
      render(require('./components/App'))
    })
  }

ReactDOM.render(<App />, document.getElementById('root'));
