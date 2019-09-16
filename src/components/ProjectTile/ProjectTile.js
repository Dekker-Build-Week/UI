import React from 'react';

import PropTypes from 'prop-types';

import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import projectTileStyle from "assets/jss/material-dashboard-react/components/projectTileStyle.js";

const useStyles = makeStyles(projectTileStyle);

const ProjectTile = (props) => {
    const classes = useStyles();

    const { projectTitle, clientName, team, clientLogo, images } = props;

    return (
        <GridItem xs={3} sm={3} md={4}>
            <Card>
              <CardHeader stats icon>
                <img src = {clientLogo} alt = "Client Logo" className = {classes.clientLogo}/>
                <p className={classes.cardCategory}>{projectTitle}</p>
                <h3 className={classes.cardTitle}>
                  {clientName}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    
                  </a>
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