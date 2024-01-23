const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let answer = 0;
  for (const number of numbers) {
    answer += number
  }

  return answer;
};

const multiply = function(numbers) {
  let answer = 1;
  for (const number of numbers) {
    answer *= number
  }

  return answer;
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(number) {
	let answer = 1;
  for ( i = 1; i <= number; i++) {
    answer *= i;
  }

  return answer;
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
