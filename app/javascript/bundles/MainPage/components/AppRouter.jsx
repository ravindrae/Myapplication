import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Main from './Main';
export default (props) => {
  return(
    <Router>
    <div>
    <Route  exact path='/' component={Main}/>
    <Route path='/users/sign_in' component={LoginForm}/>
    </div>
    </Router>
  )
}
