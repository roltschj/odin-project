const convertToCelsius = function(temp) {
  const celTemp = ((temp - 32) / 1.8);

  if ( Number.isInteger(celTemp) ) {
    return parseInt(celTemp.toFixed());
  } else {
    return parseFloat(celTemp.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  const fahrTemp = (temp * 1.8 + 32);

  if ( Number.isInteger(fahrTemp) ) {
    return parseInt(fahrTemp.toFixed());
  } else {
    return parseFloat(fahrTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
