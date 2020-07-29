import React from 'react';
import Home from './components/Home';
import Board from './components/Board';
import './App.css';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      
        <Switch>
          <Route exact path="/tic-tac-toe/" component={Home} />
          <Route exact path="/board/" component={Board} />
        </Switch>
      
    </div>
  );
  
}
export default App;
