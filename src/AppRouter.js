import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'



const AppRouter = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path='/' component={Home} />
      <Route component={Home} />
    </Switch>
   
  </BrowserRouter>
)

export default AppRouter
