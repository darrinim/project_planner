import React, { Component } from 'react';
import './Featured.css'

const Featured = () => {


  return (
    <div className="container">
      <h1 className="landingHeader">goodBoy</h1>
      <h2 className="landingTagline">Your favorite emotional support developer dog.</h2>
      <h2 className="landingSecTagline">Here to make your project planning a real treat!</h2>



      <div className="featuredContainer">
        <h3 className="featuredHeader">Featured Project</h3>
        <img className="featuredImg" src="https://res.cloudinary.com/darrin-im/image/upload/v1570337024/Screen_Shot_2019-10-06_at_12.41.05_AM_gdwkre.png"/>
        <h4 className="featProjectName">Project Ruksak</h4>
        <p>An application where users can add gear to their itinerary, and send out plans to friends.</p>
        <h5 className="featProjectCreator">By Robert DiScipio, Aaron Kim, Darrin Im</h5>
      </div>

    </div>
  )
}


export default Featured
