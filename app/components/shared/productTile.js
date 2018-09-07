import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(mapStateToProps)
export default class BottomPanelProductDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      bottom panel
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    productDashboardData: state.productDashboardReducer.productDashboardData
  }
}
