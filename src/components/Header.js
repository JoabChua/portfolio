import React, { useState } from 'react';

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
          <a className="navbar-item" href="/">
            <img src={require("../assets/header.png")} alt="Bulma: a modern CSS framework based on Flexbox" width="32" height="32" />
          </a>
          <div className={`navbar-burger burger ${toggle ? "is-active" : ""}`} data-target="mobile" onClick={toggleMobileNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="mobile" className={`navbar-menu ${toggle ? "is-active" : ""}`} style={{ padding: '10px 0' }}>
          <div className="navbar-start">
            <a className="navbar-item has-text-centered" style={navItemExtra} href="/">
              Home
          </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item has-text-centered" style={navItemExtra} href="mailto:chuaweeliang91@gmail.com">
              Contact Me
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;