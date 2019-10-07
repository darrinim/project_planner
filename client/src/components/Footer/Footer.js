import React from 'react';
import './Footer.css'

const Footer = () => {


  return(
    <div className="FooterContainer">
      <h2 className="FooterTitle">Kickstarter</h2>
      <div>
        <ul className="FooterNav">
          <li><i class="fab fa-facebook"></i></li>
          <li><i class="fab fa-instagram"></i></li>
          <li><i class="fab fa-twitter-square"></i></li>
        </ul>
      </div>
      <div>
      <ul className="FooterTerms">
        <li>Trust and Safety</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>
      </div>
    </div>
  )
}

export default Footer;
