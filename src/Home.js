import React, { Component } from 'react';
import {ciPanoramaServer} from './Server';
import ProjectTitle from './ProjectTitle';
import ProjectGroup from './ProjectGroup';
import CustomHr from './CustomHr';
import ServerAdmin from './ServerAdmin';
import './resources/Home.css';

class Home extends Component {
  
  constructor() {
    super();
    
    this.state = { 
      availableProjectGroups : [],
      selectedProjectGroup : null 
    };
  }

  handleSelectProject(projectGroup){
    
    var keepAvailableProjectGroups = this.state.availableProjectGroups;
    var selectedProjectGroup = this.state.selectedProjectGroup !== projectGroup ? projectGroup : null;

    this.setState({ 
      availableProjectGroups : keepAvailableProjectGroups,
      selectedProjectGroup : selectedProjectGroup 
    })
  }

  render() {

    var projectTitles = this.state.availableProjectGroups.map(
      (projectGroup,i,a) => {

       return (
        <span>
          <ProjectTitle
            key={projectGroup.code}
            selected={this.state.selectedProjectGroup === projectGroup} 
            projectGroup={projectGroup}
            onclick={() => this.handleSelectProject(projectGroup)}/>
            {i<a.length-1?" / ":""}
          </span>);
      }
    );

    return (
        <div className="home">
          <h3>Projects : {projectTitles}</h3>
          <ProjectGroup project={this.state.selectedProjectGroup} closeAction={() => this.handleSelectProject(null)}/>
          <CustomHr level="1"/>
          <ServerAdmin/>
          <CustomHr level="1"/>
        </div>
    );
  }
  
  componentWillMount(){
    
    ciPanoramaServer.get('projects/groups',
         json => {
           this.setState({
             availableProjectGroups : json,
             selectedProjectGroup : null 
          });
         }
    );

  }
}

export default Home;
