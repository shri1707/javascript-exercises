const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((initial, currentVal) => initial * currentVal, 1)
};

const power = function (a,b) {
  return a**b
};

const factorial = function (x) {
  let val=1
  if (x==0 || x==1){
    return 1
  }
  for (let i=1; i<=x; i++){
    val = val*i
  }
  return val
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
