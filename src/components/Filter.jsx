import React from "react";
import { Link } from "react-router-dom";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iAm: "",
      iWant: "",
      port: "",
    };
    this.changeIAm = this.changeIAm.bind(this);
    this.changeIWant = this.changeIWant.bind(this);
    this.changePort = this.changePort.bind(this);
  }

  changeIAm(e) {
    this.setState({
      iAm: e.target.value,
    });
  }
  changeIWant(e) {
    this.setState({
      iWant: e.target.value,
    });
  }
  changePort(e) {
    this.setState({
      port: e.target.value,
    });
  }

  render() {
    console.log(this.state.iAm);
    console.log(this.state.iWant);
    console.log(this.state.port);
    return (
      <div>
        <div className="i-am" onChange={this.changeIAm}>
          <legend>I am:</legend>
          <label for="Femme">Femme</label>
          <input name="Iam" type="radio" value="Femme"></input>
          <label for="Homme">Homme</label>
          <input name="Iam" type="radio" value="Homme"></input>
        </div>
        <div className="i-want" onChange={this.changeIWant}>
          <legend>I want:</legend>
          <label for="Femme">Femme</label>
          <input name="Iwant" type="radio" idvalue="Femme"></input>
          <label for="Homme">Homme</label>
          <input name="Iwant" type="radio" value="Homme"></input>
        </div>
        <div className="port" onChange={this.changePort}>
          <label for="ports">Choose port:</label>
          <select name="port" id="ports">
            <option value="">...</option>
            <option value="Stapula">Stapula</option>
            <option value="Dorestad">Dorestad</option>
            <option value="Kattegat">Kattegat</option>
          </select>
        </div>
        <Link to="./ProfileTinder">
          <button>ind Love</button>
        </Link>
      </div>
    );
  }
}

export default Filter;
