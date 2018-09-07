import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts, updateDashboardData} from '../../../actions/productDashboard';
import Input from '../../shared/input';
import ProductTile from '../../shared/productTile';
import {productsPerPageEnum} from '../../../state/initialState';

@connect(mapStateToProps)
export default class CenterPanelDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getAllProducts());
  }

  updateThisPageData = (newData) => {
    this.props.dispatch(updateDashboardData(newData));
  }

  getProductsPerPageDropdown =()=>{
    const {productDashboardData : {productsPerPage}} = this.props;

    const productsPerPageOptions = [
       { key: '8perpage', text: '8 per page', value: productsPerPageEnum.EIGHT_PER_PAGE },
       { key: '16perpage', text: '16 per page', value: productsPerPageEnum.SIXTEEN_PER_PAGE  },
    ];

    const handleProductPerPageChnage = (e, { value })=>{
        this.updateThisPageData({ productsPerPage : value})
    }

    return <Input type="dropdown" className="products-per-page-dropdown" value={productsPerPage} onChange={handleProductPerPageChnage}  options={productsPerPageOptions} />
  }


  getTopMenu = ()=>{
    const {productDashboardData:{ products }} = this.props;
    return (<div className="top-menu">
      <div className="all-products-info">
        <h5>All Products</h5>
        <h6>{products.length} Products</h6>
      </div>
      {this.getProductsPerPageDropdown()}
    </div>);
  }

  getProductContainer = ()=>{
    const {productDashboardData : { products,currentNavigationPage,productsPerPage }} = this.props;

    const productsStartFrom = ((currentNavigationPage - 1) * productsPerPage);
    const productsUntil = ((currentNavigationPage) * productsPerPage);

    const productsToRender = products.slice(productsStartFrom,productsUntil);

    console.log(productsStartFrom,productsUntil,productsToRender);
    return (<div className="product-container">
      {productsToRender.map((product,i) =>{
        return <ProductTile key={`product${i}`} {...product}></ProductTile>
      })}
    </div>);
  }

  render(){
    return (<div className="product-dashboard-center-panel">
      {this.getTopMenu()}
      {this.getProductContainer()}
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    productDashboardData: state.productDashboardReducer.productDashboardData
  };
}
