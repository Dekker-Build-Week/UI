import React from "react";
import Slider from "react-slick";
import axios from 'axios';

// core components
import ProjectTile from "components/ProjectTile/ProjectTile.js";
import * as CONFIG from "../../config.json";

const delayTime = 3000;
const numSlides = 6;

var autoScrollSpeed = ((numSlides) * delayTime);
    
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  rows: 2,
  focusOnSelect: true,  
  autoplay: true,
  autoplaySpeed: autoScrollSpeed,
  pauseOnHover: true
};
    
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
    axios.get(CONFIG.default.API_URL).then((result) => {
      var requestData = result.data.projects;

      requestData = requestData.concat(requestData);

      var generatedProjectTiles = requestData.map((data, index) => {
        return ({
          projectIndex : index,
          modalOpen : false
        })
      });

      this.setState({
        projectTiles : generatedProjectTiles,
        ProjectInformation : requestData,
        Loading : false
      })
    }).catch((error) => {
      console.error(error);
    });

    window.addEventListener('wheel', (e) => {
      try {
        this.slide(e.wheelDelta);
      } catch {
        console.log('Error binding slide')
      }
    })    
  }

  componentDidMount() {
    var i = 0;
    var shouldBeOpen = true;

    setInterval(() => {
      var newProjectTiles = this.state.projectTiles;

      if (shouldBeOpen) {
        if (i > this.state.ProjectInformation.length - 1) {      
          i = 0;
        }
        
        newProjectTiles[i] = {
          projectIndex : i,
          modalOpen : shouldBeOpen
        }

        newProjectTiles.forEach((projectTile, index) => {
          if (index !== i) 
            projectTile.modalOpen = false;
        })

        this.setState({
          projectTiles : newProjectTiles
        })

        i++;
      } else {
        console.log(i);
        if (i === this.state.ProjectInformation.length - 1) {
          setTimeout(() => this.slider.slickNext(), 2000);
        }

        newProjectTiles.forEach((projectTile, index) => {
            projectTile.modalOpen = false;
        })

        this.setState({
          projectTiles : newProjectTiles
        })
      }
      shouldBeOpen = !shouldBeOpen;
    }, delayTime) 
  }  

  render() {
    return (
      <Slider {...settings} ref={slider => this.slider =  slider && slider['innerSlider']}>
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
      </Slider>
    );
  }
}

export default Dashboard;
