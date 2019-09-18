import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import ProjectTile from "components/ProjectTile/ProjectTile.js";

import  {
  ProjectInformation
 } from '../../variables/projects';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      projectTiles : []
    }
  }

  componentDidMount() {
    var i = 0;
    const interval = setInterval(() => {
      if (i > 2)
        i = 0;
      
      var newProjectTiles = this.state.projectTiles;

      newProjectTiles[i] = {
        projectIndex : i,
        modalOpen : i % 2 === 0
      }

      this.setState({
        projectTiles : newProjectTiles
      })
      
      i++;
    },2000)
  }  

  render() {
    return (
      <div>
        <GridContainer>
          {
            ProjectInformation.map((projInfo, index) => {
              var projectTileState = {
                projectIndex : index,
                modalOpen : false
              }

              this.state.projectTiles.push(projectTileState);

            return (
              <ProjectTile
                key = {index}
                projectTitle = {projInfo.projectTitle}
                team = {projInfo.team}
                clientLogo = {projInfo.clientLogo}
                projectDescription = {projInfo.projectDescription}
                clientName = {projInfo.clientName}
                images = {projInfo.images}
                techStacks = {projInfo.techStacks}
                isTeam = {false} 
                modalOpen = {this.state.projectTiles.filter(x => x.projectIndex === index)[0].modalOpen}/>
            )
            })
          }
          {
            ProjectInformation.map((projInfo, index) => {
            return (
              <ProjectTile
                key = {index}
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
}

export default Dashboard;
