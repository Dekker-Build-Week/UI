import React from "react";

import axios from 'axios';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import ProjectTile from "components/ProjectTile/ProjectTile.js";

const API_URL = "https://dekker-build-api.herokuapp.com/andch_back_app/projects/";

class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      projectTiles : [],
      ProjectInformation : [],
      Loading : true
    }

    this.sleep = this.sleep.bind(this);
  }

  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  componentWillMount() {
    axios.get(API_URL).then((result) => {
      var generatedProjectTiles = result.data.projects.map((data, index) => {
        return ({
          projectIndex : index,
          modalOpen : false
        })
      });

      this.setState({
        projectTiles : generatedProjectTiles,
        ProjectInformation : result.data.projects,
        Loading : false
      })
    }).catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    var i = 0;
    setInterval(() => {
      if (i > this.state.ProjectInformation.length - 1)
        i = 0;
      
      var newProjectTiles = this.state.projectTiles;

      newProjectTiles[i] = {
        projectIndex : i,
        modalOpen : true
      }
      
      newProjectTiles.forEach((projectTile, index) => {
        if (index !== i) 
          projectTile.modalOpen = false;
      })

      this.setState({
        projectTiles : newProjectTiles
      })

      i++;
    }, 3000)
  }  

  render() {
    return (
      <div>
        <GridContainer>
          {
            this.state.Loading ? 
            null 
            :
            this.state.ProjectInformation.map((projInfo, index) => {
              var projectTileState = {
                projectIndex : index,
                modalOpen : false
              }

              if (this.state.projectTiles.length < this.state.ProjectInformation.length)
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
                  techStacks = {projInfo.techStack}
                  video = {projInfo.video}
                  modalOpen = {this.state.projectTiles.filter(x => x.projectIndex === index)[0].modalOpen}/>
              )
              })
          }  
        </GridContainer> 
      </div>
    );
  }
}

export default Dashboard;
