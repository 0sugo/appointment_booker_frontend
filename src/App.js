/* eslint-disable */
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/session/RegistrationForm';

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <header className="App-header">
        Learn React
      </header>
    </div>
  );
}

export default App;
