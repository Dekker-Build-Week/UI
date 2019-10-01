import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody";
import projectViewStyle from "assets/jss/material-dashboard-react/components/projectViewStyle.js";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import TechStackIcon from "./TechStackIcon";
import ANDiPhotoIcon from "./ANDiPhotoIcon";
import ImageSlider from "./ImageSlider/ImageSlider";
import ReactPlayer from "react-player";

const useStyles = makeStyles(projectViewStyle);

const ProjectView = props => {
  const classes = useStyles();

  const {
    projectTitle,
    clientName,
    projectDescription,
    clientLogo,
    coverImage,
    imagePaths,
    team,
    techStack,
    clientVideo
  } = props;
  return (
    <div className={classes.projectView}>
      <Card>
        <CardHeader stats icon className={classes.cardHeader}>
          <img
            src={imagePaths + "/" + clientLogo}
            alt="Client Logo"
            className={classes.clientLogo}
          />
          <p className={classes.clientName}>{clientName}</p>
          <h3 className={classes.projectTitle}>{projectTitle}</h3>
          <div className={classes.projectBorderTop}></div>
        </CardHeader>
        <CardBody className={classes.projectBody}>
          <div className={classes.projectInfo}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.contentContainer}>
                  <ReactPlayer url={imagePaths + "/" + clientVideo} playing />
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.projectDescriptionContainer}>
                      <p className={classes.projectDescription}>
                        {projectDescription}
                      </p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.teamIcons}>
                      <br />
                      <h6>Team Members</h6>
                      <GridContainer>
                        {team.map((andi, index) => {
                          return (
                            <ANDiPhotoIcon
                              key={index}
                              ANDiPhoto={imagePaths + "/" + andi.photoPath}
                              ANDiName={andi.name}
                            />
                          );
                        })}
                      </GridContainer>
                    </div>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </CardBody>
        <CardFooter className={classes.projectFooter}>
          <ul className={classes.projectANDis}>
            {team
              ? techStack.map((tech, index) => {
                  return (
                    <TechStackIcon
                      key={index}
                      techStack={imagePaths + "/" + tech.imagePath}
                    />
                  );
                })
              : null}
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectView;
