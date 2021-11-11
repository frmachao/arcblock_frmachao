import React, { createContext } from 'react';
import { PropTypes } from 'prop-types';
import { useLocalStore } from 'mobx-react-lite';

export const DemoContext = createContext(null);
export const DemoState = ({ children }) => {
  const store = useLocalStore(() => ({
    unit: 'USD',
    changeUnit: () => {
      store.unit = store.unit === 'USD' ? 'BTC' : 'USD';
    },
  }));

  // 默认请求登陆数据

  return <DemoContext.Provider value={store}>{children}</DemoContext.Provider>;
};
DemoState.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStore = () => {
  const store = React.useContext(DemoContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a DemoState.');
  }
  return store;
};
