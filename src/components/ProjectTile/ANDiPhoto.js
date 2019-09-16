import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import andiPhotoStyles from "assets/jss/material-dashboard-react/components/andiPhotoStyle.js";

const useStyles = makeStyles(andiPhotoStyles);

const ANDiPhoto = (props) => {
    const classes = useStyles();

    const { ANDiPhoto } = props;

    return (
        <li className = {classes.ANDiList}>
            <img src = {ANDiPhoto} alt = "ANDi" className = {classes.ANDiPhoto} />
        </li>
    );
}

ANDiPhoto.propTypes = {
    ANDiPhoto : PropTypes.object.isRequired
}

export default ANDiPhoto;