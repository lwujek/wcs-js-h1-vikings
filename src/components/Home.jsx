import React, { Component } from "react";
import Header from "./Header.jsx";
import "./Home.css";
import Filter from "./Filter.jsx";
import Navbar from "./Navbar.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.iAmChange = this.iAmChange.bind(this);
    this.homeIwant = this.homeIwant.bind(this);
    this.homePort = this.homePort.bind(this);
  }

  iAmChange(iam) {
    const { changedIAm } = this.props;
    changedIAm(iam);
  }

  homeIwant(iwant) {
    const { appIwant } = this.props;
    appIwant(iwant);
  }

  homePort(port) {
    const { appPort } = this.props;
    appPort(port);
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="column">
          <Header />
          <Filter
            iAmChange={this.iAmChange}
            homeIwant={this.homeIwant}
            homePort={this.homePort}
          />
        </div>
      </div>
    );
  }
}

export default Home;
