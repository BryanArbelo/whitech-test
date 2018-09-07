import { fork, all } from 'redux-saga/effects';
import productDashboardSagas from './productDashboard';
const sagas = [
...productDashboardSagas //, ...moreSagas
];

export default function* root() { //this function is being run by sagaMiddleware.run
  yield all(sagas.map(saga => fork(saga)));
}
