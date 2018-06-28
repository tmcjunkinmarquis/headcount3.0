import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SelectedContainer from '../SelectedContainer';

describe('SelectedContainer', () => {
  let wrapper = shallow(<SelectedContainer selectedCards={[]}/>)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})