import React, { Component } from "react";
import Header from "./Header.jsx";
import "./Home.css";
import Filter from "./Filter.jsx";
import Navbar from "./Navbar.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.iAmChange = this.iAmChange.bind(this);
  }

  iAmChange(iAm) {
    const { changedIAm } = this.props;
    changedIAm(iAm);
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="column">
          <Header />
          <Filter iAmChange={this.iAmChange} />
        </div>
      </div>
    );
  }
}

export default Home;
