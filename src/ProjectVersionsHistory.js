import React, { Component } from 'react';
import Table from './Table';
import {ciPanoramaServer} from './Server';
import CustomHr from './CustomHr';

const tableColumnsSpec = [
  {width:150,name:"version",value: (projectDetail=>projectDetail.version)},
  {width:720,name:"date",value: (projectDetail=>projectDetail.created)}
];

class ProjectVersionsHistory extends Component {
  
  constructor() {
    super();
    this.state = {
      open: false,
      details: null
    };
  }
  
  isNewSelected(nextProps, nextStat){
    return ((!this.props.project && nextProps.project)
    || (this.props.project && nextProps.project && nextProps.project.code !== this.props.project.code));
  }

  handleSelect() {

    if(this.state.details == null){
      ciPanoramaServer.get('projects/' + this.props.project.code,
      json => {
        this.setState({
          open: !this.state.open,
          details: json 
        });
      });
    } else {
      this.setState({
        open: !this.state.open,
        details: this.state.details
      });
    }
  }

  render() {
    return (
        <span className="versionsHistory">
          <p>
            {this.props.project.knewVersionsCount} knew different version(s).&nbsp;
            <span className={this.state.open ? 'selected link' : 'link'} onClick={() => this.handleSelect()}>
            <strong>Show versions history</strong>
            </span>
          </p>
          {(this.state.open) ? <span>
            <CustomHr level="3" closeAction={() => this.handleSelect()}/>
            <br/><br/>
            <Table data={this.state.details} columns={tableColumnsSpec}/>
            <br/>
            <CustomHr level="3" />
            </span> :''}
        </span>
    );
  }
  
  componentWillUpdate(nextProps, nextStat){
    if(this.isNewSelected(nextProps, nextStat)){
      this.setState({
        open: false,
        details: null 
      });
    }
  }
}

export default ProjectVersionsHistory;
