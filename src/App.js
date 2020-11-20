import "./App.css";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProfileTinder from "./components/ProfileTinder";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iAm: "",
    };
    this.changedIAm = this.changedIAm.bind(this);
  }

  changedIAm(iAm) {
    this.setState({
      iAm: iAm.target.value,
    });
  }

  render() {
    console.log(this.state.iAm);
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home changedIAm={this.changedIAm} />
            </Route>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/ProfileTinder">
              <ProfileTinder iam={this.state.iAm} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
