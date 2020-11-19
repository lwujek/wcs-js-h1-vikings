import React, { Component } from "react";
import styled from "styled-components";
import { GiVikingHelmet, GiVikingChurch } from "react-icons/gi";
import { IconContext } from "react-icons";
//import { Link } from "react-router-dom";

const Section = styled.section`
  width: 100vw;
  height: 10vh;
  background: #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    background-image: 
    width: 6rem;
    height: 90%;
    margin: 0 1rem;
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <IconContext.Provider value={{ size: "6rem", color: "#000" }}>
        <Section>
          <GiVikingChurch className="btn" />
          <GiVikingHelmet className="btn" />
        </Section>
      </IconContext.Provider>
    );
  }
}
