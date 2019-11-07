import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import HomePage from './Components/HomePage';
import Planets from './Components/Planets';
import Characters from './Components/Characters';
import Species from './Components/Species';
import Starships from './Components/Starships';
import Vehicles from './Components/Vehicles';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Planets/" component={Planets} />
          <Route path="/Characters/" component={Characters} />
          <Route path="/Species/" component={Species} />
          <Route path="/Starships/" component={Starships} />
          <Route path="/Vehicles/" component={Vehicles} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
