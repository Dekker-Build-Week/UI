import {
  hexToRgb,
  blackColor
} from "assets/jss/material-dashboard-react.js";

const imageSliderStyle = {
    scriptBox : {
      willChange: "width, height, left, top",
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundRepeat : "no-repeat",
      backgroundSize : "100%"
    },
    root : {
      overflow: "hidden",
      position: "relative",
      width: "100%",
      height: "100%",
      marginLeft: "15px",
      marginBottom: "10px",
      marginTop: "10px",
      boxShadow: "0 6px 6px 0 rgba(" + hexToRgb(blackColor) + ", 0.3)"
    }
}

export default imageSliderStyle;