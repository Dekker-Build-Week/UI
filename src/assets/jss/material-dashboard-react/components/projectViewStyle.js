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
    viewImage:{
        maxHeight : (window.innerHeight * 0.54),
        width: (window.innerHeight * 1.05),
        paddingLeft: "15px",
        paddingTop: "15px",
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
    },
    videoPlay:{
        paddingLeft: "15px",
        marginTop: "-30px"
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
        paddingRight: "40px",
        
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
        paddingRight: "40px"
    },
    projectBody : {
        height : (window.innerHeight * 0.56)
    },
    projectInfo: {
        height: (window.innerHeight * 0.55)
    },
    contentContainer : {
        height : (window.innerHeight * 0.55),
        overflow: false
    },
    projectDescriptionContainer : {
        height : "100%",
        overflow: "hidden"
    },
    projectDescription: {
        color: grayColor[8],
        margin: "0",
        fontSize: "18px",
        marginTop: "-30px",
        paddingTop: "40px",
        paddingRight: "40px",
        marginBottom: "0",
        overflow: false,
        maxHeight: (window.innerHeight * 0.25)
    },
    projectBorderTop : {
        borderTop: "1px solid" + grayColor[10], 
        top: "10%",
        bottom: "0",
        marginLeft: "68%"
    },
    projectFooter: {
        borderTop: "1px solid" + grayColor[10],
        marginLeft: "15px",
        marginRight: "15px"
    },
    projectANDis: {
        marginLeft: "-20px",
        maxHeight: (window.innerHeight * 0.2),
        overflow: false
    },
    projectTechstacks: {
        marginRight: "15px"
    },
    teamMember: {
        paddingRight: "90px",
        marginTop: "10px",
        textAlign: "center"
    }
}

export default ProjectViewStyle;