import React from "react";
import TinderCard from "react-tinder-card";
import "./ProfileTinder.css";
import { dataBase } from "./Api";

function ProfileTinder() {
  const characters = dataBase;
  console.log(characters);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div>
      <h1>Horned Félag</h1>
      <div className="cardContainer">
        {characters.map((character) => (
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

export default ProfileTinder;
