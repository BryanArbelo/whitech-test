export const GET_ALL_PRODUCTS = 'dashboard/GET_ALL_PRODUCTS';
export const GOT_ALL_PRODUCTS = 'dashboard/GOT_ALL_PRODUCTS';

export const UPDATE_DASHBOARD_DATA = 'dashboard/UPDATE_DASHBOARD_DATA';


export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS
  };
}

export function gotAllProducts(data) {
  return {
    type: GOT_ALL_PRODUCTS,
    data: data
  };
}

export function updateDashboardData(data) {
  return {
    type: UPDATE_DASHBOARD_DATA,
    data : data
  };
}
