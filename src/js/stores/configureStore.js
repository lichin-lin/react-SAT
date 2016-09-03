import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';
import { history } from '../routes';
import { syncHistory } from 'react-router-redux';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
  const reduxRouterMiddleware = syncHistory(history);

  const middleware = [
    thunk, promiseMiddleware, reduxRouterMiddleware,
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    reduxRouterMiddleware.listenForReplays(store);

  // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
