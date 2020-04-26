import React, { Component } from 'react';
import { Tabs, Tab, Grid } from '@material-ui/core';
import ProjectCard from './displayComponents/projectCard';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className="react-grid">
          <ProjectCard 
          title="React Portfolio"
          content="First web project using React technology."/>

          <ProjectCard title="React Project 2"
          content="My second react project"/>
        </div>
      )
    }
    else if(this.state.activeTab === 1) {
      return (
        <div><h1>Python</h1></div>
      )
    }
    else if(this.state.activeTab === 2) {
      return (
        <div><h1>C/C++</h1></div>
      )
    }
    else if(this.state.activeTab === 3) {
      return (
        <div><h1>Other</h1></div>
      )
    }
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="project-container">
          <div className="project-tabs">
            <Tabs value={this.state.activeTab} onChange={(event, tabId) => this.setState({ activeTab: tabId })} centered>
              <Tab label="React"/>
              <Tab label="Python"/>
              <Tab label="C/C++"/>
              <Tab label="Other"/>
            </Tabs>
          </div>
          <Grid container>
            <Grid item>
              <div>
                {this.toggleCategories()} 
              </div>
            </Grid>
          </Grid>

        </div>
      </div>
    );
  }
}

export default ProjectPage;
