import React, { Component } from "react";
import styled from "styled-components";
import { GiVikingHelmet, GiVikingChurch } from "react-icons/gi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Section = styled.section`
  width: 100%;
  height: 6rem;
  background : linear-gradient(#9198e5, #e66465);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    height: 90%;
    margin: 0 1rem;
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <IconContext.Provider value={{ size: "4rem", color: "#fff" }}>
        <Section>
          <Link to="/">
            <GiVikingChurch className="btn" />
          </Link>
          <Link to="/profile">
            <GiVikingHelmet className="btn" />
          </Link>
        </Section>
      </IconContext.Provider>
    );
  }
}

