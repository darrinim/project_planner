import React from 'react';
import './profile.css';

function Profile(props) {
  console.log('prop', props.tripSelected)
  return(
    <div className="profileContainer">
      <div className="profileImage"><i className="far fa-user-circle fa-6x"></i></div>
      <div className="profileInfo">
        <ul className="unorderedList">
          <li className="profileList">Username: {props.currentUser.username}</li>
          <li className="profileList">Email: {props.currentUser.email}</li>
        </ul>
      </div>
      <div className="profileTrips">
        <h2 className="profileHeader">Current Trips</h2>
        <div className="temporaryText">Your Trips!</div>
            <div>{props.tripSelected && props.tripSelected.trip}</div>
            <h3 className="yourGearHeader">Your Gear: </h3>
            {props.selectedGear && props.selectedGear.map((ele) => {
              return (
                <div>{ele.gear}</div>
              )
            })}
    </div>
  </div>
  );
};


export default Profile;
