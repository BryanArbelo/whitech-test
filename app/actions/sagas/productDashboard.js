import { call, put } from 'redux-saga/effects';
import {takeLatest, takeEvery} from 'redux-saga/effects';
import {handleApiErrors,transfromApiProductsToLocalProducts} from './helpers';
import {getAllProductsApiEndpoint} from './endpoints';
import {GET_ALL_PRODUCTS} from '../productDashboard';
import {gotAllProducts} from '../productDashboard';

/***** SAGA START ******/
export let getAllProductsApi = () => {
 return fetch(`${getAllProductsApiEndpoint}`).then((response) => {
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
  console.log('loading products')
  try {
    const data = yield call(getAllProductsApi);
    if (!data || data.error){
      logger.error(data.error.message);
    } else {
      yield put(gotAllProducts(transfromApiProductsToLocalProducts(data))); // Yields effect to the reducer specifying the action type and user details
    }
  } catch (error) {
    throw error;
  }
}
/***** SAGA END ******/

function* watchRequests() {
  yield* [takeEvery(GET_ALL_PRODUCTS, loadAllProducts)];
}

export default [watchRequests];
