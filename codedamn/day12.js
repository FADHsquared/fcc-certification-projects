const sayNumberInEnglish = (n) => {
  if (n < 0 || n > 9999999999999) {
    console.error('Number out of range');
    return;
  }
  if (n === 0) {
    return 'zero';
  }

  const map = {
    1000000000: 'billion',
    1000000: 'million',
    1000: 'thousand',
    100: 'hundred',
    90: 'ninety',
    80: 'eighty',
    70: 'seventy',
    60: 'sixty',
    50: 'fifty',
    40: 'forty',
    30: 'thirty',
    20: 'twenty',
    19: 'nineteen',
    18: 'eighteen',
    17: 'seventeen',
    16: 'sixteen',
    15: 'fifteen',
    14: 'fourteen',
    13: 'thirteen',
    12: 'twelve',
    11: 'eleven',
    10: 'ten',
    9: 'nine',
    8: 'eight',
    7: 'seven',
    6: 'six',
    5: 'five',
    4: 'four',
    3: 'three',
    2: 'two',
    1: 'one',
  };
  const useOnePrefix = [1000000000, 1000000, 100000, 1000, 100];

  let tempNumber = n;
  let theString = '';

  // Object.keys(map) returns the numbers in ascending order (1, 2, 3, 4, ...)
  // for some reason, so we're reversing the array again
  // It also returns the numbers as strings, wth?
  Object.keys(map)
    .reverse()
    .map((numStr) => parseInt(numStr))
    .forEach((num) => {
      if (num <= tempNumber) {
        const subtractTimes = Math.floor(tempNumber / num);

        theString += `${
          !useOnePrefix.includes(num)
            ? ''
            : `${sayNumberInEnglish(subtractTimes)} `
        }${map[num]} `;
        tempNumber -= num * subtractTimes;
      }
    });

  return theString.trim().replace(/ty +(?!thousand|million|billion)/g, 'ty-');
};
