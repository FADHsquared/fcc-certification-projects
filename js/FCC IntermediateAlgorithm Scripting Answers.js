// freeCodeCamp Basic Algorithm Scripting Answers
// 1st solution = My Solution
// 2nd solution = Improved Solution

// Sum All Numbers in a Range
function sumAll(arr) {
  const minMaxArr = arr.sort((a, b) => a - b)
  if (minMaxArr[0] >= minMaxArr[1]) return minMaxArr[0]
  return minMaxArr[0] + sumAll([minMaxArr[0] + 1, minMaxArr[1]])
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
  return [
    ...arr2.filter((item) => !arr1.some((checkItem) => checkItem === item)),
    ...arr1.filter((item) => !arr2.some((checkItem) => checkItem === item)),
  ]
}

// Seek and Destroy
function destroyer(arr, ...numsToRemove) {
  return arr.filter((item) => !numsToRemove.includes(item))
}

// Wherefore art thou
