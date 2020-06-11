import React from 'react';
import Buttons from './Buttons';

const Card = ({ image, text, links }) => {
  return (
    <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
      <div className="box">
        <img src={image} alt="landing-img" className="logo" width="150" style={{ margin: 30, borderRadius: '50%' }} />
        <p>{text}</p>
        <Buttons links={links} />
      </div>
    </div>
  )
};

export default Card;