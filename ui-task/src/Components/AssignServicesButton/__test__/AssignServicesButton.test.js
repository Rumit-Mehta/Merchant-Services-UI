import React from "react";
import ReactDOM from "react-dom";
import AssignServicesButton from "../AssignServicesButton";

test("renders  without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AssignServicesButton></AssignServicesButton>, div);
});
