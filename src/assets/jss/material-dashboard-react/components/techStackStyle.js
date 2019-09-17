import {
    blackColor,
    hexToRgb
  } from "assets/jss/material-dashboard-react.js";

const techStackStyle = {
    techStack : {
        borderRadius : "50px",
        height: "30px",
        boxShadow: "0px 3px 4px 0px rgba(" + hexToRgb(blackColor) + ", 0.14)",
    },
    techList : {
        listStyle : "none",
        display: "inline",
        marginRight: "5px"
    }
};

export default techStackStyle;
