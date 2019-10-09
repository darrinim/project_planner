import React from 'react';
import './Footer.css'

const Footer = () => {


  return(
    <div className="FooterContainer">
      <h2 className="FooterTitle">goodBoy</h2>
      <div>
        <ul className="FooterNav">
          <li><i className="fab fa-facebook fa-2x"></i></li>
          <li><i className="fab fa-instagram fa-2x"></i></li>
          <li><i className="fab fa-twitter-square fa-2x"></i></li>
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
