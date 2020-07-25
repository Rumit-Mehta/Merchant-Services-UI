import React from "react";
import Button from "@material-ui/core/Button";
import { useTwitterBtnStyles } from "@mui-treasury/styles/button/twitter";
import { usePushingGutterStyles } from "@mui-treasury/styles/gutter/pushing";

const TwitterButton = () => {
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
        >
          Assign Services
        </Button>
      </div>
    </div>
  );
};

export default TwitterButton;
