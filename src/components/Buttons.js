import React from "react";

const Buttons = ({ links }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
      <a href={links.android} target="_blank" rel="noopener noreferrer">
        <img
          src={require("../assets/img/playstore.png")}
          alt={"playstore"}
          width={"150px"}
        />
      </a>
      <a href={links.ios} target="_blank" rel="noopener noreferrer">
        <img
          src={require("../assets/img/a2.svg")}
          alt={"playstore"}
          width={"150px"}
          style={{ height: 37 }}
        />
      </a>
    </div>
  );
};

export default Buttons;
