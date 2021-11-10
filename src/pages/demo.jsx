/* eslint-disable no-console */
import React from 'react';
import { Input, Pagination } from 'antd';
import BlockContainer from '../parts/block';
import './demo.less';

const { Search } = Input;
const Demo = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div className="demo_container">
      <h2 style={{ textAlign: 'center' }}>demo</h2>
      <Search
        style={{ padding: '2rem' }}
        placeholder="Search your transaction, an address or a block"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <BlockContainer />
      <Pagination defaultCurrent={6} total={500} />
    </div>
  );
};
export default Demo;
