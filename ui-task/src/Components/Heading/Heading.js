import React from "react";

const Heading = () => {
  return (
    <div className="headingDiv">
      <div className="headingAccent"></div>
      <div className="headingText">
        <h1 data-testid="headingId" id="heading">
          Assign services
        </h1>
        <h2 data-testid="subheadingId" id="subheading">
          Set up client
        </h2>
      </div>
    </div>
  );
};

export default Heading;
