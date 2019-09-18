import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from 'react-spring'

import imageSliderStyle from 'assets/jss/material-dashboard-react/components/imageSliderStyle.js'

const useStyles = makeStyles(imageSliderStyle);

export default (props) => {
    const classes = useStyles();

    const { images } = props;

    console.log(images);
    
    const springProps = useSpring({
        from: { left: '0%', top: '0%', width: '0%', height: '0%', background: 'lightgreen' },
        to: async next => {
        while (1) {
            await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: 'lightblue' })
            await next({ height: '50%', background: 'lightgreen' })
            await next({ width: '50%', left: '50%', background: 'lightgoldenrodyellow' })
            await next({ top: '0%', height: '100%', background: 'lightpink' })
            await next({ top: '50%', height: '50%', background: 'lightsalmon' })
            await next({ width: '100%', left: '0%', background: 'lightcoral' })
            await next({ width: '50%', background: 'lightseagreen' })
            await next({ top: '0%', height: '100%', background: 'lightskyblue' })
            await next({ width: '100%', background: 'lightslategrey' })
        }
        },
    })
    return (
        <div className = {classes.root}>
            <p>This</p>
            <animated.div className={classes.scriptBox} style={springProps} />
        </div>
    );
}