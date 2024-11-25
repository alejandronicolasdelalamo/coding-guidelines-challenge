function sumPositiveNumbers(numbers) {
  let positiveSum = 0; 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) { 
      positiveSum += numbers[i];
    }
  }
  return positiveSum; 
}