import React from 'react';

const SkillCard = ({ icon, title, subtitle, secthead1, sectpara1 }) => {
  return (
    <div className="column">
      <figure className="image">
        <img src={icon} alt="website" className="is-skill-icon" style={{ width: '64px' }} />
      </figure>
      <h1 className="title is-size-4 is-spaced">{title}</h1>
      <p>{subtitle}</p>
      <p className="list-title has-text-primary has-text-weight-normal">
        {secthead1}
      </p>
      <p>{sectpara1}</p>
    </div>
  )
};

export default SkillCard;