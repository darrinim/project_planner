import React from 'react';
import './Testimonials.css'

const Testimonials = () => {

  return (

      <div className="testimonialContainer">
        <img className="testimonialDog" src="https://res.cloudinary.com/darrin-im/image/upload/v1570502751/DogCartoon-laying3_brqyft.png" />

       <div className="testimonials">
          <h3 className="testimonialsHeader">Testimonials</h3>
          <p className="testimonialsText">"Since using goodBoy, productivity has gone up 100%!"</p>
          <p>- Every User Ever</p>
      </div>
    </div>

  )
}

export default Testimonials;
