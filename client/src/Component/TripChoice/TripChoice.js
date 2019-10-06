import React from 'react'
import './TripChoice.css'
import { Link } from 'react-router-dom'

function TripChoice(props) {
  return(
    <div className="trip-choice-container">
      <div className="trip-choice">
        <Link className="trip-header" to="/planning">
          <img
            className='photo'
            src="https://i.imgur.com/vVIAXS0.jpg" alt='Camping'
            name="Camping"
            onClick = {(e) => props.selectTrip(e)}
          />
        <h2 className="trip-name"
          >Camping</h2>
        </Link>
      </div>
      <div className="trip-choice">
        <Link className="trip-header" to="/planning">
          <img
          className='photo'
          src="https://i.imgur.com/GFZQ8B4.jpg" alt='Hiking'
          name="Hiking"
          onClick = {(e) => props.selectTrip(e)}
          />
          <h2 className="trip-name">Hiking</h2>
        </Link>
      </div>
      <div className="trip-choice">
        <Link className="trip-header" to="/planning">
          <img
            className='photo'
            src="https://res.cloudinary.com/radiscipio/image/upload/c_crop,h_2700,w_8688,y_1300/v1568930994/e9mlg6xpghnpmvx99adk.jpg" alt='Biking'
            name="Biking"
            onClick = {(e) => props.selectTrip(e)}
          />
          <h2 className="trip-name">Biking</h2>
        </Link>
      </div>
    </div>
  )
};

export default TripChoice
