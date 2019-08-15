import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import mainPage from "./components/mainPage/mainPage.js"
import signIn from "./components/signIn/signIn.js"

class App extends Component {
  state = {
    loggedIn: false,
    username: null
  };
  render() {
    return (
      <Router>
        <Route
          exact path="/login"
          component={signIn}
        />
        <Route
          exact path="/"
          component={mainPage} />
      </Router>
  )
}}

export default App;
