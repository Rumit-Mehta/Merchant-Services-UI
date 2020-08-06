import React from "react";
import serviceData from "../../Data/ServicesData.json";
import ServiceTableFunctions from "../ServicesTable/Functions";
import { newSelected } from "../ServicesTable/Functions";

export default () => {
  // Code to find the maximum amount of services got from ServiceData.json file
  let maxServices = serviceData.length;

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

  return {
    open,
    setOpen,
    handleClose,
    handleClick,
    displayServices,
    snackbarColor,
  };
};
