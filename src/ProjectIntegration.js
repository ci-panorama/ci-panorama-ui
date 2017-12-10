import React, { Component } from 'react';
import Table from './Table';
import {ciPanoramaServer} from './Server';
import CustomHr from './CustomHr';
import ProjectBadge from './ProjectBadge';

const tableColumnsSpec = [
  {width:70,name:"name",value: (data=><strong>data.name</strong>), className: "smallCellText"},
  {width:550,name:"url",value: (data=>data.url), className: "smallCellText"},
  {width:250,name:"result",value: (data=>data.badge)}
];

class ProjectIntegration extends Component {
  
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  
  isNewSelected(nextProps, nextStat){
    return ((!this.props.project && nextProps.project)
    || (this.props.project && nextProps.project && nextProps.project.code !== this.props.project.code));
  }

  badgeUrl(name, version){
    return "<img src=\"" + ciPanoramaServer.getBadgeUrl(this.props.project.code + "/" + version + "/" + name + ".svg") + "\"/>";
  }

  generateTableData() {
    const code = this.props.project.code;
    const version = "fresh";
    return [
      {name:'"Last" version'   , url:this.badgeUrl("version","last"),badge:<ProjectBadge code={code} version="last" badge="version" />},
      {name:'"Fresh" version'  , url:this.badgeUrl("version","fresh"),badge:<ProjectBadge code={code} version="fresh" badge="version" />},
      {name:'"Pending" version', url:this.badgeUrl("version","pending"),badge:<ProjectBadge code={code} version="pending" badge="version" />},
      {name:'"Release" version', url:this.badgeUrl("version","released"),badge:<ProjectBadge code={code} version="released" badge="version" />},
      {name:'Test result', url:this.badgeUrl("test-count",version),badge:<ProjectBadge code={code} version={version} badge="test-count" />},
      {name:'Test coverage', url:this.badgeUrl("audit-coverage",version),badge:<ProjectBadge code={code} version={version} badge="audit-coverage" />},
      {name:'NCSS', url:this.badgeUrl("audit-ncss",version),badge:<ProjectBadge code={code} version={version} badge="audit-ncss" />},
      {name:'Last build result', url:this.badgeUrl("build",version),badge:<ProjectBadge code={code} version={version} badge="build" />},
      {name:'Build tool', url:this.badgeUrl("tool-logo",version),badge:<ProjectBadge code={code} version={version} badge="tool-logo" />},
      {name:'Developers (compact)', url:this.badgeUrl("developers-compact",version),badge:<ProjectBadge code={code} version={version} badge="developers-compact" />},
    ];
    //data.add({name:'', url:'',badge:});
  }

  handleSelect() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
        <span className="projectIntegration">
          <p>
            <span className={this.state.open ? 'selected link' : 'link'} onClick={() => this.handleSelect()}>
            <strong>See Badge integration help for this project</strong>
            </span>
          </p>
          {(this.state.open) ? <span>
            <CustomHr level="3" closeAction={() => this.handleSelect()}/>
            <br/><br/>
            <strong>Note</strong> : the specified version in tag URL can be a fixed one (like "{this.props.project.last.version}"), or a value between "fresh", "last", "pending" or "released"
            <br/><br/>
            <Table data={this.generateTableData()} columns={tableColumnsSpec}/>
            </span> :''}
        </span>
    );
  }
  
  componentWillUpdate(nextProps, nextStat){
    if(this.isNewSelected(nextProps, nextStat)){
      this.setState({
        open: false
      });
    }
  }
}

export default ProjectIntegration;
