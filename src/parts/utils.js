/**
 * fake amount
 * @param {string} type
 * @param {number} value
 * @returns {number}
 */
const translationCurrency = (type, value) => {
  switch (type) {
    case 'USD':
      (value / 64447).toFixed(6);
      break;

    default:
      (value * 64447).toFixed(2);
      break;
  }
  return value;
};
/**
 * format timestamp
 * @param {number} timestamp
 * @returns {Date}
 */
const humanTime = (timestamp) => {
  return new Date(timestamp).toUTCString();
};
/**
 *
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
const getRandom = (n, m) => {
  const num = Math.floor(Math.random() * (m - n + 1) + n);
  return num;
};
export { humanTime, translationCurrency, getRandom };
