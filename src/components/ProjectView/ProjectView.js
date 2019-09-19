import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from 'components/Card/CardBody';
import projectViewStyle from 'assets/jss/material-dashboard-react/components/projectViewStyle.js';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import TechStackIcon from "./TechStackIcon";
import ANDiPhotoIcon from "./ANDiPhotoIcon";
import ImageSlider from "./ImageSlider/ImageSlider";

const useStyles = makeStyles(projectViewStyle);

const ProjectView = props => {
  const classes = useStyles();

    const { projectTitle, clientName, projectDescription, clientLogo, images, team, techStack } = props;

    return (
        <div className = {classes.projectView}>
            <Card> 
              <CardHeader stats icon className = {classes.cardHeader}>
                <img src = {clientLogo} alt = "Client Logo" className = {classes.clientLogo}/>
                <p className={classes.clientName}>{clientName}</p>
                <h3 className={classes.projectTitle}>
                  {projectTitle}
                </h3>
                <div className = {classes.projectBorderTop}></div>
              </CardHeader>
              <CardBody className = {classes.projectBody}>
                  <div className={classes.projectInfo}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={8}>
                        <div className = {classes.contentContainer}>
                          <ImageSlider images = {images} />
                        </div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                          <p className={classes.projectDescription}>{projectDescription}</p>
                      </GridItem>
                    </GridContainer>
                </div>
              </CardBody>
              <CardFooter stats>
              <ul className = {classes.ANDiList}>
                {
                  team.map((andi, index) => {
                    return (
                      <ANDiPhotoIcon
                        key = {index}
                        ANDiPhoto = {andi.ANDiPhoto} />
                    )
                  })
                }  
                </ul>
                <ul>
                {

                  techStack.map((tech, index) => {
                    return (
                      <TechStackIcon
                        key = {index}
                        techStack = {tech.image} />
                    )
                  })
                }
              </ul>
              </CardFooter>
            </Card>
        </div>
    );
}

export default ProjectView;
