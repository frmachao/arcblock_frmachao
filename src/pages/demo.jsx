/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Input, Pagination, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import queryString from 'query-string';
import BlockContainer from '../parts/block';
import { useDemoStore } from '../parts/demo-state';
import './demo.less';

const { Search } = Input;

const Demo = observer((props) => {
  const demoStore = useDemoStore();
  const { pageInfo } = demoStore;
  const query = queryString.parse(props.location.search);
  const onSearch = (value) => {
    if (!value) return;
    notifySearch(value);
  };
  const onPressEnter = (e) => {
    if (!e.target.value) return;
    notifySearch(e.target.value);
  };
  const pageChange = (current, pageSize) => {
    let nextCurrent = current;
    if (pageSize !== Number(query.pageSize) && pageSize !== pageInfo.pageSize) {
      nextCurrent = 1;
    }
    notifyPage(nextCurrent, pageSize);
  };
  useEffect(() => {
    demoStore.fetchBlock(query.hash);
  }, [demoStore.hash]);
  const notifySearch = (v) => {
    props.history.push({
      pathname: '/demo',
      search: queryString.stringify({
        ...query,
        hash: v,
        current: 1,
      }),
    });
    demoStore.hash = v;
  };
  const notifyPage = (current, pageSize) => {
    props.history.push({
      pathname: '/demo',
      search: queryString.stringify({
        ...query,
        current,
        pageSize,
      }),
    });
    demoStore.setCurrentData(current, pageSize);
  };
  return (
    <div className="demo_container">
      <h2 style={{ textAlign: 'center' }}>demo</h2>
      <Search
        loading={demoStore.loading}
        style={{ padding: '2rem' }}
        placeholder="Search your transaction, an address or a block"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        onPressEnter={onPressEnter}
      />
      <Spin spinning={demoStore.loading}>
        <BlockContainer />
        {demoStore.blockData && (
          <Pagination
            pageSize={Number(query.pageSize) || pageInfo.pageSize}
            current={Number(query.current) || pageInfo.current}
            total={pageInfo.total}
            onChange={pageChange}
          />
        )}
      </Spin>
    </div>
  );
});
export default Demo;
