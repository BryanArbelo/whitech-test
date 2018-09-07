import { call, put } from 'redux-saga/effects';
import {takeLatest, takeEvery} from 'redux-saga/effects';
import {handleApiErrors} from './helpers';
import {getAllProductsApiEndpoint} from './endpoints';
import {GET_ALL_PRODUTCTS,GOT_ALL_PRODUTCTS} from '../productDashboard';

/***** SAGA START ******/
export let getAllProductsApi = () => {
 return fetch(`${window.APP.getAllProductsApi}`).then((response) => {
   return response.json().then((result)=>{
     if (result.code && result.code != 200) {
       return handleApiErrors(result);
     } else {
     return result;
     }
   })
 }).catch(error => {
   logger.error(error);
   throw error;
 });
}

export function* loadAllProducts(payload) {
  try {
    const data = yield call(getAllPRoductsApi);
    if (!data || data.error){
      yield put(data.error);
    } else {
      logger.error(data.error.message);
    }
  } catch (error) {
    throw error;
  }
}
/***** SAGA END ******/

function* watchRequests() {
  yield* [takeEvery(GET_ALL_PRODUTCTS, loadAllProducts)];
}

export default [watchRequests];
