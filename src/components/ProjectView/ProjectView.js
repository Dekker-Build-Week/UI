import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from 'components/Card/CardBody';
import projectViewStyle from 'assets/jss/material-dashboard-react/components/projectViewStyle.js';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
<<<<<<< HEAD
import ImageSlider from './ImageSlider/ImageSlider';
=======
import ANDiPhotoIcon from '../ProjectTile/ANDiPhotoIcon';
import TechStackIcon from '../ProjectTile/TechStackIcon';
>>>>>>> origin/footerChange

const useStyles = makeStyles(projectViewStyle);

const ProjectView = (props) => {
    const classes = useStyles();

<<<<<<< HEAD
    const { projectTitle, clientName, clientLogo, images } = props;
=======
    const { projectTitle, clientName, team, clientLogo, images, techStack } = props;
>>>>>>> origin/footerChange

    return (
        <div className = {classes.projectView}>
            <Card>
              <CardHeader stats icon>
                <img src = {clientLogo} alt = "Client Logo" className = {classes.clientLogo}/>
                <p className={classes.clientName}>{clientName}</p>
                <h3 className={classes.projectTitle}>
                  {projectTitle}
                </h3>
              </CardHeader>
              <CardBody className = {classes.cardBody}>
                  <div className={classes.projectInfo}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                          <ImageSlider images = {images} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>

                      </GridItem>
                    </GridContainer>
                </div>
              </CardBody>
              <CardFooter stats>
                {
                  techStack.map((tech) => {
                    return (
                      <TechStackIcon
                        techStack = {tech.image} />
                    )
                  })
                }
              </CardFooter>
            </Card>
        </div>
    );
}


export default ProjectView;