function numberIsDivisible(num) {
  if (num <= 0) return "Number is not positive";

  let result = "";

  if (num % 2 === 0) result += "Divisible by 2";
  if (num % 3 === 0) result += (result ? " and " : "") + "Divisible by 3";

  return result || "Not divisible by 2 or 3";
}