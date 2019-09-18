import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import andiPhotoStyles from "assets/jss/material-dashboard-react/components/andiPhotoProjectStyle.js";

const useStyles = makeStyles(andiPhotoStyles);

const ANDiPhotoIconProject = (props) => {
    const classes = useStyles();

    const { ANDiPhoto } = props;

    return (
        <li className = {classes.ANDiList}>
            <img src = {ANDiPhoto} alt = "ANDi" className = {classes.ANDiPhoto} />
        </li>
    );
}

ANDiPhotoIconProject.propTypes = {
    ANDiPhoto : PropTypes.object.isRequired
}

export default ANDiPhotoIconProject;