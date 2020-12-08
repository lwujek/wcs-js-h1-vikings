import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./ProfileTinder.css";
import { dataBase } from "./Api";
import Navbar from "./Navbar";

class ProfileTinder extends Component {
  render() {
    console.log(this.props.iam);
    const characters = dataBase;
    // console.log(characters);
    const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
      console.log(name + " left the screen!");
    };

    const iam = this.props.iam;
    const iwant = this.props.iwant;
    const port = this.props.port;

    return (
      <div className="containerTinder">
      <Navbar />
        <div className="cardContainer">
        <h1>Swipe à droite si tu es intéressé.e, sinon swipe à gauche</h1>
          {characters
            .filter((e) => (iam ? iam === e.preferences : true))
            .filter((e) => (iwant ? iwant === e.genre : true))
            .filter((e) => (port ? port === e.port : true))
            .map((character) => (
              <TinderCard
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.photo + ")" }}
                  className="card"
                >
             <div className="descriptions">
                    <h2>{character.name}</h2>
                    <h3>{character.description}</h3>
                  </div>
                </div>
              </TinderCard>
            ))}
        </div>
        </div>
        
      
    );
  }
}

export default ProfileTinder;
