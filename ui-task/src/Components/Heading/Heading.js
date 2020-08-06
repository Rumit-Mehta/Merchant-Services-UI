import React from "react";

// Const that combines the heading, subheading and blue accent into 1 componenent which can
// then be exported
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
