import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ProductDashboardPage from '../components/pages/product-dashboard/content';
import {Route,Redirect} from 'react-router-dom';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="product-dashboard-app">
     <Route path="/product-dashboard" component={ProductDashboardPage}/>
     <Redirect from="/" to="product-dashboard" />
    </div>);
  }
}
