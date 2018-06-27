import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from '../CardContainer';

describe('CardContainer', () => {
  let wrapper = shallow(<CardContainer />)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})