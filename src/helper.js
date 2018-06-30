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
      if (!obj[key]) {
        obj[key] = {location: key,
          stats: {}};
      }
      obj[key].stats[year] = data;
      return obj;
    }, {});

  }
  findByName = (name) => {
    if (!name) { return undefined; }
    if (this.stats[name.toUpperCase()]) {
      return this.stats[name.toUpperCase()];
    } 
  }
  findAllMatches = (county = '')=>{
    const valuesArray = Object.values(this.stats);
    
    return valuesArray.filter((value)=>{
      return value.location.startsWith(county.toUpperCase());
    });

    // return valuesArray.filter((value) => {
    //   const regex = new RegExp(county.toUpperCase())
    //   return value.location.match(regex);
    // });
  }

  findAverage = (district) => {
    const statsArray = Object.values(this.stats[district].stats);
    const sum = statsArray.reduce((sum, percentage)=>{
      
      return sum + percentage;
    }, 0);
    const answer = Math.round((sum / statsArray.length) * 1000) / 1000;
    return answer;
  }

  compareDistrictAverages = (districtA, districtB)=>{
    const averageForA = this.findAverage(districtA.toUpperCase());
    const averageForB = this.findAverage(districtB.toUpperCase());
    const dividend = Math.round(averageForA / averageForB * 1000) /1000;
    return { [districtA.toUpperCase()]: averageForA, [districtB.toUpperCase()]:averageForB, compared: dividend};
  }




}
