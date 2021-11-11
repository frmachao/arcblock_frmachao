/* eslint-disable no-console */
/**
 * fake amount
 * @param {number} value
 * @param {string} type
 * @returns {string}
 */
const translationCurrency = (value, type) => {
  let innerVlue = value;
  switch (type) {
    case 'USD':
      innerVlue = (value * 64447).toFixed(2);
      return `$${innerVlue}`;
    default:
      innerVlue = value.toFixed(6);
      return `${innerVlue} BTC`;
  }
};
/**
 * format timestamp
 * @param {number} timestamp
 * @returns {Date}
 */
const humanTime = (timestamp) => {
  if (timestamp) {
    return new Date(timestamp * 1000).toUTCString();
  }
  return '';
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
/**
 *
 * @param {promise} promise
 * @returns {promise}
 */
const awaitWrap = (promise) => {
  return promise.then((data) => [null, data]).catch((err) => [err, null]);
};
/**
 *
 * @param {array} array
 * @returns {number}
 */
const getVlaueSum = (array) => {
  console.log('array', array);
  const sum = array.reduce((pre, cur) => pre + cur.value, 0);
  return sum / 100000000;
};

export { humanTime, translationCurrency, getRandom, awaitWrap, getVlaueSum };
