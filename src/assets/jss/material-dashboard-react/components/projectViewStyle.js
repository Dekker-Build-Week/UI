import {
    grayColor,
    hexToRgb,
    blackColor
  } from "assets/jss/material-dashboard-react.js";

const ProjectViewStyle = {
    projectView : {
        height: (window.innerHeight * 0.95),
        width: (window.innerWidth * 0.95),
        borderRadius : "5px",
        boxShadow: "grey",
        padding: "2 4 3",
        marginTop: "170px",
        
    },
    clientLogo: {
        height: "160px",
        boxShadow: "0 4px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        borderRadius: "3px",
        marginTop: "-20px",
        marginRight: "15px",
        float: "left"
    },
    clientName: {
        color: grayColor[0],
        margin: "0",
        fontSize: "34px",
        marginTop: "15px",
        paddingTop: "10px",
        marginBottom: "0",
        paddingRight: "50px",
        
    },
    projectTitle: {
        fontSize: "54px",
        color: "#FF313B",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        paddingRight: "50px",
       
    },
    projectBody : {
        height : (window.innerHeight * 0.60)
    },
    projectInfo: {
        height: (window.innerHeight * 0.60)
    },
    contentContainer : {
        height : (window.innerHeight * 0.60)
    },
    projectDescription: {
        color: grayColor[0],
        margin: "0",
        fontSize: "18px",
        marginTop: "15px",
        paddingTop: "40px",
        paddingRight: "40px",
        marginBottom: "0"
    }
}

export default ProjectViewStyle;