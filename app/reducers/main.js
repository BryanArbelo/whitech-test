import { combineReducers } from 'redux';
import productDashboardReducer from './productDashboard';

export default function createReducer(injectedReducers) {

  let appReducer = combineReducers({
    productDashboardReducer,
    ...injectedReducers
  });

  const rootReducer = (state, action) => {
    return appReducer(state, action)
  }

  return rootReducer
}
