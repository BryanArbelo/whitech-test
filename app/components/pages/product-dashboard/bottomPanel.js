import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { updateDashboardData} from '../../../actions/productDashboard';

@connect(mapStateToProps)
export default class BottomPanelProductDashboard extends Component {
  constructor(props) {
    super(props);
  }

  updateThisPageData = (newData) => {
    this.props.dispatch(updateDashboardData(newData));
  }



  getProductNavigation =()=>{
    const {productDashboardData : {products, currentNavigationPage, productsPerPage}} = this.props;

    const canGoback = currentNavigationPage > 1;
    const canGoForward = (currentNavigationPage * productsPerPage) < products.length;
    const handleNextArrow = ()=>{
      this.updateThisPageData({ currentNavigationPage : currentNavigationPage + 1})
    }

    const handlePreviousArrow = ()=>{
      this.updateThisPageData({ currentNavigationPage : currentNavigationPage - 1})
    }

    const handleCustomPage = (customNavigationPage)=>{
      this.updateThisPageData({ currentNavigationPage : customNavigationPage})
    }


    const getCenterPageSelector = ()=>{
      const previousNavigationPage = currentNavigationPage - 1;
      const futureNavigationPage = currentNavigationPage + 1;
      return (<div className="center-page-selector">
         <span className={`${canGoback ? '': 'disabled'} hand`} onClick={handleCustomPage.bind(this, previousNavigationPage)}>{previousNavigationPage}</span>
         <span className="selected">{currentNavigationPage}</span>
         <span className={`${canGoForward ? '': 'disabled'} hand`} onClick={handleCustomPage.bind(this, futureNavigationPage)}>{futureNavigationPage}</span>
      </div>);
    }

    return (<div className="product-navigation">
       <span className={`${canGoback ? '': 'disabled'} hand`} onClick={handlePreviousArrow}>Previous Page</span>
       {getCenterPageSelector()}
     <span className={`${canGoForward ? '': 'disabled'} hand`} onClick={handleNextArrow}>Next Page</span>
    </div>)
  }

  render() {

    return (<div className="product-dashboard-bottom-panel">
      {this.getProductNavigation()}
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    productDashboardData: state.productDashboardReducer.productDashboardData
  }
}
