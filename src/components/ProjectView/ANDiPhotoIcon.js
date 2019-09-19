import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import andiPhotoStyles from "assets/jss/material-dashboard-react/components/andiPhotoProjectStyle.js";

import GridItem from 'components/Grid/GridItem';

const useStyles = makeStyles(andiPhotoStyles);

const ANDiPhotoIcon = (props) => {
    const classes = useStyles();

    const { ANDiPhoto,ANDiName} = props;

    return (
        <GridItem xs ={3} sm = {3} md = {3}>
            <div className = {classes.ANDiContainer}>        
                <img src = {ANDiPhoto} alt = "ANDi" className = {classes.ANDiPhoto} />
                <p>{ANDiName}</p>
            </div>
        </GridItem>
       
    );
}

ANDiPhotoIcon.propTypes = {
    ANDiPhoto : PropTypes.string.isRequired
}

export default ANDiPhotoIcon;
