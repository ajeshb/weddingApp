import React from "react";

class InvitationComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>save the date </h4>
        <p>
          Akhil Das <span>and</span> Shilpa
        </p>
        <p className="date"> FEBRUARY 05, 2018</p>
        <p classNAme="time"> 10:30 AM </p>
        <p className="location"> Sree Narayana Guru Temple Auditorium,</p>
        <p className="place">Panganamkad, Thrissur</p>
      </div>
    );
  }
}

export const Invitation = InvitationComponent;
