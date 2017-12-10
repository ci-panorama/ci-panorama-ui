import React, { Component } from 'react';
import Table from './Table';
import {ciPanoramaServer} from './Server';
import CustomHr from './CustomHr';

const tableColumnsSpec = [
  {width:50,name:"#",value: (dev=>dev.trigram)},
  {width:300,name:"fullname",value: (dev=>dev.fullname)},
  {width:250,name:"email",value: (dev=>dev.email)},
  {width:190,name:"company",value: (dev=>dev.companyName)},
  {width:80,name:"picto",value: (dev=> dev.imageUrl ? <img height={80} src={dev.imageUrl} alt={'picto for ' + dev.fullname}/> : '')}
];

class ProjectTeam extends Component {
  
  constructor() {
    super();
    this.state = {
      open: false,
      team: null
    };
  }
  
  isNewSelected(nextProps, nextStat){
    return ((!this.props.project && nextProps.project)
    || (this.props.project && nextProps.project && nextProps.project.code !== this.props.project.code));
  }

  reduceToFreshTeamData(details){
    console.info("process details");

    var filteredDetails = details
      .filter(v => v.team!=null)
      .sort((a,b) => new Date(b.date) - new Date(a.date));

    if(filteredDetails && filteredDetails.length > 0){
      console.info(filteredDetails[0].team);
      return filteredDetails[0].team;
    }

    return {name:' - none -', developers: []};
  }

  handleSelect() {
    if(this.state.team == null){
      ciPanoramaServer.get('projects/' + this.props.project.code,
      json => {
        this.setState({
          open: !this.state.open,
          team: this.reduceToFreshTeamData(json) 
        });
      });
    } else {
      this.setState({
        open: !this.state.open,
        team: this.state.team
      });
    }
  }

  render() {
    return (
        <span className="projectTeam">
          <p>
            {this.props.project.knewDevelopersCount} knew different developer(s).&nbsp;
            <span className={this.state.open ? 'selected link' : 'link'} onClick={() => this.handleSelect()}>
            <strong>See last identified team</strong>
            </span>
          </p>
          {(this.state.open) ? <span>
            <CustomHr level="3" closeAction={() => this.handleSelect()}/>
            <br/><br/>
            <strong>Team "{this.state.team.name}"</strong>
            <br/><br/>
            <Table data={this.state.team.developers} columns={tableColumnsSpec}/>
            </span> :''}
        </span>
    );
  }
  
  componentWillUpdate(nextProps, nextStat){
    if(this.isNewSelected(nextProps, nextStat)){
      this.setState({
        open: false,
        team: null 
      });
    }
  }
}

export default ProjectTeam;
