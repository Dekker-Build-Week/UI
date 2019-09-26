import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody";
import projectEntryStyle from "assets/jss/material-dashboard-react/components/projectEntryStyle.js";

import TextField from "@material-ui/core/TextField";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

class ProjectEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techStackUploaded: false,
      fileUploaded: false,
      newProjectData: {
        title: "",
        description: "",
        coverImagePath: "", //Set up cover Image
        client: {},
        videoPath: "", //SET TO VIDEO FILE LOC ONLY WITH ATTACHED
        team: [],
        techStacks: [],
        files: []
      }
    };
  }
  handleProjectUpload = event => {
    let selectedFile = event.target.files[0];
    const data = new FormData();
    data.append("file", selectedFile);
    let createProjectData = this.state.newProjectData;
    createProjectData.videoPath = selectedFile.name;
    createProjectData.files.push(data);
    this.setState({ newProjectData: createProjectData });
    // console.log(this.state.newProjectData);
  };

  handleTextInput(event, updateVariable) {
    let value = event.target.value;
    let createProjectData = this.state.newProjectData;
    createProjectData[updateVariable] = value;
    this.setState({ newProjectData: createProjectData });
    // console.log(this.state.newProjectData);
  }
  handleClientUpload(event, updateVariable) {
    let createProjectData = this.state.newProjectData;
    if (updateVariable === "clients") {
      let selectedFile = event.target.files[0];
      const data = new FormData();
      data.append("file", selectedFile);
      createProjectData.client.imagePath = selectedFile.name;
      createProjectData.files.push(data);
    } else {
      let value = event.target.value;
      createProjectData.client.name = value;
    }
    this.setState({ newProjectData: createProjectData });
    // console.log(this.state.newProjectData);
  }
  handleTeamUpload = event => {
    let createProjectData = this.state.newProjectData;
    let selectedFile = event.target.files[0];
    const data = new FormData();
    this.setState({ fileUploaded: true });
    data.append("file", selectedFile);
    createProjectData.files.push(data);
    this.setState({ teamMemberData: { photoPath: selectedFile.name } });
  };
  handleTeamNameEntry = event => {
    let value = event.target.value;
    // this.setState({ newProjectData: { clientName: value } });
    // console.log(this.state.newProjectData.clientName);
    let createTeamMemberData = this.state.teamMemberData;
    createTeamMemberData.name = value;
    this.setState({ teamMemberData: createTeamMemberData });
    // console.log(this.state.teamMemberData);
    // console.log(this.state.newProjectData);
  };
  submitTeamMember = e => {
    console.log(this.state.teamMemberData);
    let createProjectData = this.state.newProjectData;
    createProjectData.team.push(this.state.teamMemberData);
    this.setState({ newProjectData: createProjectData });
    this.state.teamMemberData = [];
    this.setState({ fileUploaded: false });
    console.log(this.state.newProjectData.team);

    // console.log(this.state.newProjectData);
  };
  handleProjectCoverUpload = event => {
    let selectedFile = event.target.files[0];
    const data = new FormData();
    data.append("file", selectedFile);
    let createProjectData = this.state.newProjectData;
    createProjectData.coverImagePath = selectedFile.name;
    createProjectData.files.push(data);
    this.setState({ newProjectData: createProjectData });
    // console.log(this.state.newProjectData);
  };
  handleTechUpload = event => {
    let createProjectData = this.state.newProjectData;
    let selectedFile = event.target.files[0];
    const data = new FormData();
    this.setState({ techStackUploaded: true });
    data.append("file", selectedFile);
    createProjectData.files.push(data);
    this.setState({ techStacks: { imagePath: selectedFile.name } });
  };
  handleTechStackEntry = event => {
    let value = event.target.value;
    let createTechStackData = this.state.techStacks;
    createTechStackData.name = value;
    this.setState({ techStacks: createTechStackData });
  };

  submitTechStack = e => {
    console.log(this.state.techStacks);
    let createProjectData = this.state.newProjectData;
    createProjectData.techStacks.push(this.state.techStacks);
    this.setState({ newProjectData: createProjectData });
    this.state.techStacks = [];
    this.setState({ fileUploaded: false });
    console.log(this.state.newProjectData.techStacks);
    this.setState({ techStackUploaded: false });
    // console.log(this.state.newProjectData);
  };
  sendForm = e => {
    console.log(this.state.newProjectData);

    axios
      .post(
        "https://secret-sands-59734.herokuapp.com/create_project_new",
        this.state.newProjectData,
        {
          // receive two    parameter endpoint url ,form data
        }
      )
      .then(res => {
        // ADD FILE UPLOADED STATE HERE
        // then print response status
        console.log(res.statusText);
        if (res.statusText === "OK") {
          this.setState({
            fileUploaded: false
          });
        }
        this.setState({ showModal: false });
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.projectView}>
        <Card>
          <CardHeader stats icon className={classes.cardHeader}>
            {/* Client Logo Uploaded here */}
            <input
              accept="image/*"
              className={classes.input}
              id="client-upload-button-file"
              multiple
              type="file"
              onChange={e => {
                this.handleClientUpload(e, "clients");
              }}
            />
            <label htmlFor="client-upload-button-file">
              <Button component="span" className={classes.clientLogoUpload}>
                Upload Client Logo Media
                <CloudUploadIcon className={classes.rightIcon} />
              </Button>
            </label>
            {/* Client Name Entered here */}
            <TextField
              id="outlined-dense"
              margin="dense"
              variant="outlined"
              label="Client Name"
              placeholder="Enter Client Name"
              className={classes.clientName}
              rows="10"
              InputLabelProps={{
                shrink: true
              }}
              onChange={e => {
                this.handleClientUpload(e, "clientName");
              }}
            />
            <br />
            {/* Project Name Entered here */}
            <TextField
              id="outlined-dense"
              margin="dense"
              variant="outlined"
              label="Project Name"
              placeholder="Enter Project Name"
              className={classes.projectTitle}
              rows="10"
              InputLabelProps={{
                shrink: true
              }}
              onChange={e => {
                this.handleTextInput(e, "title");
              }}
            />
            <div className={classes.projectBorderTop}></div>
          </CardHeader>
          <CardBody className={classes.projectBody}>
            <div className={classes.projectInfo}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  {/* Project Cover Uploaded here */}
                  <div>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="project-upload-cover-button-file"
                      multiple
                      type="file"
                      onChange={this.handleProjectCoverUpload}
                    />
                    <label htmlFor="project-upload-cover-button-file">
                      <Button
                        component="span"
                        className={classes.teamMemberUploadContainer}
                      >
                        Upload Project Cover
                        <CloudUploadIcon className={classes.rightIcon} />
                      </Button>
                    </label>
                  </div>
                  {/* Project Media Uploaded here */}
                  <div>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="project-upload-button-file"
                      multiple
                      type="file"
                      onChange={this.handleProjectUpload}
                    />
                    <label htmlFor="project-upload-button-file">
                      <Button
                        component="span"
                        className={classes.projectMediaUpload}
                      >
                        Upload Project Media
                        <CloudUploadIcon className={classes.rightIcon} />
                      </Button>
                    </label>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      {/* Project Description Entered Here */}
                      <div className={classes.projectDescriptionContainer}>
                        <TextField
                          id="outlined-full-width"
                          label="Project Description"
                          placeholder="Enter Project Description"
                          className={classes.projectDescriptionEntry}
                          fullWidth
                          multiline
                          rows="10"
                          margin="normal"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true
                          }}
                          onChange={e => {
                            this.handleTextInput(e, "description");
                          }}
                        />
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer>
                        {/* Team Member Image Uploaded here */}
                        <div
                          className={classes.teamMemberUploadContainer}
                          hidden={this.state.fileUploaded}
                        >
                          <input
                            accept="image/*"
                            className={classes.input}
                            id="team-upload-button-file"
                            multiple
                            type="file"
                            onChange={this.handleTeamUpload}
                          />
                          <label htmlFor="team-upload-button-file">
                            <Button
                              component="span"
                              color="primary"
                              className={classes.teamMemberUpload}
                            >
                              Upload Team Member
                              <CloudUploadIcon className={classes.rightIcon} />
                            </Button>
                          </label>
                        </div>
                        {/* Team Member Name Entered Here */}
                        <div
                          className={classes.teamMemberNameContainer}
                          hidden={!this.state.fileUploaded}
                        >
                          <TextField
                            id="outlined-dense"
                            margin="dense"
                            variant="outlined"
                            label="Team Member Name"
                            placeholder="Enter Full Name"
                            className={classes.projectTitle}
                            rows="10"
                            onChange={e => {
                              this.handleTeamNameEntry(e);
                            }}
                          />
                        </div>
                        <Button
                          color="primary"
                          id="outlined-dense"
                          onClick={this.submitTeamMember}
                        >
                          +
                        </Button>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <p></p>
                  <Button onClick={this.sendForm}>Save</Button>
                </GridItem>
              </GridContainer>
            </div>
          </CardBody>
          <CardFooter className={classes.projectFooter}>
            <div hidden={this.state.techStackUploaded}>
              {/* Tech Stack Uploaded Here */}
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={this.handleTechUpload}
              />
              <label htmlFor="contained-button-file">
                <Button component="span" className={classes.techStackUpload}>
                  Upload Tech Stack Media
                  <CloudUploadIcon className={classes.rightIcon} />
                </Button>
              </label>
            </div>
            <div
              className={classes.teamMemberNameContainer}
              hidden={!this.state.techStackUploaded}
            >
              <TextField
                id="outlined-dense"
                margin="dense"
                variant="outlined"
                label="Tech Stack Name"
                placeholder="Enter Tech Stack Name"
                className={classes.projectTitle}
                rows="10"
                onChange={e => {
                  this.handleTechStackEntry(e);
                }}
              />
              <Button
                color="primary"
                id="outlined-dense"
                onClick={this.submitTechStack}
              >
                Add Tech Stack
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
export default withStyles(projectEntryStyle)(ProjectEntry);
