import React from "react";

import PropTypes from "prop-types";
import FittedImage from "react-fitted-image";
import ProjectModal from "components/ProjectModal/ProjectModal.js";

import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody";

import { withStyles } from "@material-ui/core/styles";
import projectTileStyle from "assets/jss/material-dashboard-react/components/projectTileStyle.js";

import ProjectView from "../ProjectView/ProjectView.js";
import ANDiPhotoIcon from "./ANDiPhotoIcon";
import TechStackIcon from "./TechStackIcon";

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
    console.log('Closing...')
    this.setState({ modalOpen : false })
  }

  render() {
    const { projectTitle, clientName, team, clientLogo, images, techStacks, isTeam, projectDescription, classes } = this.props;


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
                <button type="button" onClick={this.handleOpen}>
                  Open
                </button>
                  
                  <ProjectModal 
                    modalOpen = {this.state.modalOpen}
                    handleClose = {this.handleClose}>
                      <ProjectView 
                        projectTitle = {projectTitle} 
                        clientName = {clientName} 
                        clientLogo = {clientLogo}
                        projectDescription = {projectDescription}
                        techStack = {techStacks}
                        images = {images}
                        team = {team}/>
                  </ProjectModal> 
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                <ul className = {classes.ANDiList}>
                  {
                    isTeam ?
                    team.map((andi, index) => {
                      return (
                        <ANDiPhotoIcon
                          key = {index}
                          ANDiPhoto = {andi.ANDiPhoto} />
                      )
                    })
                    :
                    techStacks.filter(t => t.important).map((tech, index) => {
                      return (
                        <TechStackIcon
                          key = {index}
                          techStack = {tech.image} />
                      )
                    })
                  }
                </ul>
              </div>
            </CardFooter>
          </Card>
      </GridItem>
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
