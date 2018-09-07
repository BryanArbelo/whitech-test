
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createReducer from './reducers/main';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    routerMiddleware(history),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: true,
      })
      : compose;
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

 // Reducer registry
  store.injectedReducers = {};

  return store;
}
