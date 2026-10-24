function calculateGrade(arr) {
  if (arr.length === 0) return "F";
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;

  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

console.log(calculateGrade([90, 95, 88]));
console.log(calculateGrade([75, 80, 70]));
