import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Demo from '../pages/demo';
import { DemoState } from '../parts/demo-state';

const renderWithContext = () => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        <DemoState>
          <Demo {...history} />
        </DemoState>
      </Router>
    ),
  };
};

afterEach(cleanup);

it('should in the document', () => {
  const { getByTestId } = renderWithContext();
  expect(getByTestId('demo-container')).toBeInTheDocument();
});
