import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from '../Form';

describe('', ()=>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form findFromSearch={jest.fn()}/>);

  });

  it('should match snapshot ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should instantiate with some state', () => {
    //setup
    const mockState = {
      value: ''
    };
    //execution
    //expectation
    expect(wrapper.instance().state).toEqual(mockState);
  });

  it('should call handleChange function when input changes', () => {
    //setup
    //mock function
    const mockHandleChange = jest.fn();
    const mockEvent = {target: {value: 'turing'}}
    //set state of wrapper
    
    //simulate change
    wrapper.find('.searchField').simulate('change', mockEvent);
    //execution
    //expectation
    expect(wrapper.instance().handleChange).toHaveBeenCalled;
    expect(wrapper.state('value')).toEqual('turing');
  });
});