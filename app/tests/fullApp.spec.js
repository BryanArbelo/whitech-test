import React from 'react';
import { shallow, mount} from 'enzyme';
import ProductDashboardContent from '../components/pages/product-dashboard/content';
import ProductTile from '../components/shared/productTile';
import {appWrapper, launchApp} from '../root';
import initialState from '../state/initialState';

describe('Product Dashboard Panel', () =>{

  it('should render properly',() =>{
    let renderedComponent = '';
    const render = (NextApp) => {
      renderedComponent = mount(appWrapper(NextApp,initialState), document.body);

      expect(renderedComponent.find('.product-dashboard-app').length).toBe(1);

      expect(renderedComponent.find('.product-dashboard-app').find(ProductDashboardContent).length).toBe(1);

    };
    launchApp(render);
  })
})
