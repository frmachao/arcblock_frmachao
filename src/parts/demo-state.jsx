/* eslint-disable no-console */
import React, { createContext } from 'react';
import { PropTypes } from 'prop-types';
import { useLocalObservable } from 'mobx-react-lite';
import request from './request';
import { awaitWrap } from './utils';

const DemoContext = createContext(null);

export const DemoState = ({ children }) => {
  const store = useLocalObservable(() => ({
    unit: 'BTC',
    hash: '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa',
    loading: false,
    error: null,
    blockData: null,
    currentList: null,
    pageInfo: {
      pageSize: 5,
      current: 1,
      total: 0,
    },
    changeUnit: () => {
      // eslint-disable-next-line no-unused-expressions
      store.unit === 'USD' ? store.setUnit('BTC') : store.setUnit('USD');
    },
    setUnit: (value) => {
      store.unit = value;
    },
    setCurrentData: (current, pageSize, list) => {
      const innerlist = list || store.blockData.tx;
      store.currentList = innerlist.slice((current - 1) * pageSize, pageSize + (current - 1) * pageSize);
    },
    fetchBlock: async (hash) => {
      store.loading = true;
      const [error, response] = await awaitWrap(request.get(`/${hash || store.hash}`));
      store.loading = false;
      if (error) {
        console.log('err', error.message);
        store.error = error.message;
        return;
      }
      const list = response.tx ? response.tx : [];
      const { pageInfo } = store;
      store.setCurrentData(pageInfo.current, pageInfo.pageSize, list);
      store.blockData = response;
      store.pageInfo = { ...store.pageInfo, total: response.tx.length };
    },
  }));
  return <DemoContext.Provider value={store}>{children}</DemoContext.Provider>;
};
DemoState.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useDemoStore = () => {
  const store = React.useContext(DemoContext);
  if (!store) {
    throw new Error('useDemoStore must be used within a DemoState.');
  }
  return store;
};
