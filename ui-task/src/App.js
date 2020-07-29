import React from "react";
import "./App.css";
import Heading from "./Components/Heading";
import ButtonTable from "./Components/ButtonTable";
import ServicesTable from "./Components/ServicesTable";

function App() {
  return (
    <div>
      <Heading />
      <h2 id="servicesHeading">Services</h2>
      <div className="ServiceTableDiv">
        <ServicesTable />
      </div>
      <ButtonTable />
    </div>
  );
}

export default App;
