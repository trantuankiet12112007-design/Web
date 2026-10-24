function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6));
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8));
console.log(findMissingNumber([1, 2, 3, 4], 4));
