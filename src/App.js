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
      iWant: "",
      port: "",
    };
    this.changedIAm = this.changedIAm.bind(this);
    this.appIwant = this.appIwant.bind(this);
    this.appPort = this.appPort.bind(this);
  }

  changedIAm(iam) {
    this.setState({
      iAm: iam.target.value,
    });
  }

  appIwant(iwant) {
    this.setState({
      iWant: iwant.target.value,
    });
  }

  appPort(port) {
    this.setState({
      port: port.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home
                changedIAm={this.changedIAm}
                appIwant={this.appIwant}
                appPort={this.appPort}
              />
            </Route>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/ProfileTinder">
              <ProfileTinder iam={this.state.iAm} iwant={this.state.iWant} port={this.state.port}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

