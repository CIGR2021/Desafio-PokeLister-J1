import React from 'react';
import {
  Switch,
  Route,
  // Redirect
} from 'react-router-dom';
import './App.css'
import CardList from './components/CardList';
import CardView from './view/CardView';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ CardList } />
      <Route exact path="/pokemon/:name" component={ CardView } />
      {/* <Route path="/" exact>
        <Redirect to="/pokemons/list" />
      </Route> */}
    </Switch>
  );
}

export default App;
