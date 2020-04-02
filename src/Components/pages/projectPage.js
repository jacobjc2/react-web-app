import React, { Component } from 'react';
import { Tabs, Tab, Grid, Card, Button, CardContent, CardMedia, IconButton, CardHeader, Paper } from '@material-ui/core';


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
        <Paper elevation="2" style={{maxWidth: '345', margin: 'auto'}}>
          <Card >
          <CardHeader
            
            title="React Portfolio"
            />
            <CardMedia square
            imageUrl='https://img.stackshare.io/service/1020/OYIaJ1KK.png'/>
            <CardContent>
                This is the code for the website you are currently viewing
            </CardContent>
          </Card>
        </Paper>
        
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
          <section className="projects-grid">
            <Grid container >
              <Grid item>
                <div className="content">
                  {this.toggleCategories()} 
                </div>
              </Grid>
              
            </Grid>
            
          </section>

        </div>
      </div>
    );
  }
}

export default ProjectPage;
