import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

describe('App',()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it('should match the snapshot', ()=>{
    //Expectation
    expect(wrapper).toMatchSnapshot();
  });

  it('should instantiate the state.allDistricts with all the districts', () => {
    //Expectation
    expect(wrapper.state().allDistricts.length).toEqual(181);
  });

  it('selectDistrict adds a district to selectedCards array', () => {
    // setup
    const initialState = [];
    
    // const mockDistrict = 
    const expectedState = [{
      location: 'COLORADO',
      stats: {
        2004: 0.24,
        2005: 0.278,
        2006: 0.337,
        2007: 0.395,
        2008: 0.536,
        2009: 0.598,
        2010: 0.64,
        2011: 0.672,
        2012: 0.695,
        2013: 0.703,
        2014: 0.741,
      }
    }];
    // execution
    wrapper.instance().selectDistrict('COLORADO');
    
    // expectation
    expect(wrapper.state('selectedCards')).toEqual(expectedState);
  });

  it('should not have duplicate cards in selectedCards array in state', () => {
    // setup
    const initialState = [];
    // execution
    wrapper.instance().selectDistrict('COLORADO');
    expect(wrapper.state('selectedCards').length).toEqual(1);
    wrapper.instance().selectDistrict('COLORADO');

    // expectation
    expect(wrapper.state('selectedCards').length).toEqual(0);
    wrapper.instance().selectDistrict('COLORADO');

    expect(wrapper.state('selectedCards').length).toEqual(1);

  });

});
