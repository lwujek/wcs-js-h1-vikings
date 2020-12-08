import React, { Component } from 'react';
import "./Avatar.css";


class Avatar extends Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const avatar = this.localStorage.getItem('Avatar');
    this.state = {
      picture: avatar || "https://cdn0.iconfinder.com/data/icons/viking-7/64/Viking-soldier-boss-man-avatar-warrior-512.png",
    };
  }

  render() {
    const { picture } = this.state;
    this.localStorage.setItem('Avatar', picture);
    return (
      <div className="Avatar">
        <div className="Align">
          <figure
            onClick={(event) => {
              const newImage = prompt("Insère l'url de ton image de profil");
              this.setState({ picture: newImage });
            }}
          >
            <img alt="Avatar" src={picture} className="Circle" />
          </figure>
        </div>
      </div>
    );
  }
}

export default Avatar;

