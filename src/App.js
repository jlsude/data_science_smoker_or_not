import style from './App.module.css';
import MainPage from './Components/Main Page/MainPage';
import ComputationPage from './Components/Computation Page/ComputationPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/computation' component={ComputationPage}/>
      </Switch>
    </Router>
  );
}

export default App;
