import React from 'react';
import Avatar from './Avatar';
import Navbar from './Navbar';
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const nickNameOk = this.localStorage.getItem('newNickName');
    const descriptionOK = this.localStorage.getItem('newDescription');

    this.state = {
      nickname: nickNameOk || '',
      description: descriptionOK || '',
    };
    this.changeNickName = this.changeNickName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }

  changeNickName(event) {
    const newNickName = event.target.value;
    this.localStorage.setItem('newNickName', newNickName);
    this.setState({
      nickname: newNickName,
    });
  }

  changeDescription(event) {
    const newDescription = event.target.value;
    this.localStorage.setItem('newDescription', newDescription);
    this.setState({
      description: newDescription,
    });
  }

  render() {
    const { nickname, description } = this.state;
    return (
      <div className="Avatar">
        <Navbar/>
        <div className="BackgroundProfile">
        <h1 className="h1Profile">Mon profil</h1>
        <p className ="paraProfile">
          Viking, Viqueen, édite ton profil ! Cela te donnera de meilleures chances de rencontrer ton ou ta felag !
        </p>
        <Avatar />
        <h2> {nickname} </h2>
    <p>{description}</p>
        <div className="Form">
        <label for='Nickname'>Ton pseudo :</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            minLength="3"
            maxLength="14"
            placeholder="Entre ton pseudo"
            autoComplete="off"
            onChange={this.changeNickName}
          ></input>
          <label for='description'>Ta description :</label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Entre ta description"
            autoComplete="off"
            onChange={this.changeDescription}
          ></textarea>
        </div>
        </div>
      </div>
    );
  }
}

export default Profile;


