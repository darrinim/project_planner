import React from 'react'
import axios from 'axios'
import './main.css'

import TripChoice from '../TripChoice/TripChoice'
import Profile from '../Profile/Profile'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: []
    }
  };

  render() {
    console.log('main', this.props)
    return (
      <div className="main-background">
        <div className="main">
          {
            this.props.currentUser && this.props.currentUser ? (
            <Profile
              currentUser={this.props.currentUser}
              removeTrip={(e)=>this.props.removeTrip(e)}
              selectedTrip={this.props.selectedTrip}
              tripId={this.props.tripId}
              tripSelected={this.props.tripSelected}
              selectedGear={this.props.selectedGear}
            />
        ): ''}
          <TripChoice
            selectTrip={(e) => this.props.selectTrip(e)}
          />
        </div>
      </div>
    )
  };
};

export default Main;
