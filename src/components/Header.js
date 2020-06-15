import React, { useState } from 'react';
import '../stylesheets/header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMobileNav = () => {
    setToggle(!toggle);
  };

  const navItemExtra = {
    border: 'purple 1px solid',
    borderRadius: '30px',
    boxShadow: '5px 5px #888888',
    margin: '10px'
  }

  return (
    <nav className="navbar is-transparent">
      <div className="container" style={{ padding: '1.2em 0' }}>
        <div className="navbar-brand">
          <a className="header-logo" href="/">
            <img src={require("../assets/header.png")} alt="devjo" width="32" height="32" />
          </a>
          <div className={`navbar-burger burger ${toggle ? "is-active" : ""}`} data-target="mobile" onClick={toggleMobileNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="mobile" className={`navbar-menu ${toggle ? "is-active" : ""}`} style={{ padding: '10px 0' }}>
          <div className="navbar-start">
            <NavLink to="/" className="navbar-item tab has-text-centered" style={navItemExtra}>
              <span>Home</span>
            </NavLink>
            <NavLink to="/resume" className="navbar-item tab has-text-centered" style={navItemExtra}>
              <span>Resume</span>
            </NavLink>
          </div>
          <div className="navbar-end">
            <a className="navbar-item tab has-text-centered" style={navItemExtra} href="mailto:chuaweeliang91@gmail.com">
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;