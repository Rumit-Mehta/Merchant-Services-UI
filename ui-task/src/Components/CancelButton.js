import React from "react";
import Button from "@material-ui/core/Button";
import { useTwitterBtnStyles } from "@mui-treasury/styles/button/twitter";
import { usePushingGutterStyles } from "@mui-treasury/styles/gutter/pushing";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

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
          variant={"outlined"}
          color={"primary"}
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
    </div>
  );
}
