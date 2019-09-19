import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import videoPlayerStyle from 'assets/jss/material-dashboard-react/components/videoPlayerStyle.js';
import { Player } from 'video-react';

const useStyles = makeStyles(videoPlayerStyle);

export default (props) => {
    const classes = useStyles();

    const { videoSource } = props;

    return (
        <div className = {classes.videoContainer}>
            <Player autoPlay className = {classes.videoPlayer} >
                <source src = { videoSource ? videoSource : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" } />
            </Player>
        </div>
    );
}