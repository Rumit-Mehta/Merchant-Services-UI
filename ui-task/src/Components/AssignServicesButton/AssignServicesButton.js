import React from "react";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import { newSelected } from "../ServicesTable/ServicesTable";
import serviceData from "../../Data/ServicesData.json";

// Code to find the maximum amount of services got from ServiceData.json file
let maxServices = 0;
serviceData.map((element) => {
  maxServices++;
});

// button style
const styles = {
  background: "#1176b6",
  borderRadius: 100,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
};

// Function that displays different messages on the snackbar depending on the amount of options selected
function displayServices() {
  let servicesSelected = [];
  if (newSelected.length === 0) {
    return "No service selected";
  } else if (newSelected.length === maxServices) {
    return "All services selected";
  } else {
    servicesSelected = newSelected;
  }
  return "Selected : " + servicesSelected;
}

// Function that changes the snackbar colour to red (error) if no options are selected
function snackbarColor() {
  if (newSelected.length === 0) {
    return "error";
  } else {
    return "success";
  }
}

// Default function, returns button with onclick and snackbar functionality
export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div data-testid="assignServiceDiv" className="serviceDiv">
      <Button
        className="assignServiceButton"
        style={styles}
        onClick={handleClick}
      >
        Assign Services
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbarColor()}>
          {displayServices()}
        </Alert>
      </Snackbar>
    </div>
  );
}
