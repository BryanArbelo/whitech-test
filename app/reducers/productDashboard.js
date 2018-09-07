import {GOT_ALL_PRODUCTS,
              GET_ALL_PRODUCTS,
              UPDATE_DASHBOARD_DATA
} from '../actions/productDashboard';

import objectAssign from 'object-assign'; //some browsers still require a polyfill
import { productDashboardInitialState } from '../state/initialState';

function productDashboardReducer(state = productDashboardInitialState, action) {
  let newStatus;
  const  {dashboardData} = state;
  switch (action.type) {
    case GOT_ALL_PRODUCTS:

      newStatus = objectAssign({},productDashboardData, { products : action.data});
      return objectAssign({},state, {
        dashboardData : newStatus,
        loadingProducts : false
      });
    case GET_ALL_PRODUCTS:

      return objectAssign({},state, {
        loadingProducts : true
      });
    case UPDATE_DASHBOARD_DATA:

      newStatus = objectAssign({},productDashboardData, action.data);
      return objectAssign({},state, {
        dashboardData : newStatus
      });
    default:
      return state;
  }
}

export default productDashboardReducer;
