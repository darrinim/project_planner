import React, { Component } from 'react';
import './Featured.css'

const Featured = () => {


  return (
    <div className="container">
      <h1 className="landingHeader">goodBoy</h1>
      <h3 className="featuredHeader">Featured Projects</h3>

      <div className="featuredContainer">
      <img className="featuredImg" src="https://res.cloudinary.com/darrin-im/image/upload/v1570337024/Screen_Shot_2019-10-06_at_12.41.05_AM_gdwkre.png"/>
      <h4>Project Ruksak</h4>
      <p>An application where users can add gear to their itinerary, and send out plans to friends.</p>
      <h5>By Robert DiScipio, Aaron Kim, Darrin Im</h5>
      </div>

      <div className="recommendedContainer">
        <img className="recommendedPhoto"src="https://res.cloudinary.com/darrin-im/image/upload/v1570338493/Screen_Shot_2019-10-06_at_1.07.16_AM_gc8c5r.png"/>
        <div className="recommendedDesc">
          <h3>Project Name</h3>
          <h5>By Robert DiScipio, Aaron Kim, Darrin Im</h5>
        </div>
      </div>
      <hr />

      <div className="recommendedContainer">
        <img className="recommendedPhoto"src="https://res.cloudinary.com/darrin-im/image/upload/v1570338493/Screen_Shot_2019-10-06_at_1.07.16_AM_gc8c5r.png"/>
        <div className="recommendedDesc">
          <h3>Project Name</h3>
          <h5>By Robert DiScipio, Aaron Kim, Darrin Im</h5>
        </div>
      </div>
      <hr />

      <div className="recommendedContainer">
        <img className="recommendedPhoto"src="https://res.cloudinary.com/darrin-im/image/upload/v1570338493/Screen_Shot_2019-10-06_at_1.07.16_AM_gc8c5r.png"/>
        <div className="recommendedDesc">
          <h3>Project Name</h3>
          <h5>By Robert DiScipio, Aaron Kim, Darrin Im</h5>
        </div>
      </div>
      <hr />

    </div>
  )
}


export default Featured
