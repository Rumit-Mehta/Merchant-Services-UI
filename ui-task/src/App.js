import React from "react";
import "./App.css";
import AssignServicesButton from "./Components/AssignServicesButton";
import CancelButton from "./Components/CancelButton";
import Heading from "./Components/Heading";
import ButtonTable from "./Components/ButtonTable";

function App() {
  return (
    <div>
      <Heading />
      <ButtonTable elevation={0} />
    </div>
  );
}

export default App;
