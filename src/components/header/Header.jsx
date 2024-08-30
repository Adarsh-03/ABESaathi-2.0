// import React from "react";
import "./Header.css";

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="container">
        <div className="navbar-brand">
          {/* Replace '#' with the actual link to your logo */}
          <img src="/images/Abesaathi.svg" alt="Logo" className="logo-image" />
        </div>
        <nav className="navbar-nav">
          <ul className="nav-items">
            <li>
              <a href="#" className="nav-link">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                CodeHelp
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="login-signup">
          <a href="#" className="btn btn-login-signup">
            Login/SignUp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
