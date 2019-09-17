import React from 'react';

import PropTypes from 'prop-types';
import FittedImage from 'react-fitted-image';

import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import projectTileStyle from "assets/jss/material-dashboard-react/components/projectTileStyle.js";
import CardBody from 'components/Card/CardBody';
import ANDiPhotoTile from './ANDiPhoto';

const useStyles = makeStyles(projectTileStyle);

const ProjectTile = (props) => {
    const classes = useStyles();

    const { projectTitle, clientName, team, clientLogo, images } = props;

    let coverImage = images.find((image) => {
        return image.position === 0
    });

    return (
        <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader stats icon>
                <img src = {clientLogo} alt = "Client Logo" className = {classes.clientLogo}/>
                <p className={classes.cardCategory}>{clientName}</p>
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
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <ul className = {classes.ANDiList}>
                  {
                    team.map((andi) => {
                      return (
                        <ANDiPhotoTile 
                          ANDiPhoto = {andi.ANDiPhoto} />
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
  images : PropTypes.arrayOf(PropTypes.object)
}

export default ProjectTile;