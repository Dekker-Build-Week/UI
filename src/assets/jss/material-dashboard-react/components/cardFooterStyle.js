import { grayColor } from "assets/jss/material-dashboard-react.js";

const cardFooterStyle = {
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 5px 0px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0",
    maxHeight : "50px"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterStats: {
    borderTop: "1px solid " + grayColor[10],
    marginLeft: "3px",
    marginRight: "2px"
  },
  cardFooterChart: {
    borderTop: "1px solid " + grayColor[10]
  }
};

export default cardFooterStyle;
