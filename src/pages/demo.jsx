import React from 'react';
import { Button } from 'antd';
import './demo.css';

const Demo = () => {
  return (
    <div className="demo_container">
      <h2>demo</h2>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
    </div>
  );
};
export default Demo;
