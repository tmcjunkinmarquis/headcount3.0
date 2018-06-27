import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(){
    this.stats = this.dataCleaner(kinderData);
  }
  dataCleaner = (data) => {
    return data.reduce((obj, yearObj) => {
      let key = yearObj.Location.toUpperCase();
      let year = yearObj.TimeFrame;
      let data = Math.round(yearObj.Data * 1000)/1000 || 0;
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
      return this.stats[name.toUpperCase()];
      //return this.stats[name.toUpperCase()]
    } 
  }
  findAllMatches = (county = '')=>{
    county = county.toUpperCase();
    const valuesArray = Object.values(this.stats)
    
    return valuesArray.filter((value)=>{
      return value.location.includes(county)
    });
  }
}
