import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import AllReservations from '../components/AllReservations';

const mockStore = configureStore([thunk]);

test('AllReservations component renders correctly', () => {
  const store = mockStore({
    reservations: {
      reservations: [],
      isLoading: false,
      doctors: [],
    },
  });

  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <AllReservations />
      </MemoryRouter>
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
