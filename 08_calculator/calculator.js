const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((previous, current)=>{
    return previous + current;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((previous, current)=>{
    return previous * current;
  });
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(f) {
  let number = 1;
	for (let i = 1; i <= f; i++){
    number *= i;
  }
  return number;
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
