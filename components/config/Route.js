import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Login from '../login/index'
import Error404 from '../Error404'

// import Search from '../search'
// import About from '../about'
// import Profile from '../Profile'
// import Register from '../register/index'
// import Register_step_1 from '../register/Register_step_1'
// import Contact from '../Contact'
// import ListReg from '../listing-form'
// import Logout from '../Logout'
// import dashboard from '../dashboard/Welcome'
// import StepS from '../register/steps'

const Routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    {/* <Route path="/register" component={Register} />
    <Route path="/register-step-1" component={Register_step_1} />
    <Route path="/tilak" component={StepS} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/search" component={Search} />
    <Route path="/list-reg" component={ListReg} />
    <Route path="/logout" component={Logout} />
    <Route path="/dashboard" component={dashboard} />
    <Route path="/profile/:alias" component={Profile} /> */}

  
    <Route component={Error404} />
  </Switch>
);

export default Routes;
