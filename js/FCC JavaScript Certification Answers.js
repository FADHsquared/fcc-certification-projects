// Palindrome Checker
function palindrome(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('')
    .every(
      (letter, idx, arrToCheck) =>
        letter === arrToCheck[arrToCheck.length - idx - 1]
    );
}

// Roman Numeral Converter
function convertToRoman(num) {
  const map = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  const reversedKeys = Object.keys(map).reverse();

  let romanNum = '';

  while (num > 0) {
    for (let i = 0; i < reversedKeys.length; i++) {
      const key = reversedKeys[i];
      if (key <= num) {
        romanNum += map[key];
        num -= key;
        break;
      }
    }
  }

  return romanNum;
}

// Caesars Cipher
function rot13(str) {
  return str
    .split('')
    .map((char) =>
      /\W/.test(char)
        ? char
        : char.charCodeAt(0) - 13 < 65
        ? String.fromCharCode(char.charCodeAt(0) + 26 - 13)
        : String.fromCharCode(char.charCodeAt(0) - 13)
    )
    .join('');
}

// Telephone Number Validator (I-don't-even-understand-what-I-wrote edition)
function telephoneCheck(str) {
  const numbers = '0123456789';
  const specialChars = '?';

  let numbersCount = 0;
  let hyphenCount = 0;
  let bracketsBeingOpened = false;
  let numsInBrackets = 0;

  if (str[0] === '0') return false;
  if (str[0] === '1') numbersCount--;

  for (let i = 0; i < str.length; i++) {
    if (numbers.indexOf(str[i]) !== -1) numbersCount++;
    if (str[i] === '-') hyphenCount++;
    if (specialChars.indexOf(str[i]) !== -1) return false;

    if (!bracketsBeingOpened) {
      if (str[i] === ')') return false;
      if (str[i] === '(') {
        bracketsBeingOpened = true;
      }
    } else {
      if (str[i] === ')') {
        numsInBrackets = 0;
        bracketsBeingOpened = false;
      } else {
        numsInBrackets++;
        if (numsInBrackets > 3) return false;
      }
    }
  }

  if (numbersCount === 10 && hyphenCount <= 2) return true;
  return false;
}
