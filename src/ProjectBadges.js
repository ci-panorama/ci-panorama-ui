import React, { Component } from 'react';
import ProjectBadge from './ProjectBadge';

class ProjectBadges extends Component {
  
  render() {
    return (
        <p className="badges-other">
          &nbsp;&nbsp;
          <ProjectBadge code={this.props.project.code} version={this.props.project.version} badge="test-count" />
          &nbsp;&nbsp;
          <ProjectBadge code={this.props.project.code} version={this.props.project.version} badge="audit-coverage" />
          &nbsp;&nbsp;
          <ProjectBadge code={this.props.project.code} version={this.props.project.version} badge="audit-ncss" />
          &nbsp;&nbsp;
          <ProjectBadge code={this.props.project.code} version={this.props.project.version} badge="build" />
          &nbsp;&nbsp;
          <ProjectBadge code={this.props.project.code} version={this.props.project.version} badge="tool-logo" />
          <br/><br/>&nbsp;&nbsp;
          <ProjectBadge code={this.props.project.code} version={this.props.project.version} badge="developers-inline" />
        </p>
    );
  }
  
}

export default ProjectBadges;
