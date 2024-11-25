function calc(nums) {
  return nums.filter(num => num > 0).reduce((total, num) => total + num, 0);
}

const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(calc(numbers));