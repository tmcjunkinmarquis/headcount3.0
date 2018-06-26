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
    //Setup

    //Execution

    //Expectation
    expect(wrapper).toMatchSnapshot();
  });

  it('should instantiate with state having properties selectedCards, allCards, average', () => {
    //Setup
    const mockState = {
      selectedCards: [],
      allCards: [],
      average: null
    };
    
    //Execution
    //Expectation
    expect(wrapper.instance().state).toEqual(mockState);
    
  });




});
