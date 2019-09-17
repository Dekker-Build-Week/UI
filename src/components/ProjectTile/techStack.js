import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import techStackstyles from "assets/jss/material-dashboard-react/components/techStackStyle.js";

const useStyles = makeStyles(techStackstyles);

const TechStack = (props) => {
    const classes = useStyles();

    const {techStack} = props;

    return (
        <li className = {classes.techList}>
            <img src = {techStack} alt = "tech" className = {classes.techStack} />
        </li>
    );
}

TechStack.propTypes = {
    TechStack : PropTypes.object.isRequired
}

export default TechStack;
