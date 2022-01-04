/** @param {number} seconds */
function formatDuration(seconds) {
  const MAPPING = {
    31536000: 'year',
    86400: 'day',
    3600: 'hour',
    60: 'minute',
    1: 'second',
  };

  let secondsLeft = seconds;

  const ans = [...Object.keys(MAPPING)]
    .reverse()
    .reduce((acc, val) => {
      const timePerUnit = Math.floor(secondsLeft / val);
      secondsLeft -= timePerUnit * val;

      return timePerUnit < 1 ? acc : `${acc}${timePerUnit} ${MAPPING[val]}, `;
    }, '')
    .replace(/(?<=[2-9] [a-z]+), /g, 's, ');

  return ans.slice(0, ans.length - 2).replace(/, (?=[0-9] [a-z]+$)/, ' and ');
}

console.log(formatDuration(3662));
