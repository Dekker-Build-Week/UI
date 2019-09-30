import {
  hexToRgb,
  blackColor
} from "assets/jss/material-dashboard-react.js";

const videoPlayerStyle = {
    videoPlayer : {
      height: "100%",
      width: "100%"
    },
    videoContainer : {
      overflow: "hidden",
      position: "relative",
      width: "100%",
      height: "100%",
      marginRight : "auto",
      marginLeft: "15px",
      marginBottom: "auto",
      marginTop: "10px",
      boxShadow: "0 6px 6px 0 rgba(" + hexToRgb(blackColor) + ", 0.3)"
    }
}

export default videoPlayerStyle;