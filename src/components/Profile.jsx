import React from 'react';
import Avatar from './Avatar';
import Navbar from './Navbar';
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const nickNameOk = this.localStorage.getItem('newNickName');
    this.state = {
      nickname: nickNameOk || '',
    };
    this.changeNickName = this.changeNickName.bind(this);
  }

  changeNickName(event) {
    const newNickName = event.target.value;
    this.localStorage.setItem('newNickName', newNickName);
    this.setState({
      nickname: newNickName,
    });
  }

  render() {
    const { nickname } = this.state;
    return (
      <div className="Avatar">
        <Navbar/>
        <h1>Bienvenue {nickname} !</h1>
        <Avatar />
        <div className="LabelNickname">
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
        </div>
        <p>
          Viking, Viqueen, édite ton profil pour avoir de meilleures chances de rencontrer ton ou ta "felag" !
        </p>
      </div>
    );
  }
}

export default Profile;


