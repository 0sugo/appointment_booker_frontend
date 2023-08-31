import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddItemForm from '../components/AddItemForm';

test('AddItemForm snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <AddItemForm />
      </Router>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
