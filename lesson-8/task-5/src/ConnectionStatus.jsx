import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'online',
      cssClass: 'status',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.onStatus);
    window.addEventListener('offline', this.offStatus);
  }

  componentWillUnmount() {
   window.addEventListener('online', this.onStatus);
   window.addEventListener('offline', this.offStatus); 
  }

  onStatus = (e) => {
    this.setState({
      status: 'online',
      cssClass: 'status',
    });
  };

  offStatus = (e) => {
    this.setState({
      status: 'offline',
      cssClass: 'status status_offline',
    });
  };

  render() {
    
      return <div className={this.state.cssClass}>{this.state.status}</div>;
   
  }
}

export default ConnectionStatus;


