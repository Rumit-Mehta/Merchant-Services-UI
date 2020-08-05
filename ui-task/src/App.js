import React from "react";
import "./css/App.css";
import Heading from "./Components/Heading";
import ButtonTable from "./Components/ButtonTable/ButtonTable";
import ServicesTable from "./Components/ServicesTable/ServicesTable";
import ClientTable from "./Components/ClientTable/ClientTable";

function App() {
  return (
    <div>
      <Heading />
      <h2 className="subHeading">Client Details</h2>
      <div className="ServiceTableDiv">
        <ClientTable />
      </div>
      <h2 className="subHeading">Merchant Services</h2>
      <div className="ServiceTableDiv">
        <ServicesTable />
      </div>
      <ButtonTable />
    </div>
  );
}

export default App;
