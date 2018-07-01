import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card.js';

describe('Card', () => {
  let wrapper;
  let mockDistrict;

  it('should match a snapshot', () => {
    mockDistrict = {
      location:'turing', 
      stats:{2007: 0.313}
    }

    wrapper = shallow(<Card district={mockDistrict}
                      unselect={jest.fn()}
                      selectDistrict={jest.fn()}
                      selected={false}
                      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('toggleSelected should call selectDistrict if district.selected is false', () => {
    mockDistrict = {
      location:'turing', 
      stats:{2007: 0.313}
    }
    const mockSelectDistrict = jest.fn();
    wrapper = shallow(<Card 
                      district={mockDistrict}
                      unselect={jest.fn()}
                      selectDistrict={mockSelectDistrict}
                      selected={false}
                      />)

    wrapper.find('.card').simulate('click');

    expect(mockSelectDistrict).toHaveBeenCalled();
  })

  it('toggleSelected should call unselect if district.selected is true', () => {

    const mockUnselect = jest.fn();
    mockDistrict = {
      location:'turing', 
      stats:{2007: 0.313}
    }

    wrapper = shallow(<Card 
                      district={mockDistrict}
                      unselect={mockUnselect}
                      selectDistrict={jest.fn()}
                      selected={true}
                      />)

    wrapper.find('.card').simulate('click');

    expect(mockUnselect).toHaveBeenCalled();
  })

  
})