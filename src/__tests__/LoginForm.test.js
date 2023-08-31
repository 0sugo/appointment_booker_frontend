import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../components/session/LoginForm';

describe('LoginForm', () => {
  test('renders correctly', () => {
    const loginPage = render(
      <Router>
        <LoginForm />
      </Router>,
    );
    expect(loginPage).toMatchSnapshot();
  });
});
