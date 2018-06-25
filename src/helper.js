import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(){
    this.stats = kinderData.reduce((obj, yearObj) => {
      let key = yearObj.Location;
      let year = yearObj.TimeFrame;
      let data = yearObj.Data;
      if(!obj[key]) {
        obj[key] = {};
      }
      if(!obj[key][year]) {
        obj[key][year] = data;
      }
      return obj;
    }, {})
  }

}
