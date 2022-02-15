import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css'
import Card from './components/Card';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Card } />
    </Switch>
  );
}

export default App;
