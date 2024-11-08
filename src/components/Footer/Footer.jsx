import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem
            amet repellat tempore reiciendis odit, voluptatum officiis iste!
            Corporis tenetur necessitatibus magnam, ut quos iure amet est beatae
            nam dolorem. Eos, adipisci porro placeat, reiciendis nemo similique
            culpa dignissimos explicabo, totam iste alias. Perspiciatis at iusto
            soluta repellendus eligendi suscipit explicabo. Expedita repudiandae
            id praesentium ipsam deserunt illum aliquam ullam?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9556334221</li>
            <li>contact@bookshelf.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">Copyright 2024 © bookshelf.com - All Right Reserved </p>
    </div>
  );
};

export default Footer;






