/* eslint-disable */
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/session/RegistrationForm';
import LoginForm from './components/session/LoginForm';
function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <LoginForm />
      <header className="App-header">
        Learn React
      </header>
    </div>
  );
}

export default App;
