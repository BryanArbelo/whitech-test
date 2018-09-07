import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllProducts} from '../../../actions/productDashboard';

@connect(mapStateToProps)
export default class CenterPanelDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getAllProducts());
  }

  render(){
  return (<div>
    center panel
  </div>)
  }
}

function mapStateToProps(state) {
  return {
    dashboardData: state.productDashboardReducer.dashboardData
  };
}
