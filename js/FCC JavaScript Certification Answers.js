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

// Cash Register
function checkCashRegister(price, cash, cid) {
  // NOTE: CID mutation
  cid.reverse();

  const map = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  let change = cash - price;

  const changeList = [
    ...cid.map(([unit, amount], idx) => {
      if (change < map[unit]) return [unit, 0];

      const unitAmount =
        change < amount
          ? Math.floor(change / map[unit])
          : Math.floor(amount / map[unit]);
      const amountToDeduce = unitAmount * map[unit];

      change -= amountToDeduce;
      cid[idx][1] -= amountToDeduce;

      return [unit, amountToDeduce];
    }),
  ].reverse();

  const drawerHasMoney = cid
    .map(([_, amount]) => amount)
    .every((moneyVal) => moneyVal > 0);

  const status =
    change != 0 ? 'INSUFFICIENT_FUNDS' : drawerHasMoney ? 'OPEN' : 'CLOSED';

  const returnObj = {
    status,
    change:
      status === 'INSUFFICIENT_FUNDS'
        ? []
        : status === 'CLOSED'
        ? changeList
        : changeList.filter(([_, amount]) => amount > 0),
  };

  console.log(returnObj);
  return returnObj;
}
