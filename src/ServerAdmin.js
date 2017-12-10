import React, { Component } from 'react';
import {ciPanoramaServer} from './Server';
import CustomHr from './CustomHr';

class ServerAdmin extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
      cache: null,
      build: null,
    };
  }
  
  handleSelect() {
    if(!this.state.open){
      ciPanoramaServer.get('technical/cache/size' ,
        jsonCache => {
          ciPanoramaServer.get('technical/version' ,
          jsonVersion => {
          this.setState({
            open: !this.state.open,
            cache: jsonCache,
            build: jsonVersion.build,
          })
        })
      });
    } else {
      this.setState({
        open: !this.state.open,
        cache: null,
        build: null,
      });
  }}

  resetCache() {
    ciPanoramaServer.getWithoutBody('technical/cache/reset' ,
    json => {
      ciPanoramaServer.get('technical/cache/size' ,
      json => {
        this.setState({
          open: this.state.open,
          cache: json ,
          build: this.state.build,
        })
      });
    });
  } 

  render() {
    return (
        <span className="serverAdmin">
          <h3><span className={this.state.open ? 'selected link' : 'link'} onClick={() => this.handleSelect()}>Administration tools</span></h3>
          {(this.state.open) ?
          <span className="adminTools">
            <CustomHr level="2" closeAction={() => this.handleSelect()}/>
            <p>Cache size : {this.state.cache.count} badges, for {this.state.cache.sizeKb} kb.&nbsp;
            <span className="link" onClick={() => this.resetCache()}><strong>Reset cache</strong></span></p>
            <p>Build nbr : {this.state.build}</p>
          </span>
          :''}
        </span>
    );
  }
}

export default ServerAdmin;
