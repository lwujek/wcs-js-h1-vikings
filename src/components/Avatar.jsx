import React, { Component } from 'react';
import "./Avatar.css";



class Avatar extends Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const avatar = this.localStorage.getItem('Avatar');
    this.state = {
      picture: avatar || "https://images.ctfassets.net/cnu0m8re1exe/621LK0hTGKrRBzXdnqiuuE/e82b6415d8dec51658f2acd6ea6b70b7/viking.jpg?w=650&h=433&fit=fill",
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


