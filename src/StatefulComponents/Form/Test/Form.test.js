import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Form from '../Form';

describe('', ()=>{
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form findFromSearch={jest.fn()}
                            selectDistrict={jest.fn()}
                            allDistricts={[]}
                            />);

  });

  it('should match snapshot ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should instantiate with some state', () => {
    //setup
    const mockState = {
      value: ''
    };
   
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
        allDistricts={[]}
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

  it('should call selectDistrict when handleSubmit is executed and the this.state.value is not empty', () => {
   const spy = jest.fn();
   const wrapper = shallow(
     <Form 
       selectDistrict={spy}
       findFromSearch={() => true}
       allDistricts={[{location: "COLORADO"}, {location: "AGATE 20"}]}
     />)
   wrapper.setState({
     value: "COLORADO"
   })
   const mockEvent = {
     preventDefault: jest.fn(),
     target: {value: 'COLORADO'}
   };

   wrapper.find('form').simulate('submit', mockEvent);

   expect(spy).toHaveBeenCalled();
  });

  it('should call selectDistrict with state.value onSubmit', () => {

    const spy = jest.fn();
    const wrapper = shallow(
      <Form 
        selectDistrict={spy}
        findFromSearch={() => true}
        allDistricts={[{location: "COLORADO"}, {location: "AGATE 20"}]}
      />)
    wrapper.setState({
      value: "COLORADO"
    })
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.find('form').simulate('submit', mockEvent);

    expect(spy).toHaveBeenCalledWith('COLORADO');
  })

  it('should reset the state.value to empty string', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <Form 
        selectDistrict={spy}
        findFromSearch={() => true}
        allDistricts={[{location: "COLORADO"}, {location: "AGATE 20"}]}
      />)
    wrapper.setState({
      value: "COLORADO"
    })
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.find('form').simulate('submit', mockEvent);

    expect(wrapper.state('value')).toEqual('');
  })

  it('should call findFromSearch with empty string onSubmit', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <Form 
        selectDistrict={jest.fn()}
        findFromSearch={spy}
        allDistricts={[{location: "COLORADO"}, {location: "AGATE 20"}]}
      />)
    wrapper.setState({
      value: "COLORADO"
    })
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.find('form').simulate('submit', mockEvent);

    expect(spy).toHaveBeenLastCalledWith('');
  })

  it('should not call selectDistrict if there is no value in state', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <Form 
        selectDistrict={jest.fn()}
        findFromSearch={spy}
        allDistricts={[{location: "COLORADO"}, {location: "AGATE 20"}]}
      />)
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.find('form').simulate('submit', mockEvent);

    expect(spy).not.toHaveBeenCalled();
  })

  it('should select remaining district if there is only one in allDistricts array', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <Form 
        selectDistrict={spy}
        findFromSearch={() => true}
        allDistricts={[{location: "COLORADO"}]}
      />)
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.setState({
      value: "COLORADO"
    })

    wrapper.find('form').simulate('submit', mockEvent);

    expect(spy).toHaveBeenCalledWith("COLORADO")
  })

  it('should not call selectDistrict if there are no matches in allDistricts', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <Form 
        selectDistrict={spy}
        findFromSearch={() => true}
        allDistricts={[{location: "COLORADO"}, {location: "AGATE 20"}]}
      />)
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.setState({
      value: "Kentucky"
    })

    wrapper.find('form').simulate('submit', mockEvent);

    expect(spy).not.toHaveBeenCalled()
  })
});







