import React from 'react';
import './Testimonials.css'

const Testimonials = () => {

  return (

    <div className="testimonialContainer">
      <img className="testimonialDog" src="https://res.cloudinary.com/darrin-im/image/upload/v1570502751/DogCartoon-laying3_brqyft.png" />

      <div className="testimonials">
        <h3 className="testimonialsHeader">Real Testimonials</h3>

        <div className="testCardContainer">

          <div className="testCard">
          <img
            className="dogWink wiggler"
            src="https://res.cloudinary.com/darrin-im/image/upload/v1570761245/DogWink-final_kzsm8k.png"/>
            <p className="cardText">" Since using goodBoy, productivity has gone up 100%! Seriously! It is so awesome "</p>
            <p className="cardTextName">- Bill Gates</p>
          </div>


          <div className="testCard">
          <img
            className="dogWink wiggler"
            src="https://res.cloudinary.com/darrin-im/image/upload/v1571012759/bitmoji_oyak9f.png"/>
            <p className="cardText">" goodBoy has proven to be bigger and better then anything I have ever done "</p>
            <p className="cardTextName">- Elon Musk</p>
          </div>

          <div className="testCard">
          <img
            className="dogWink wiggler"
            src="https://res.cloudinary.com/darrin-im/image/upload/v1570761245/DogWink-final_kzsm8k.png"/>
            <p className="cardText">" I only wish I could accomplish half of what goodBoy has been able to do "</p>
            <p className="cardTextName">- Larry Page</p>
          </div>


        </div>



      </div>
  </div>

  )
}

export default Testimonials;
