class Calculator {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }

  static accumulate(current, value) {
    return Calculator.add(current, value);
  }
}


const result = Calculator.add(5, 10); 
console.log(result); 

const accumulated = Calculator.accumulate(result, 6); 
console.log(Calculator.subtract(accumulated, 12)); 