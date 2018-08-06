import React from "react";
import { Invitation } from "./InvitationComponent";
import WeddingImage from "../Images/wedding-profile.png";
import "./HomeComponent.css";

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <div className="logo">
            <span className="first-name">J</span><span className="and">&</span><span className="second-name">M</span>
          </div>
          <div className="header-buttons">
            <button className="header-button" >Save The Date</button>
            <button className="header-button" >Out Story</button>
            <button className="header-button" >Reach Us</button>
          </div>
        </div>
        <div className="first-part" >
          <div className="profile-image">
            <img src={WeddingImage} alt="wedding-image" />
          </div>
          <div className="wedding-heading">
            <p> Jithin & Mahima</p>
            <p> Wedding</p>
          </div>
        </div>
        <div className="second-part" >
        </div>
        <div className="third-part" >
        </div>
        <div className="App-footer">
        </div>
      </div>
    );
  }
}

export const Home = HomeComponent;
