/** @param {string} input */
const isPangram = (input) => {
  return (
    input
      .toLowerCase()
      .split('')
      .filter((char) => /[a-z]/.test(char))
      .filter((char, idx, thisArr) => !thisArr.slice(0, idx).includes(char))
      .reduce((acc, val) => acc + val.charCodeAt(0), 0) >= 2847
  );
};
console.log(isPangram('Quick brown fox jumps over the lazy dog.'));
