import React from 'react';
import PropTypes from 'prop-types';

import GridItem from "components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import techStackstyles from "assets/jss/material-dashboard-react/components/techStackStyle.js";

const useStyles = makeStyles(techStackstyles);

const TechStackIcon = (props) => {
    const classes = useStyles();

    const {techStack} = props;

    return (
       <GridItem xs = {1} sm = {1} md = {1}>
            <img src = {techStack} alt = "tech" className = {classes.techStack} />
        </GridItem>
    );
}

TechStackIcon.propTypes = {
    techStack : PropTypes.string.isRequired
}

export default TechStackIcon;
