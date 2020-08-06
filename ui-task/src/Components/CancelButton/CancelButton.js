import React from "react";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// This const overides the current theme and adds colours to the outline and the text aswell
// as making the button round
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      outlined: {
        borderRadius: 25,
      },
      outlinedPrimary: {
        borderColor: "#1176b6",
        color: "#1176b6",
      },
    },
  },
});

// Default function that returns a button with onclick and snackbar functionality. In this case
// the snackbar is only returning a default string with the blue (info) colour
export default function SimpleSnackbar(prop) {
  return (
    <MuiThemeProvider theme={theme}>
      <div data-testid="cancelButtonDiv">
        <Button
          id="CancelButton"
          variant="outlined"
          color="primary"
          size={"large"}
          onClick={prop.handleClick}
        >
          Cancel
        </Button>
        <Snackbar
          open={prop.open}
          autoHideDuration={3000}
          onClose={prop.handleClose}
        >
          <Alert onClose={prop.handleClose} severity="info">
            Going back to previous page
          </Alert>
        </Snackbar>
      </div>
    </MuiThemeProvider>
  );
}
