import React, { Component } from 'react';
import {ciPanoramaServer} from './Server';

class ProjectBadge extends Component {
  
  render() { 
    return (
        <img src={ciPanoramaServer.getBadgeUrl(this.props.code + "/" + this.props.version + "/" + this.props.badge + ".svg")} alt={this.props.badge} />
    );
  }
  
}

export default ProjectBadge;
