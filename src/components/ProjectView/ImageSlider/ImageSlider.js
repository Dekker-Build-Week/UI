import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import imageSliderStyle from 'assets/jss/material-dashboard-react/components/imageSliderStyle.js';
import { useTransition, animated, config } from 'react-spring'

const useStyles = makeStyles(imageSliderStyle);

export default (props) => {
    const classes = useStyles();

    const [index, set] = useState(0)

    const { images } = props;      

    const imagesLength = images ? images.length : -1;

    var transitions = null;

    if (imagesLength > 0) {
        transitions = useTransition(images[index], item => item.position, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: config.molasses,
        })
    }

    useEffect(
        () => {
            const interval = setInterval(() => {
                set(state => (state + 1) % (imagesLength));
            }, 4000);
            
            return () => {
                clearInterval(interval);
            }
        }, [])
  
    
    return (
        <div className = {classes.root}>
            {
                transitions === null ?
                null 
                :
                transitions.map(({ item, props, key }) => {
                    return (
                        <animated.div
                            key={key}
                            className= {classes.scriptBox}
                            style={{ ...props, backgroundImage: `url(https://${item.source})` }}
                        />
                    );
                })
            }
        </div>
    )
}
