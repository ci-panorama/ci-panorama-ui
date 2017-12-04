import React, { Component } from 'react';

class ProjectTitle extends Component {

  render() {
    return (
        <span className="projectTitle" onClick={() => this.props.onclick()}>{this.props.projectGroup.code}</span>
    );
  }
  
}

export default ProjectTitle;
