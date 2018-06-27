import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MainContainer from '../MainContainer';

describe('MainContainer', () => {
  let wrapper = shallow(<MainContainer />)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})