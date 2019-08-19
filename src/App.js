import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from "./containers/categoryItems.js"
import SignIn from "./containers/singIn.js"

class App extends Component {
  // state = {
  //   loggedIn: false,
  // };
  //
  // onChangeLoginStatus = (isLogined) => {
  //   this.setState({
  //     loggedIn: isLogined
  //   })
  // };


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            <Route
              path="/login"
              render={() => <SignIn/>}
            />
            <Route
              exact path="/"
              render={() => <MainPage/>}
              />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}}

export default App;
