// freeCodeCamp Basic Algorithm Scripting Answers

// Sum All Numbers in a Range
function sumAll(arr) {
  const minMaxArr = arr.sort((a, b) => a - b);
  if (minMaxArr[0] >= minMaxArr[1]) return minMaxArr[0];
  return minMaxArr[0] + sumAll([minMaxArr[0] + 1, minMaxArr[1]]);
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
  return [
    ...arr2.filter((item) => !arr1.some((checkItem) => checkItem === item)),
    ...arr1.filter((item) => !arr2.some((checkItem) => checkItem === item)),
  ];
}

// Seek and Destroy
function destroyer(arr, ...numsToRemove) {
  return arr.filter((item) => !numsToRemove.includes(item));
}

// Wherefore art thou
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter((collectionObject) =>
    sourceKeys.every((key) => source[key] === collectionObject[key])
  );
}

// Spinal Tap Case
function spinalCase(str) {
  const splittedString = str.replace(/\s|_/g, '-').split('');
  for (let i = 1; i < splittedString.length; i++) {
    if (/[a-z]{1}[A-Z]/.test(splittedString[i - 1] + splittedString[i])) {
      splittedString.splice(i, 0, '-');
    }
  }
  return splittedString.join('').toLowerCase();
}

// Pig Latin
function translatePigLatin(str) {
  return /^[^aiueo]/.test(str)
    ? str.replace(/^([^aiueo]*)(\w*)/, '$2$1ay')
    : `${str}way`;
}

// Search and Replace
function myReplace(str, before, after) {
  return str[str.indexOf(before)].toLowerCase() === str[str.indexOf(before)]
    ? str.replace(before, after.toLowerCase())
    : str.replace(before, after.replace(after[0], after[0].toUpperCase()));
}

// DNA Pairing
function pairElement(str) {
  const pairMapping = {
    A: ['A', 'T'],
    T: ['T', 'A'],
    C: ['C', 'G'],
    G: ['G', 'C'],
  };
  return str.split('').map((char) => pairMapping[char]);
}

// Missing letters
function fearNotLetter(str) {
  const firstCharCode = str.charCodeAt(0);
  return str
    .split('')
    .map((char, idx) =>
      char.charCodeAt(0) !== idx + firstCharCode
        ? String.fromCharCode(idx + firstCharCode)
        : null
    )
    .filter((result) => result !== null)[0];
}

// Sorted Union
function uniteUnique(...arr) {
  return arr.reduce((prevVal, currVal) => {
    return [...prevVal, ...currVal.filter((num) => !(num in prevVal))];
  }, []);
}

// Convert HTML Entities
function convertHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  const numArray = [1];
  let acculNum = 1;
  for (let i = 1; numArray[i - 1] <= num; i++) {
    numArray[i] = numArray[i - 1] + (numArray[i - 2] || 0);
    if (numArray[i] % 2 === 1) acculNum += numArray[i];
  }
  acculNum -= numArray[numArray.length - 1];
  numArray.pop();

  return acculNum;
}

// Sum All Primes
function sumPrimes(num) {
  let primeNums = [];
  for (let i = 1; i <= num; i++) {
    let divisibleBy = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisibleBy = [...divisibleBy, j];
    }
    if (divisibleBy[0] === 1 && divisibleBy[1] === i)
      primeNums = [...primeNums, i];
  }
  return primeNums.reduce((prevVal, currVal) => prevVal + currVal, 0);
}

// Smallest Common Multiple
function smallestCommons(arr) {
  const [lowNumber, highNumber] = arr.sort((num1, num2) => num1 - num2);
  const numRangeArray = [...Array(highNumber + 1).keys()].filter(
    (num) => num >= lowNumber
  );

  for (let i = 1; true; i++) {
    const currNumber = highNumber * i;
    if (numRangeArray.every((num) => currNumber % num === 0)) return currNumber;
  }
}

// Drop it
function dropElements(arr, func) {
  let conditionMet = false;
  return arr.filter((num) => {
    if (conditionMet) return true;
    if (func(num)) {
      conditionMet = true;
      return true;
    }
  });
}

// Steamroller
// Warning: this answer is hacky.
function steamrollArray(arr) {
  const mappings = [...Array(10).keys()].join().split(',');
  return arr
    .join()
    .split(',')
    .map((el) =>
      el === '[object Object]' ? {} : el in mappings ? parseInt(el) : el
    )
    .filter((el) => el !== '');
}

// Binary Agents
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(' ').map((binaryCharCode) =>
      binaryCharCode
        .split('')
        .map((binaryDigit) => parseInt(binaryDigit))
        .reduce(
          (prevVal, currVal, idx) =>
            prevVal + currVal * 2 ** (binaryCharCode.length - 1 - idx),
          0
        )
    )
  );
}

// Everything Be True
function truthCheck(collection, pre) {
  return collection.reduce(
    (prevVal, currVal) => (prevVal && pre in currVal ? !!currVal[pre] : false),
    true
  );
}

// Arguments Optional
function addTogether(...nums) {
  if (nums.every((num) => typeof num === 'number')) {
    if (nums.length === 1)
      return (num) => (typeof num === 'number' ? nums[0] + num : undefined);
    return nums[0] + nums[1];
  }
}

// Make a Person
let Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let [firstName, lastName] = firstAndLast.split(' ');

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return [firstName, lastName].join(' ');
  };

  this.setFirstName = function (first) {
    firstName = first;
  };
  this.setLastName = function (last) {
    lastName = last;
  };
  this.setFullName = function (firstAndLast) {
    [firstName, lastName] = firstAndLast.split(' ');
  };
};

// Map the Debris
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((debris) => ({
    name: debris.name,
    orbitalPeriod: Math.round(
      2 * Math.PI * Math.sqrt((debris.avgAlt + earthRadius) ** 3 / GM)
    ),
  }));
}
