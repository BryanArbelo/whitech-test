import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(mapStateToProps)
export default class BottomPanelProductDashboard extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {

    return (<div className="product-dashboard-bottom-panel">
     <div className="product-navigation">
        <div>Previous Page</div>
        <div>Next Page</div>
     </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    productDashboardData: state.productDashboardReducer.productDashboardData
  }
}
