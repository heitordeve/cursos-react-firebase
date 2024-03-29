import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Páginas*/

import Login from './view/login/';
import RegisterUser from './view/register-user/';
import Home from './view/home/';

function App() {
  return (
    
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={RegisterUser} />
      </Router>   

  );
}

export default App;
