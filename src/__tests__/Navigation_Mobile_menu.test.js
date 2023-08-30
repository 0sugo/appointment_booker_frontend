/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationPanel from '../components/navigation/NavigationPanel';
import MobileNav from '../components/navigation/MobileNav';
import '@testing-library/jest-dom/extend-expect';

describe('Navigation and mobile menu:', () => {
  test('Navigation panel renders correctly', () => {
    render(
      <Router>
        <NavigationPanel />
      </Router>,
    );

    expect(screen.getAllByText('Doctors Appointment')).toBeInTheDocument;
    expect(screen.getByText('Doctors')).toBeInTheDocument;
  });

  it('displays mobile menu when hamburger button is clicked', () => {
    render(
      <Router>
        <MobileNav />
      </Router>,
    );

    const hamburgerButton = screen.getByTestId('hamburger');
    fireEvent.click(hamburgerButton);

    const mobileMenu = screen.getByTestId('mobile_menu');
    expect(mobileMenu).toHaveClass('open');
  });
});
