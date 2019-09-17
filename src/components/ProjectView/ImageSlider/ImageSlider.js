import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture, useHover } from 'react-use-gesture'
import { makeStyles } from "@material-ui/core/styles";
import imageSliderStyle from 'assets/jss/material-dashboard-react/components/imageSliderStyle.js';

const useStyles = makeStyles(imageSliderStyle);

const ViewPager = (props) => {
    const index = useRef(0);
    const classes = useStyles();
    const windowBoundsWidth = (window.innerWidth);

    const { images } = props;

    const [springProps, set] = useSprings(
      images ? images.length : 0,
       i => ({ 
           x: i * windowBoundsWidth, 
           sc: 1, 
           display: 'block' 
        })
    )

    const bind = useGesture(
      ({ 
        down, 
        delta: [xDelta], 
        direction: [xDir], 
        distance, 
        cancel }) => {
            if (down && distance > windowBoundsWidth / 2)
                cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, images.length - 1)))
                set(i => {
                    if (i < index.current - 1 || i > index.current + 1) 
                        return { display: 'none' }

                    const x = (i - index.current) * windowBoundsWidth + (down ? xDelta : 0)

                    const sc = down ? 1 - distance / windowBoundsWidth / 4 : 1

                    return { x, sc, display: 'block' }
                })
    })

    return springProps.map(({ x, display, sc }, i) => (
        <div className = {classes.container}>
            <animated.div 
                {...bind()} 
                key={i} 
                className = {classes.imageSliderContainer}
                style={
                {
                    display, 
                    transform: x.interpolate(x => `translate3d(${x}px,0,0)`) 
                }
                }>
                <animated.div 
                    style={
                        { 
                        transform: sc.interpolate(s => `scale(${s})`)
                        }
                    }
                    className = {classes.image}>
                        <img src = {images[i].source} alt = "Client Logo" key = {i} />                
                </animated.div>
            </animated.div>
        </div>
    ))
}

export default ViewPager;
