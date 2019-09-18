import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import techStackstyles from "assets/jss/material-dashboard-react/components/techStackProjectStyle.js";

const useStyles = makeStyles(techStackstyles);

const TechStackProjectIcon = (props) => {
    const classes = useStyles();

    const {techStack} = props;

    return (
        <li className = {classes.techList}>
            <img src = {techStack} alt = "tech" className = {classes.techStack} />
        </li>
    );
}

TechStackProjectIcon.propTypes = {
    techStack : PropTypes.string.isRequired
}

export default TechStackProjectIcon;
