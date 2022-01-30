import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
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
      status: true,
    });
  };

  offStatus = (e) => {
    this.setState({
      status: false,
    });
  };

  render() {
    if (this.state.status === true) {
      return <div className="status">Online</div>;
    }

    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;


