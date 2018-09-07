import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(mapStateToProps)
export default class BottomPanelProductDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {productImage, productName, description} = this.props;

    return (<div className="product-tile">
      <div className="image-container">
        <img src={productImage}></img>
      </div>
      <div className="description-box">
        <h5>{productName}</h5>
        <p>{description}</p>
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    productDashboardData: state.productDashboardReducer.productDashboardData
  }
}
