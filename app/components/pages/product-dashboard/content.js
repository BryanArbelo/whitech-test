import React from 'react';
import CenterPanelProductDashboard from './centerPanel';
import BottomPanelProductDashboard from './bottomPanel';

export default function ProductDashboardContent() {
  return (<div className="product-dashboard-container">
    <CenterPanelProductDashboard/>
    <BottomPanelProductDashboard/>
  </div>);
}
