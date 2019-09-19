import {
  hexToRgb,
  blackColor
} from "assets/jss/material-dashboard-react.js";

const videoPlayerStyle = {
    videoPlayer : {
      width : "100%",
      height: "100px"
    },
    videoContainer : {
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

export default videoPlayerStyle;