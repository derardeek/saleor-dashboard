import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = createStyles({
  "@global": {
    "@import": "url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap')"
  }
});

const Baseline = withStyles(styles, {
  name: "Baseline"
})(() => <CssBaseline />);
Baseline.displayName = "Baseline";

export default Baseline;
