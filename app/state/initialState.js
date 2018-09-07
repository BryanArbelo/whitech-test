export const productsPerPageEnum = {
  EIGHT_PER_PAGE : 8,
  SIXTEEN_PER_PAGE : 16
}

const getEmptyProduct = ()=>{
  return {
    id: 0,
    price: '',
    productName: '',
    description: '',
    productImage: ''
  }
}

export const productDashboardInitialState = {
  productDashboardData : {
      products : [],
      productsPerPage : productsPerPageEnum.EIGHT_PER_PAGE,
      currentNavigationPage : 1,
  },
  loadingProducts : false
}

export const initialState = {
  productDashboardReducer: productDashboardInitialState
}
