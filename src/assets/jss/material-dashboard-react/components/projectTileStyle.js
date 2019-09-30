import {
    grayColor,
    hexToRgb,
    blackColor
  } from "assets/jss/material-dashboard-react.js";

const projectTileStyle = {
      cardTitle: {
        color: "#FF313B",
        marginTop: "0px",
        minHeight: "auto",
        fontSize : "20px",
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
        maxWidth: "40%",
        objectFit : "stretch",
        marginRight: "15px",
        float: "left"
      },
      cardBody : {
        borderTop: "1px solid " + grayColor[10],
        marginLeft : "3px",
        height: "500px",
        maxHeight: "500px",
        overflow: "hidden",
        textAlign: "center",
        marginRight : "3px"
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      circularProgress : {
        marginTop: "70px"
      },
      coverImage : {
        width: "100%",
        objectFit: "contain"
      },
      projectTile : {
        margin : "8px"
      },
      openingTile : {
        boxShadow: "0 0 2px 2px rgb(255, 50, 59)",
      }
};

export default projectTileStyle;