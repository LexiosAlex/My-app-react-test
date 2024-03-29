import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import DashBoard from "./containers/categoryItems.js"
import SignIn from "./containers/singIn.js"
import LandingPage from "./containers/landingPage.js"
import ProductPage from "./containers/productPage.js"

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            <Route
            exact path="/"
            render={() => <LandingPage/>}
            />
            <Route
              path="/login"
              render={() => <SignIn/>}
            />
            <Route
              path="/dashboard"
              render={() => <DashBoard/>}
              />
            <Route
              path="/product/:id"
              component={ProductPage}
            />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}}

export default App;
