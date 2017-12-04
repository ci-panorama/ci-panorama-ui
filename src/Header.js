import React, { Component } from 'react';
import {ciPanoramaServer} from './Server';

class Header extends Component {
  render() {
    return (
        <div className="header">
           {/*<div className="menu">
              <div className="item selected"><a href="#">Home</a></div>
              <div className="item"><a href="#">Data</a></div>
              <div className="item"><a href="#">Admin</a></div>
              <div className="item"><a href="#">Stats</a></div>
    </div>*/}
          {/*}<div className="search">
            <input type="test" value="search project, result ..."/>
          </div>*/}
        </div>
    );
  }
}

export default Header;
