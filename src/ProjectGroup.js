import React, { Component } from 'react';
import ProjectBadges from './ProjectBadges';
import ProjectBadge from './ProjectBadge';
import ProjectVersionsHistory from './ProjectVersionsHistory';
import ProjectTeam from './ProjectTeam';
import ProjectIntegration from './ProjectIntegration';
import CustomHr from './CustomHr';

class ProjectGroup extends Component {
/*
  constructor() {
    super();
    this.state = {
      project: null
    };
  }*/

  render() {
    if(this.props.project == null)
      return (
        <div className="projectGroup"></div>
      );
    return (
        <div className="projectGroup">
          <CustomHr level="2" closeAction={this.props.closeAction}/>
          <p>{this.props.project.name}</p>
          <p className="badgesVersion">
             &nbsp;&nbsp;
            <ProjectBadge code={this.props.project.code} version="last" badge="version" />
             &nbsp;&nbsp;
            <ProjectBadge code={this.props.project.code} version="fresh" badge="version" />
             &nbsp;&nbsp;
            <ProjectBadge code={this.props.project.code} version="pending" badge="version" />
             &nbsp;&nbsp;
            <ProjectBadge code={this.props.project.code} version="released" badge="version" />
          </p>
          <ProjectBadges project={{code:this.props.project.code, version:"fresh"}}/>
          <p className="projectDetails">
            <ProjectVersionsHistory project={this.props.project}/>
            <ProjectTeam project={this.props.project}/>
            <ProjectIntegration project={this.props.project}/>
          </p>
        </div>
    );
  }
}

export default ProjectGroup;
