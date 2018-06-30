import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SelectedContainer from '../SelectedContainer';

describe('SelectedContainer', () => {
  let wrapper;

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render comparison if selectedCards.length is 2', () => {
    wrapper.shallow(
      <SelectedContainer 
        unselect={this.unselect}
        selectedCards={this.state.selectedCards}
        findAverage={this.districtRepo.findAverage}
        compareDistrictAverages={this.districtRepo.compareDistrictAverages}/>)
  });
});