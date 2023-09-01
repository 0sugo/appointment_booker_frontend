import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RegistrationForm from '../components/session/RegistrationForm';

describe('Registration form', () => {
  test('renders correctly', () => {
    const regisForm = render(
      <Router>
        <RegistrationForm />
      </Router>,
    );
    expect(regisForm).toMatchSnapshot();
  });
});
