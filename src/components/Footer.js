import React from 'react';
import './landing.css';

const Footer = () => {
  return (
    <footer className="is-primary is-small has-text-centered">
      <div className="container is-narrow pad-top">
        <a href="www.google.com" className="logo">
          <img src={require("../assets/header.png")} alt="Bulma: a modern CSS framework based on Flexbox" width="48" height="48" />
        </a>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h1 className="subtitle custom-color is-size-4-touch">Living, learning, &amp; leveling up one day at a time.</h1>
          </div>
        </div>
        <div className="social-icons">
          <p className="field">
            <a className="button is-medium footer-btn" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Joab.Chua">
              <span className="is-small icon">
                <img src={require("../assets/social/facebook.png")} alt="Bulma: a modern CSS framework based on Flexbox" />
              </span>
            </a>
            <a className="button is-medium footer-btn" target="_blank" rel="noopener noreferrer" href="https://twitter.com/joabchua">
              <span className="is-small icon">
                <img src={require("../assets/social/twitter.png")} alt="Bulma: a modern CSS framework based on Flexbox" />
              </span>
            </a>
            <a className="button is-medium footer-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/JoabChua">
              <span className="is-small icon">
                <img src={require("../assets/social/github-logo.png")} alt="Bulma: a modern CSS framework based on Flexbox" />
              </span>
            </a>
            <a className="button is-medium footer-btn" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/joabchua/">
              <span className="is-small icon">
                <img src={require("../assets/social/instagram.png")} alt="Bulma: a modern CSS framework based on Flexbox" />
              </span>
            </a>
            <a className="button is-medium footer-btn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joabchua/">
              <span className="is-small icon">
                <img src={require("../assets/social/linkedin.png")} alt="Bulma: a modern CSS framework based on Flexbox" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;