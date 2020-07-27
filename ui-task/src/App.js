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
      <ButtonTable elevation={0} />
      <ServicesTable
        data={[]}
        header={[
          {
            name: "id",
            prop: "id",
          },
          {
            name: "Service",
            prop: "service",
          },
          {
            name: "Description",
            prop: "description",
          },
        ]}
      />
    </div>
  );
}

export default App;
