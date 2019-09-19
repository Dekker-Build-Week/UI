import {
    blackColor,
    hexToRgb
  } from "assets/jss/material-dashboard-react.js";

const andiPhotoStyle = {
    ANDiPhoto : {
        bottom: "0",
        borderRadius : "55px",
        height: "55px",
        boxShadow: "0px 3px 4px 0px rgba(" + hexToRgb(blackColor) + ", 0.14)",
        marginRight: "10px",
        textAlign: "center"
    },
    ANDiList : {
        listStyle : "none",
        display: "inline",
    }
};

export default andiPhotoStyle;
