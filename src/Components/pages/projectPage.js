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
          content="First web project using React technology."
          img="logo192.png"
          link="https://github.com/jacobjc2/react-web-app"/>
        </div>
      )
    }
    else if(this.state.activeTab === 1) {
      return (
        <div className="python-grid">
          <ProjectCard 
          title="Python Project"
          content="Example Python Project"
          img="python192.png"
          link="https://github.com/jacobjc2/react-web-app"/>
        </div>
      )
    }
    else if(this.state.activeTab === 2) {
      return (
        <div className="c-grid">
          <ProjectCard 
          title="C/C++ Project"
          content="Example C/C++ project"
          img="c192.png"
          link="https://github.com/jacobjc2/react-web-app"/>
        </div>
      )
    }
    else if(this.state.activeTab === 3) {
      return (
        <div className="other-grid">
          <ProjectCard 
          title="Java Project"
          content="Example Java Project"
          img="java192.png"
          link="https://github.com/jacobjc2/react-web-app"/>
        </div>
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
