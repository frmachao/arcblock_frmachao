/**
 * fake amount
 * @param {number} value
 * @param {string} type
 * @returns {string}
 */
const translationCurrency = (value, type) => {
  let innerVlue = value / 100000000;
  switch (type) {
    case 'USD':
      innerVlue = (innerVlue * 64447).toFixed(2);
      return `$${innerVlue}`;
    default:
      innerVlue = innerVlue.toFixed(6);
      return `${innerVlue} BTC`;
  }
};
/**
 * format timestamp
 * @param {number} timestamp
 * @returns {Date}
 */
const toUTCString = (timestamp) => {
  if (timestamp) {
    return new Date(timestamp * 1000).toUTCString();
  }
  return '';
};
/**
 *
 * @param {number} timestamp
 * @returns {string}
 */
const absoluteHumanTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${m}`;
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
  const sum = array.reduce((pre, cur) => pre + cur.value, 0);
  return sum;
};

export { toUTCString, translationCurrency, getRandom, awaitWrap, getVlaueSum, absoluteHumanTime };
