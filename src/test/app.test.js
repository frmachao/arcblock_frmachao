import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../app';

afterEach(cleanup);

it('should take a snapshot', () => {
  // 渲染组件
  const { asFragment } = render(<App />);
  // 将渲染的组件和快照匹配
  expect(asFragment()).toMatchSnapshot();
});
