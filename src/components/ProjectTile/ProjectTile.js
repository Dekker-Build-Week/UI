import React from "react";

import PropTypes from "prop-types";
import ProjectModal from "components/ProjectModal/ProjectModal.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody";
import CircularProgress from '@material-ui/core/CircularProgress';

import { withStyles } from "@material-ui/core/styles";
import projectTileStyle from "assets/jss/material-dashboard-react/components/projectTileStyle.js";

import ProjectView from "../ProjectView/ProjectView.js";
import TechStackIcon from "./TechStackIcon";
import GridContainer from "components/Grid/GridContainer.js";

class ProjectTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen : false
    }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ modalOpen : true })
  }

  handleClose() {
    this.setState({ modalOpen : false })
  }

  render() {
    const { projectTitle, clientName, team, clientLogo, images, techStacks, projectDescription, classes, video } = this.props;

    let coverImage = null;

    if (images && images.length > 0) {
      coverImage = images.find((image) => {
          return image.position === 0
      });
    }

    return (
      <div className = {classes.projectTile}>
          <Card>
            <CardHeader stats icon>
              <img src = {`https://${clientLogo}`} alt = "Client Logo" className = {classes.clientLogo}/>
              <p></p>
              <h3 className={classes.cardTitle}>
                {projectTitle}
              </h3>
            </CardHeader>
            <CardBody className = {classes.cardBody}>
              { 
              coverImage === null ?
                <CircularProgress className = {classes.circularProgress} />
              :
                <img src={`https://${coverImage.source}`} className = {classes.coverImage} alt = "Project Cover" />
              }
                  <ProjectModal 
                    modalOpen = {this.props.modalOpen}
                    handleClose = {this.handleClose}>
                      <ProjectView 
                        projectTitle = {projectTitle} 
                        clientName = {clientName} 
                        clientLogo = {clientLogo}
                        projectDescription = {projectDescription}
                        techStack = {techStacks}
                        images = {images}
                        clientVideo = {video}
                        team = {team}/>
                  </ProjectModal> 
            </CardBody>
            <CardFooter stats>              
                {
                  techStacks 
                  ?
                  <GridContainer>
                    {
                      techStacks.filter(t => t.important).map((tech, index) => {
                        return (
                          <TechStackIcon
                            key = {index}
                            techStack = {`https://${tech.image}`} />
                        )
                      })
                    }
                  </GridContainer>
                  :
                  null
                }
            </CardFooter>
          </Card>
      </div>
    )
  }
}

ProjectTile.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string,
  team: PropTypes.arrayOf(PropTypes.object).isRequired,
  clientLogo: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
  techStackss: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(projectTileStyle)(ProjectTile);
