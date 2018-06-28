import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card.js';

describe('Card', () => {
  let wrapper;
  let mockDistrict;
  beforeEach(() => {
    mockDistrict = {location:'turing', stats:{2007: 0.313}}
    wrapper = shallow(<Card district={mockDistrict}/>);
  })

  it('should match a snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
  });
  
})