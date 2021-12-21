import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*Páginas*/

import Login from './view/login/';
import RegisterUser from './view/register-user/';

function App() {
  return (
    
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/newuser" component={RegisterUser} />
      </Router>   

  );
}

export default App;
