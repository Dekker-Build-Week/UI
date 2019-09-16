import React from 'react';

import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import projectTileStyle from "assets/jss/material-dashboard-react/components/projectTileStyle.js";

import Warning from "@material-ui/icons/Warning";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(projectTileStyle);

export default () => {
    const classes = useStyles();
        return (
        <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Used Space</p>
                <h3 className={classes.cardTitle}>
                  49/50
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
        </GridItem>
        );
    }
