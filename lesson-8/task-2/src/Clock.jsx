import React, { Component } from 'react';

import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  //
  componentDidMount() {
  this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
    //
  }

  componentWillUnmount() {
  clearInterval(this.interval);
}



  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;
// moment().utcOffset(shift).format('h:mm:ss A');

// render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">{this.state.realTime}</div>
//       </div>
//     );
  // }