import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(){
    this.stats = kinderData.reduce((obj, yearObj) => {
      let key = yearObj.Location.toUpperCase();
      let stats = {};
      let year = yearObj.TimeFrame;
      let data = parseFloat(parseFloat(yearObj.Data).toFixed(3)) || 0;
      if(!obj[key]) {
        obj[key] = {location: key,
                    stats: {}};
      }
      obj[key].stats[year] = data;
      return obj;
    }, {})
  }
  findByName = (name) => {
    if(!name) { return undefined };
    if(this.stats[name.toUpperCase()]) {
      let loc = this.stats[name.toUpperCase()];
      return this.stats[name.toUpperCase()]
    } 
  }

  findAllMatches = (county)=>{
    const keysArray = Object.keys(this.stats)
    return keysArray
  }
}
