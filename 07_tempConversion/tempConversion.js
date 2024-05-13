const convertToCelsius = function(num){
  C= (num-32) * (5/9)
  return Number(C.toFixed(1))
};

const convertToFahrenheit = function(num) {
  F= (num*(9/5))+32
  return Number(F.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
