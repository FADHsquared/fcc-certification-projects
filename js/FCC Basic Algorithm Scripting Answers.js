// freeCodeCamp Basic Algorithm Scripting Answers
// 1st solution = My Solution
// 2nd solution = Improved Solution

// 1 Convert Celsius to Fahrenheit
function convertToF(celsius) {
  return (celsius * 9) / 5 + 32
}

// 2 Reverse a String
function reverseString(str) {
  let reversedString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString
}

// 3 Factorialize a Number
function factorialize(num) {
  if (num <= 1) return 1
  return num * factorialize(num - 1)
}
function factorialize(num) {
  return num > 1 ? num * factorialize(num - 1) : 1
}

// 4 Find the Longest Word in a String
function findLongestWordLength(str) {
  let longestLengthCount = 0
  let iterator = 0
  for (let i = 0; i < str.length; i++) {
    str[i] === " " ? (iterator = 0) : iterator++
    if (iterator > longestLengthCount) longestLengthCount = iterator
  }
  return longestLengthCount
}

// 5 Return Largest Numbers in Arrays
function largestOfFour(arr) {
  const resultArr = []
  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = arr[i][0]
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > resultArr[i]) resultArr[i] = arr[i][j]
    }
  }
  return resultArr
}

// 6 Confirm the Ending
function confirmEnding(str, target) {
  const startCheckIndex = str.length - target.length
  for (let i = 0; i < target.length; i++) {
    if (str[startCheckIndex + i] !== target[i]) return false
  }
  return true
}

// 7 Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  if (num <= 0) return ""
  return str + repeatStringNumTimes(str, num - 1)
}
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : ""
}

// 8 Truncate a String
function truncateString(str, num) {
  return num < str.length ? `${str.slice(0, num)}...` : str
}

// 9 Finders Keepers
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i]
  }
}

// 10 Boo who
function booWho(bool) {
  return typeof bool === "boolean"
}

// 11 Title Case a Sentence
function titleCase(str) {
  let words = str.toLowerCase().split(" ")
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase())
  }
  return words.join(" ")
}

// 12 Slice and Splice
function frankenSplice(arr1, arr2, n) {
  const newArr = [...arr2]
  newArr.splice(n, 0, ...arr1)
  return newArr
}

// 13 Falsy Bouncer
function bouncer(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i])
  }
  return newArr
}

// 14 Where do I Belong
function getIndexToIns(arr, num) {
  /* Sort array */
  let tracker
  do {
    tracker = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
        tracker++
      }
    }
  } while (tracker > 0)
  /* Find index where num should be inserted */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i
  }
  return arr.length
}

// 15 Mutations
function mutation(arr) {
  const targetChars = arr[0].toLowerCase()
  const checkerChars = arr[1].toLowerCase()
  let matchedChars = 0
  for (let i = 0; i < checkerChars.length; i++) {
    for (let j = 0; j < targetChars.length; j++) {
      if (targetChars[j] === checkerChars[i]) {
        matchedChars++
        break
      }
    }
    if (matchedChars >= checkerChars.length) return true
  }
  return false
}

// 16 Chunky Monkey
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr]
  }
  return [arr.splice(0, size), ...chunkArrayInGroups(arr, size)]
}
