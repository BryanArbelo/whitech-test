import React from 'react';
import { shallow, mount} from 'enzyme';
import ProductDashboardContent from '../components/pages/product-dashboard/content';
import ProductTile from '../components/shared/productTile';
import {appWrapper, launchApp} from '../root';
import initialState from '../state/initialState';
import mockJson from './mockJson';
describe('Product Dashboard Panel', () =>{

  beforeEach(() => {
   fetch.resetMocks()
 })



  it('should render properly',() =>{
    fetch.mockResponse(JSON.stringify(mockJson))

    let renderedComponent = '';
    const render = (NextApp) => {
      renderedComponent = mount(appWrapper(NextApp,initialState), document.body);

      expect(renderedComponent.find('.product-dashboard-app').length).toBe(1);

      expect(renderedComponent.find('.product-dashboard-app').find(ProductDashboardContent).length).toBe(1);
    };
    launchApp(render);
  })


    it('should test per page product selection ',() =>{
      fetch.mockResponse(JSON.stringify(mockJson))

      let renderedComponent = '';
      const render = (NextApp) => {
        renderedComponent = mount(appWrapper(NextApp,initialState), document.body);

        expect(renderedComponent.find('div.product-tile').length).toBe(8);

        renderedComponent.find('div.products-per-page-dropdown').simulate('click')

        renderedComponent.find('div.products-per-page-dropdown div.item').at(1).simulate('click')

        expect(renderedComponent.find('div.product-tile').length).toBe(16);
      };
      launchApp(render);
    })



  it('should test navigation ',() =>{
    fetch.mockResponse(JSON.stringify(mockJson))

    let renderedComponent = '';
    const render = (NextApp) => {
      renderedComponent = mount(appWrapper(NextApp,initialState), document.body);

      expect(renderedComponent.find('.center-page-selector span.selected').length).toBe(1);

      expect(renderedComponent.find('.center-page-selector span.selected').text()).toBe('1');

      renderedComponent.find('.center-page-selector span').at(2).simulate('click')

      expect(renderedComponent.find('.center-page-selector span.selected').text()).toBe('2');

      renderedComponent.find('.ui.icon.angle.right').simulate('click');

      expect(renderedComponent.find('.center-page-selector span.selected').text()).toBe('3');


    };
    launchApp(render);
  })

  it('should test failed api scenario ',() =>{
    fetch.mockResponse(JSON.stringify({code:401}))

    let renderedComponent = '';
    const render = (NextApp) => {
      renderedComponent = mount(appWrapper(NextApp,initialState), document.body);


    };
    launchApp(render);
  })






})
