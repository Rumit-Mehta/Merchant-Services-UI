import React from "react";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import Functions from "./Functions";

// button style
const styles = {
  background: "#1176b6",
  borderRadius: 100,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
};

// Default function, returns button with onclick and snackbar functionality
export default function SimpleSnackbar(prop) {
  const {
    displayServices,
    handleClick,
    handleClose,
    open,
    snackbarColor,
  } = Functions();
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
