import "./App.css";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import ProfileTinder from "./components/ProfileTinder";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/ProfileTinder" component={ProfileTinder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
