import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import mainPage from "./components/mainPage/mainPage.js"
import signIn from "./components/signIn/signIn.js"

class App extends Component {
  state = {
    loggedIn: false,
    username: null
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            <Route
              exact path="/login"
              component={signIn}
            />
            <Route
              exact path="/"
              component={mainPage} />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}}

export default App;
