const convertToCelsius = function(tempFar) {
  tempCel = (tempFar - 32)/ 1.8 ;
  tempCel = Math.round(tempCel * 10) / 10 ;
  return tempCel;
};

const convertToFahrenheit = function(tempCel) {
  tempFar = ((tempCel * 9)/5 + 32) ;
  tempFar = Math.round(tempFar * 10)/ 10 ;
  return tempFar
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
