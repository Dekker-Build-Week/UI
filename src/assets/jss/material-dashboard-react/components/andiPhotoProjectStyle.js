import {
    blackColor,
    hexToRgb
  } from "assets/jss/material-dashboard-react.js";

const andiPhotoStyle = {
    ANDiPhoto : {
        borderRadius : "60px",
        height: "60px",
        boxShadow: "0px 3px 4px 0px rgba(" + hexToRgb(blackColor) + ", 0.14)",
    },
    ANDiList : {
        listStyle : "none",
        display: "inline",
        marginRight: "5px"
    }
};

export default andiPhotoStyle;
