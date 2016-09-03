import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './js/stores/configureStore';
import RootRouter from './js/routes';

const store = configureStore();

if (typeof(document) !== 'undefined' && window) {
  window.onload = () => {
    return render(
      <Provider store={store}>
        <RootRouter/>
      </Provider>,
      document.getElementById('app')
    );
  };
}
