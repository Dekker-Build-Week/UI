import React from "react";
import Slider from "react-slick";
import axios from 'axios';


// core components
import ProjectTile from "components/ProjectTile/ProjectTile.js";
import * as CONFIG from "../../config.json";

const delayTime = 7000;
const slideDelayTime = 1000;
const numSlides = 6;

var isAtBeginning = true;

var autoScrollSpeed = ((numSlides) * delayTime);
    
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      Loading : true,
      mouseMoving : false,
      clicked: false,
    }

    this.sleep = this.sleep.bind(this);
    this.setMouseMove = this.setMouseMove.bind(this);
    this.closeAllModals = this.closeAllModals.bind(this);
    this.performModalSequencing = this.performModalSequencing.bind(this);
    this.clickAble = this.clickAble.bind(this);
    this.clickedSequence = this.clickedSequence.bind(this);
  }

  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  closeAllModals() {
    var newProjectTiles = this.state.projectTiles;

    newProjectTiles.forEach((projectTile, index) => {
        projectTile.modalOpen = false;
    })

    this.setState({
      projectTiles : newProjectTiles
    })    
  }


  performModalSequencing(i, shouldBeOpen) {
    var newProjectTiles = this.state.projectTiles;
    
    newProjectTiles[i] = {
      projectIndex : i,
      modalOpen : shouldBeOpen,
      nextToOpen : false
    }

    newProjectTiles.forEach((projectTile, index) => {
      if (index !== i) 
        projectTile.modalOpen = false;
        
        if (index === (i + 1) && index < newProjectTiles.length)
        projectTile.nextToOpen = true;

      if (index === newProjectTiles.length)
        newProjectTiles.forEach((tile) => {
          if (tile.projectIndex === 0)
            tile.nextToOpen = true;
        })
    })

    this.setState({
      projectTiles : newProjectTiles
    })
  }

  clickedSequence(i,opened){
      var newProjectTiles = this.state.projectTiles;
      
      newProjectTiles.forEach((projectTile, index) => {
        if (index == i) 
          projectTile.modalOpen = true;
      })

      
  
    }
  

  setMouseMove(e) {
    if(!this.state.clicked){
    e.preventDefault();
    this.setState({mouseMoving: true});
    
    this.closeAllModals();    

    let timeout
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => this.setState({mouseMoving:false}), 5000);
    })();
  }
}

  clickAble(e,i) {
    if(!this.state.clicked){
    e.preventDefault();
    this.setState({clicked: true});
    
    this.clickedSequence(i,true);    
    }
    else{
      this.setState({clicked: false});
      this.closeAllModals();
    }
    let timeout
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => this.setState({mouseMoving:false}), 5000);
    })();
  }
  componentWillMount() {
    axios.get(CONFIG.default.API_URL).then((result) => {
      var requestData = result.data.projects;

      requestData = requestData.concat(requestData);

      var generatedProjectTiles = requestData.map((data, index) => {
        return ({
          projectIndex : index,
          modalOpen : false,
          nextToOpen : index === 0
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
    if(!this.state.clicked){
      if (!this.state.mouseMoving) {
        if (shouldBeOpen) {
          if (i > this.state.ProjectInformation.length - 1) {      
            i = 0;
          }
          
          this.performModalSequencing(i, shouldBeOpen);

          i++;
        } else {
          if (i % 2 === 0 && !isAtBeginning) {
            setTimeout(() => this.slider.slickNext(), slideDelayTime);
          }

          if (isAtBeginning)
            isAtBeginning = false;

          this.closeAllModals();
        }
        shouldBeOpen = !shouldBeOpen;
      }
    
    }}, delayTime) 
      
  } 

  render() {
    return (
      <div onMouseMove = {(e) => this.setMouseMove(e)}
        onClick = {(e) => this.clickAble(e,null)}>
        <Slider {...settings} ref={slider => this.slider =  slider && slider['innerSlider']}>
            {
                this.state.Loading ? 
                null 
                :
                this.state.ProjectInformation.map((projInfo, index) => {
                  var projectTileState = {
                    projectIndex : index,
                    modalOpen : false,
                    fade : false,
                  }

                  if (this.state.projectTiles.length < this.state.ProjectInformation.length)
                    this.state.projectTiles.push(projectTileState);

                  return (
                    <div onClick = {(e) => this.clickAble(e,index)}>
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
                      nextToOpen = {this.state.projectTiles.filter(x => x.projectIndex === index)[0].nextToOpen}
                      modalOpen = {this.state.projectTiles.filter(x => x.projectIndex === index)[0].modalOpen}/>
                      </div>
                  )
                  })
              }  
        </Slider>
      </div>
    );
  }
}

export default Dashboard;
