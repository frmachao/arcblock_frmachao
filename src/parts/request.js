import { extend } from 'umi-request';

const request = extend({
  prefix: 'https://blockchain.info/rawblock',
  timeout: 10000,
  mode: 'cors',
});
export default request;
