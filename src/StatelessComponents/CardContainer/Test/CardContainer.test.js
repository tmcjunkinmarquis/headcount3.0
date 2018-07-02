import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardContainer from '../CardContainer';
import Card from '../../Card/Card';

describe('CardContainer', () => {
  let wrapper = shallow(
    <CardContainer 
      allDistricts={[{ location: 'COLORADO', stats: { 2007: 0.111 } }]}
      selectedCards={[{ location: 'COLORADO', stats: { 2007: 0.111 } }]}
      selectDistrict={jest.fn()}
      unselect={jest.fn()}
    />);
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should assign the className="selected" to cards of selected districts', () => {
    wrapper = mount(
      <CardContainer
        allDistricts={[
          { location: 'COLORADO', stats: { 2007: 0.111 } }, 
          { location: 'COLORADO 20', stats: { 2007: 0.111 } }, 
          { location: 'ARAPAHO', stats: { 2007: 0.111 } }, 
          { location: 'PINE NUTS', stats: { 2007: 0.111 } }]}
        selectDistrict={jest.fn()}
        selectedCards={[
          { location: 'COLORADO', stats: { 2007: 0.111 } }, 
          { location: 'COLORADO 20', stats: { 2007: 0.111 } }]}
        unselect={jest.fn()}
      />);

    expect(wrapper.find('.selected').length).toEqual(2);
  });
});