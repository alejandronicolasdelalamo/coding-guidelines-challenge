class Calculator {
  constructor() {
    this.result = 0;
  }

  add(x, y) {
    this.result = x + y;
    return this.result; 
  }

  subtract(x, y) {
    this.result = x - y;
    return this.result;
  }

  accumulate(x) {
    this.result += x;
    return this.result;
  }

  getResult() {
    return this.result; 
  }
}

const calculator = new Calculator();
calculator.add(5, 10);
console.log(calculator.getResult()); 
calculator.accumulate(6); 
calculator.subtract(6, 12); 
console.log(calculator.getResult()); 