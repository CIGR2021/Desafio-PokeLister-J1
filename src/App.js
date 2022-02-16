import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css'
import CardList from './components/CardList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ CardList } />
      {/* <Route exact path="/pokemon/:name" component={ View } /> */}
    </Switch>
  );
}

export default App;
