import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
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
    const mockHandleChange = jest.fn();
    const mockEvent = {target: {value: 'turing'}};
    //execution
    wrapper.find('.searchField').simulate('change', mockEvent);
    //expectation
    expect(wrapper.instance().handleChange).toHaveBeenCalled;
  });

  it('should update state when handleChange is called', () => {
    //setup
    const mockHandleChange = jest.fn();
    const mockEvent = { target: { value: 'turing' } };
    //execution
    wrapper.find('.searchField').simulate('change', mockEvent);
    //expectation
    expect(wrapper.state('value')).toEqual('turing');
  });

  it('should call handleSubmit on form submission', () => {
    //setup
    wrapper = mount(
      <Form 
        selectDistrict={jest.fn()}
        findFromSearch={jest.fn()}
        allDistricts={jest.fn()}
      />);
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {value: 'Colorado'}
    };
    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();
    //execution
    wrapper.find('form').simulate('submit', mockEvent);
    //expectation
    expect(spy).toHaveBeenCalled();
  });

  it('should call selectDistrict when handleSubmit is executed', () => {
    const mockSelectDistrict = jest.fn();
    wrapper = shallow(
      <Form 
        selectDistrict= {mockSelectDistrict}
        findFromSearch={jest.fn()}
        allDistricts={jest.fn()}
      />)
    const mockEvent = {
      preventDefault: jest.fn(),
      target: { value: 'Colorado' }
    };
    wrapper.instance().handleSubmit(mockEvent);
    
    expect(mockSelectDistrict).toHaveBeenCalled();
  });
});