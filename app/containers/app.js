import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ProductDashboardPage from '../components/pages/product-dashboard/content';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="product-dashboard-app">
      <ProductDashboardPage></ProductDashboardPage>
    </div>);
  }
}
