import React from "react";
import Button from "@material-ui/core/Button";
import { useTwitterBtnStyles } from "@mui-treasury/styles/button/twitter";
import { usePushingGutterStyles } from "@mui-treasury/styles/gutter/pushing";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import { newSelected } from "./ServicesTable";

function displayServices() {
  let servicesSelected = [];
  if (newSelected.length === 0) {
    servicesSelected.push("No service selected");
  } else if (newSelected.length === 5) {
    servicesSelected.push("All services selected");
  } else {
    servicesSelected = newSelected;
  }
  return servicesSelected;
}

function snackbarColor() {
  if (newSelected.length === 0) {
    return "error";
  } else {
    return "success";
  }
}

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const styles = useTwitterBtnStyles();
  const mainStyles = usePushingGutterStyles({
    cssProp: "marginTop",
    space: 2,
    firstExcluded: true,
  });
  const wrapperStyles = usePushingGutterStyles();
  return (
    <div className={mainStyles.parent}>
      <div className={wrapperStyles.parent}>
        <Button
          classes={styles}
          variant={"contained"}
          color={"primary"}
          size={"large"}
          onClick={handleClick}
        >
          Assign Services
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={snackbarColor()}>
            Successfully selected the following services :
            <strong>{displayServices()}</strong>
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
