function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2;
  }
  return sum;
}

console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfSquares([4, 5, 6]));
