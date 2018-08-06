import React from "react";
import { Invitation } from "./InvitationComponent";

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>Home</h4>
        <Invitation />
      </div>
    );
  }
}

export const Home = HomeComponent;
