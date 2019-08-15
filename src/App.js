import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from "./containers/categoryItems.js"
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
              path="/login"
              component={signIn}
            />
            <Route
              exact path="/"
              render={() =>
                <MainPage
                  loginStatus={this.state.loggedIn}
                />}
              />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}}

export default App;
