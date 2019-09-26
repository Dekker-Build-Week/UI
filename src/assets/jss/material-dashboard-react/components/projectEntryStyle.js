import {
  grayColor,
  hexToRgb,
  blackColor
} from "assets/jss/material-dashboard-react.js";

const ProjectEntryStyle = {
  projectView: {
    height: window.innerHeight * 0.95,
    width: window.innerWidth * 0.95,
    borderRadius: "5px",
    boxShadow: "grey",
    padding: "2 4 3",
    marginTop: "170px"
  },
  clientLogoUpload: {
    boxShadow: "0 4px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    borderRadius: "3px",
    marginTop: "-20px",
    float: "left",
    backgroundColor: "#FF323C"
  },
  projectMediaUpload: {
    height: "160px",
    boxShadow: "0 4px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    borderRadius: "3px",
    marginLeft: "80px",
    marginTop: "50px",
    marginRight: "15px",
    float: "left",
    padding: "150px"
  },
  clientName: {
    color: grayColor[0],
    margin: "0",
    fontSize: "34px",
    marginTop: "15px",
    paddingTop: "10px",
    marginBottom: "0",
    paddingRight: "40px"
  },
  projectTitle: {
    fontSize: "54px",
    color: "#FF313B",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    paddingRight: "40px"
  },
  projectBody: {
    height: window.innerHeight * 0.56
  },
  projectInfo: {
    height: window.innerHeight * 0.55
  },
  contentContainer: {
    height: window.innerHeight * 0.55
  },
  projectDescriptionContainer: {
    height: "100%",
    overflow: "hidden"
  },
  projectDescriptionEntry: {
    color: grayColor[8],
    fontSize: "22px",
    paddingRight: "40px",
    marginBottom: "0",
    width: "454px",
    height: "253px"
  },
  projectBorderTop: {
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

  teamMember: {
    paddingRight: "90px",
    marginTop: "10px",
    textAlign: "center"
  },
  teamMemberUpload: {
    boxShadow: "0 4px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    borderRadius: "3px",
    float: "left",
    backgroundColor: "#FF323C"
  },
  techStackUpload: {
    backgroundColor: "#2897ff"
  },
  teamMemberUpload: {
    backgroundColor: "#2897ff"
  },
  rightIcon: {
    marginLeft: "15px"
  },
  input: {
    display: "none"
  },
  files: {
    marginLeft: "32px",
    alignItems: "flexStart",
    justifyItems: "flexStart",
    flex: "1",
    overflowY: "auto"
  }
};

export default ProjectEntryStyle;
