import React, { Component } from 'react';
import {ciPanoramaServer} from './Server';
import ProjectTitle from './ProjectTitle';
import ProjectGroup from './ProjectGroup';
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

    this.setState({ 
      availableProjectGroups : keepAvailableProjectGroups,
      selectedProjectGroup : projectGroup 
    })
  }

  render() {

    var projectTitles = this.state.availableProjectGroups.map(
      (projectGroup,i,a) => {

       return (
        <span>
          <ProjectTitle
            key={projectGroup.code} 
            projectGroup={projectGroup}
            onclick={() => this.handleSelectProject(projectGroup)}/>
            {i<a.length-1?" / ":""}
          </span>);
      }
    );

    return (
        <div className="home">
          <h3>Projects : {projectTitles}</h3>
          -----------------------------------------------------------------------------------------------------
          <ProjectGroup project={this.state.selectedProjectGroup}/>
          -----------------------------------------------------------------------------------------------------
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
