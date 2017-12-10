import React, { Component } from 'react';
import {ciPanoramaServer} from './Server';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <a href="http://www.elecomte.com">ci-panorama</a> - License : <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>
          <div className="badgesBackend">
            <img src={ciPanoramaServer.getBadgeUrl('server/uptime.svg')} alt="uptime" />&nbsp;&nbsp;
            <img src={ciPanoramaServer.getBadgeUrl('server/version.svg')} alt="version" />
           </div>
        </div>
    );
  }
}

export default Footer;
