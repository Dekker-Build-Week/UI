import {
    grayColor,
    hexToRgb,
    blackColor
  } from "assets/jss/material-dashboard-react.js";

const projectTileStyle = {
    stats: {
        color: grayColor[0],
        display: "inline-flex",
        fontSize: "12px",
        lineHeight: "22px",
        overflow: "hidden",
        "& svg": {
          top: "4px",
          width: "16px",
          height: "16px",
          position: "relative",
          marginRight: "3px",
          marginLeft: "3px"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          top: "4px",
          fontSize: "16px",
          position: "relative",
          marginRight: "3px",
          marginLeft: "3px"
        }
      },
      cardTitle: {
        color: "#FF313B",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
      },
      divider : {
        border: "1px solid black"
      },
      clientLogo: {
        height: "80px",
        boxShadow: "0 4px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        borderRadius: "3px",
        marginTop: "-20px",
        marginBottom: "5px",
        marginRight: "15px",
        float: "left"
      },
      cardBody : {
        borderTop: "1px solid " + grayColor[10],
        marginLeft : "3px",
        height: "200px",
        textAlign: "center",
        marginRight : "3px"
      },
      ANDiList : {
        listStyle : "none",
        marginLeft: "-30px"
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
};

export default projectTileStyle;