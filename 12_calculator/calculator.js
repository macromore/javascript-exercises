const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum
};

const multiply = function(a) {
  let product = 1;
  for (let i = 0; i < a.length; i++) {
    product *= a[i];
  }
  return product
};

const power = function(a,b) {
	return a**b
};

const factorial = function(n) {
	if (n == 0) {
    return 1
  } else {
    return n*factorial(n-1)
  }
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
