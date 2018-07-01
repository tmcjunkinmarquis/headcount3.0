import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SelectedContainer from '../SelectedContainer';
import DistrictRepository from '../../../helper';
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';

describe('SelectedContainer', () => {
  let wrapper;

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call comparison if selectedCards.length is 2', () => {
    const district = new DistrictRepository();

    const compareDistrictAverages = district.compareDistrictAverages;
    const mockSelectedCards = [
      {location: 'COLORADO',
        stats: {2007: 0.213}},
      {location: 'COLORADO',
        stats: {2008: 0.417}}
    ];
    wrapper = shallow(
      <SelectedContainer 
        unselect={jest.fn()}
        selectedCards={mockSelectedCards}
        findAverage={jest.fn()}
        compareDistrictAverages={compareDistrictAverages}/>);

    expect(wrapper.find('.comparison-content').length).toEqual(1);
  });

  it('should not call comparison if selectedCards.length is 1', () => {
    const district = new DistrictRepository();

    const compareDistrictAverages = district.compareDistrictAverages;
    const mockSelectedCards = [
      {
        location: 'COLORADO',
        stats: { 2007: 0.213 }
      }
    ];
    wrapper = shallow(
      <SelectedContainer
        unselect={jest.fn()}
        selectedCards={mockSelectedCards}
        findAverage={jest.fn()}
        compareDistrictAverages={compareDistrictAverages} />);

    expect(wrapper.find('.comparison-content').length).toEqual(0);
  });


});