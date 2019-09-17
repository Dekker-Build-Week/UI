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
        {
          ProjectInformation.map((projInfo) => {
          return (
            <ProjectTile
              projectTitle = {projInfo.projectTitle}
              team = {projInfo.team}
              clientLogo = {projInfo.clientLogo}
              clientName = {projInfo.clientName}
              images = {projInfo.images}
              techStacks = {projInfo.techStacks}
              isTeam = {false} />
          )
          })
        }
        {
          ProjectInformation.map((projInfo) => {
          return (
            <ProjectTile
              projectTitle = {projInfo.projectTitle}
              team = {projInfo.team}
              clientLogo = {projInfo.clientLogo}
              clientName = {projInfo.clientName}
              images = {projInfo.images}
              techStacks = {projInfo.techStacks}
              isTeam = {true} />
          )
          })
        }

      </GridContainer>
    </div>
  );
}
