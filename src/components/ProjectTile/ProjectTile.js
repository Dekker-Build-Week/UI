import React from 'react';

import PropTypes from 'prop-types';
import FittedImage from 'react-fitted-image';
import { useSpring, animated } from 'react-spring';

import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from 'components/Card/CardBody';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import { makeStyles } from "@material-ui/core/styles";
import projectTileStyle from "assets/jss/material-dashboard-react/components/projectTileStyle.js";

import ProjectView from '../ProjectView/ProjectView.js';
import ANDiPhotoIcon from './ANDiPhotoIcon';
import TechStackIcon from './TechStackIcon';

const useStyles = makeStyles(projectTileStyle);

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const ProjectTile = (props) => {
    const classes = useStyles();

    const { projectTitle, clientName, team, clientLogo, images, techStacks, isTeam } = props;
    console.log("THIS IS THE TECH STACK OBJECT");
    
    console.log(techStacks);
    

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    let coverImage = images.find((image) => {
        return image.position === 0
    });

    return (
        <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader stats icon>
                <img src = {clientLogo} alt = "Client Logo" className = {classes.clientLogo}/>
                <p></p>
                <h3 className={classes.cardTitle}>
                  {projectTitle}
                </h3>
              </CardHeader>
              <CardBody className = {classes.cardBody}>
                <FittedImage
                   fit="cover"
                   loader={<div>Loading</div>}
                   onLoad={(...args) => console.log(...args)}
                   onError={(...args) => console.log(...args)}
                   src={coverImage.source}
                 />
                  <button type="button" onClick={handleOpen}>
                     Open
                  </button>
                 <Modal
                      aria-labelledby="spring-modal-title"
                      aria-describedby="spring-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500
                      }}
                    >
                      <Fade in={open}>
                        <ProjectView 
                          projectTitle = {projectTitle} 
                          clientName = {clientName} 
                          clientLogo = {clientLogo} 
                          techStack = {techStacks}
                          team = {team}/>
                      </Fade>
                    </Modal>
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <ul className = {classes.ANDiList}>
                    {
                      isTeam ?
                      team.map((andi) => {
                        return (
                          <ANDiPhotoIcon
                            ANDiPhoto = {andi.ANDiPhoto} />
                        )
                      })
                      :
                      techStacks.filter(t => t.important).map((tech) => {
                        return (
                          <TechStackIcon
                            techStack = {tech.image} />
                        )
                      })
                    }
                  </ul>
                </div>
              </CardFooter>
            </Card>
        </GridItem>
        );
}

ProjectTile.propTypes = {
  projectTitle : PropTypes.string.isRequired,
  clientName : PropTypes.string.isRequired,
  team : PropTypes.arrayOf(PropTypes.object).isRequired,
  clientLogo : PropTypes.object.isRequired,
  images : PropTypes.arrayOf(PropTypes.object),
  techStackss : PropTypes.arrayOf(PropTypes.object)
}

export default ProjectTile;
