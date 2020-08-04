import React from "react";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

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

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div data-testid="cancelButtonDiv">
        <Button
          variant="outlined"
          color="primary"
          size={"large"}
          onClick={handleClick}
        >
          Cancel
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info">
            Going back to previous page
          </Alert>
        </Snackbar>
      </div>
    </MuiThemeProvider>
  );
}
