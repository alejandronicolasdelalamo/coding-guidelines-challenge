function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function accumulate(currentResult, x) {
  return currentResult + x;
}

let result = add(5, 10); 
console.log(result); 
result = subtract(result, 6); 
console.log(result); 

result = accumulate(result, 6); 
console.log(result); 