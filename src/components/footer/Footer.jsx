// import React from 'react';
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo">
            <img
              src="/images/Abesaathi.svg"
              alt="Mizzle Logo"
              className="logo"
            />
            <h1 className="footer-title">ABESaathi</h1>
          </div>
          <p className="footer-description">
            A Bootstrap theme which is both stylish and functional, perfect for
            any type of technology or corporate website.
          </p>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">Quick links</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Academics</a>
            </li>
            <li>
              <a href="#">CodeHelp</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <div className="footer-names">
            <h3 className="footer-heading">Adarsh Chaudhary</h3>
            <div className="social-icons icon-box">
              <a href="#" className="social-icon">
                {" "}
                <FaUser color="#ffffff" />{" "}
              </a>
              <a href="#" className="social-icon">
                {" "}
                <FaInstagram color="#ffffff" />{" "}
              </a>
              <a href="#" className="social-icon">
                {" "}
                <FaLinkedinIn color="#ffffff" />{" "}
              </a>
              <a href="#" className="social-icon">
                {" "}
                <MdEmail color="#ffffff" />{" "}
              </a>
              <a href="#" className="social-icon"></a>
            </div>
          </div>
          <div className="footer-names">
            <h3 className="footer-heading">Abhay Pandey</h3>
            <div className="social-icons icon-box">
              <a href="#" className="social-icon">
                <FaUser color="#ffffff" />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram color="#ffffff" />{" "}
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn color="#ffffff" />{" "}
              </a>
              <a href="#" className="social-icon">
                {" "}
                <MdEmail color="#ffffff" />{" "}
              </a>
              <a href="#" className="social-icon"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright ©2021, <span>ABESaathi</span>, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
