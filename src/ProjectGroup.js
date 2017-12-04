import React, { Component } from 'react';
import ProjectBadges from './ProjectBadges';
import ProjectBadge from './ProjectBadge';

class ProjectGroup extends Component {

  constructor() {
    super();
    this.state = {
      project: null
    };
  }

  handleSelect(project) {
    console.log("clic");
    this.setState({
      projectGroup: project
    });
  }

  render() {
    if(this.props.project == null)
      return (
        <div className="projectGroup">
          <p>Select a project to start</p>
        </div>
      );
    return (
        <div className="projectGroup">
          <h2>{this.props.project.code} :</h2>  
          <p class="badges-versions">
             &nbsp;&nbsp;
            <ProjectBadge code={this.props.project.code} version="last" badge="version" />
             &nbsp;&nbsp;
            <ProjectBadge code={this.props.project.code} version="fresh" badge="version" />
             &nbsp;&nbsp;
            <ProjectBadge code={this.props.project.code} version="pending" badge="version" />
             &nbsp;&nbsp;
            <ProjectBadge code={this.props.project.code} version="released" badge="version" />
            <br/>&nbsp;&nbsp;
            <small>{this.props.project.knewVersionsCount} knew different version(s). </small>
          </p>
          <ProjectBadges project={{code:this.props.project.code, version:"fresh"}}/>
        </div>
    );
  }
  
}

export default ProjectGroup;
