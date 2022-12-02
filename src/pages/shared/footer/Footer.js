import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span>
    <Link to={'/'}><p>Marketing</p></Link> 
    <Link to={'/'}><p>Advertisement</p></Link>
  </div> 
  <div>
    <span className="footer-title">Company</span>
    <Link to={'/'}><p>About Us</p></Link> 
    <Link to={'/'}><p>Contact</p></Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span>
    <Link to={'/'}><p>Terms of use</p></Link> 
    <Link to={'/'}><p>Privacy policy</p></Link> 
    <Link to={'/'}><p>Cookie policy</p></Link> 
  </div>
</footer>
    );
};

export default Footer;