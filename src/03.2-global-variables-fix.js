class Calculator {
  constructor() {
    this.result = 0; 
  }

  add(x, y) {
    return x + y; 
  }

  subtract(x, y) {
    return x - y; 
  }

  accumulate(x) {
    this.result += x; 
    return this.result;
  }

  getResult() {
    return this.result; 
  }

  reset() {
    this.result = 0; 
    return this.result;
  }
}


const calculator = new Calculator();

console.log(calculator.add(5, 10)); 
console.log(calculator.subtract(6, 12)); 

calculator.accumulate(15); 
console.log(calculator.getResult()); 

calculator.accumulate(10); 
console.log(calculator.getResult()); 

calculator.reset(); 
console.log(calculator.getResult()); 