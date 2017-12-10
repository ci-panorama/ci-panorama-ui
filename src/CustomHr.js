import React, { Component } from 'react';

class CustomHr extends Component {

  render() {
//    const { required, children, ...props } = this.props;
    var className = "customHr"+ this.props.level;
    return (
        (this.props.closeAction == null)
        ? <span className={className}>-----------------------------------------------------------------------------------------------------</span>
        : <span className={className}>-------------------------------------------------------------------------------------------------
          <span className="closeButton" onClick={this.props.closeAction}> X </span>-
        </span>
    );
  }
  
}

export default CustomHr;
