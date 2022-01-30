import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'online',
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
    });
  };

  offStatus = (e) => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    
      return <div className="status">{this.state.status}</div>;
   
  }
}

export default ConnectionStatus;


