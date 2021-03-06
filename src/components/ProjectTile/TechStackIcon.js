import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import techStackstyles from "assets/jss/material-dashboard-react/components/techStackStyle.js";

const useStyles = makeStyles(techStackstyles);

const TechStackIcon = (props) => {
    const classes = useStyles();

    const {techStack} = props;

    return (
        <div className = {classes.techList}>
            <img src = {techStack} alt = "tech" className = {classes.techStack} />
        </div>
    );
}

TechStackIcon.propTypes = {
    techStack : PropTypes.string.isRequired
}

export default TechStackIcon;
