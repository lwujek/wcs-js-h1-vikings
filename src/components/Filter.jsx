import React from "react";
import "./Filter.css";
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
    this.filterIwant = this.filterIwant.bind(this);
    this.filterPort = this.filterPort.bind(this);
  }

  changeIAm(iam) {
    const { iAmChange } = this.props;
    this.setState({
      iAm: iam,
    });
    iAmChange(iam);
  }

  filterIwant(iwant) {
    const { homeIwant } = this.props;
    this.setState({
      iWant: iwant,
    });
    homeIwant(iwant);
  }

  filterPort(port) {
    const { homePort } = this.props;
    this.setState({
      port: port,
    });
    homePort(port);
  }

  reset() {
    this.setState({
      iAm: "",
      iWant: "",
      port: "",
    });
  }

  render() {
    return (
      <section>
        <div>
          <button onClick={this.reset}>reset</button>
        </div>
        <div className="i-am" onChange={this.changeIAm}>
          <legend>I am :</legend>
          <label htmlFor="femme">Femme</label>
          <input name="Iam" type="radio" value="femme"></input>
          <label htmlFor="homme">Homme</label>
          <input name="Iam" type="radio" value="homme"></input>
        </div>
        <div className="i-want" onChange={this.filterIwant}>
          <legend>I want :</legend>
          <label htmlFor="femme">Femme</label>
          <input name="Iwant" type="radio" value="femme"></input>
          <label htmlFor="homme">Homme</label>
          <input name="Iwant" type="radio" value="homme"></input>
        </div>
        <div className="port" onChange={this.filterPort}>
          <label htmlFor="ports">Choose port :</label>
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
      </section>
    );
  }
}

export default Filter;
