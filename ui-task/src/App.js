import React from "react";
import "./App.css";
import AssignServicesButton from "./Components/AssignServicesButton";
import CancelButton from "./Components/CancelButton";
import Heading from "./Components/Heading";
import ButtonTable from "./Components/ButtonTable";
import ServicesTable from "./Components/ServicesTable";

function App() {
  return (
    <div>
      <Heading />

      <div className="ServiceTableDiv">
        <ServicesTable />
      </div>
      <ButtonTable />
    </div>
  );
}

export default App;
