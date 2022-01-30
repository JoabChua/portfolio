import React from "react";

const BlogCard = ({ thumbnail, title, link }) => {
  return (
    <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
      <div className="box" style={{ height: 300 }}>
        <img
          src={thumbnail}
          alt="landing-img"
          className="logo"
          width="250"
          style={{ margin: 30, borderRadius: "5px" }}
        />
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
