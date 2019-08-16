import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from "./containers/categoryItems.js"
import SignIn from "./components/signIn/signIn.js"

class App extends Component {
  state = {
    loggedIn: false,
    username: null
  };

  onChangeLoginStatus = (isLogined) => {
    this.setState({
      loggedIn: isLogined
    })
  };


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            <Route
              path="/login"
              render={() => <SignIn
                onChangeLoginStatus = {this.onChangeLoginStatus}
              />}
            />
            <Route
              exact path="/"
              render={() =>
                <MainPage
                  onChangeLoginStatus = {this.onChangeLoginStatus}
                  loginStatus={this.state.loggedIn}
                />}
              />
            />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}}

export default App;
