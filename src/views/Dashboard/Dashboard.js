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
        {ProjectInformation.concat(ProjectInformation).map((projInfo) => {
          return (
            <ProjectTile
              projectTitle = {projInfo.projectTitle} 
              team = {projInfo.team}
              clientLogo = {projInfo.clientLogo}
              images = {projInfo.images} />
          )
        })}
      </GridContainer>
    </div>
  );
}
