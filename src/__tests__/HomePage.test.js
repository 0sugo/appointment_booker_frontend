import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomePage from '../components/HomePage';

const mockStore = configureStore([]);

describe('Homepage', () => {
  let store;
  let homePage;

  beforeEach(() => {
    const initialState = {
      doctors: {
        allDoctors: [
          {
            id: 1,
            image_url: 'example.com/image1.jpg',
            name: 'Dr martins',
            specialisation: 'Neurosurgery',
            city: 'Ibadan',
          },
        ],
      },
    };
    store = mockStore(initialState);

    homePage = render(
      <Router>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Router>,

    );
  });

  test('renders correctly', () => {
    expect(homePage).toMatchSnapshot();
  });
});
