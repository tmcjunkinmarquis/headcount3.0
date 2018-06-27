import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card.js';

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card />);
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
})