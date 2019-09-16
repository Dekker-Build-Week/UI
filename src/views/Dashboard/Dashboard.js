import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import ProjectTile from "components/ProjectTile/ProjectTile.js";

import  {
  ProjectInformation
 } from '../../variables/projects';

export default () => {
  return (
    <div>
      <GridContainer>
        {ProjectInformation.map((projInfo) => {
          return (
            <ProjectTile 
              projectTitle = {projInfo.projectTitle} 
              clientName = {projInfo.clientName}
              team = {projInfo.team}
              clientLogo = {projInfo.clientLogo}
              images = {projInfo.images} />
          )
        })}
      </GridContainer>
    </div>
  );
}
