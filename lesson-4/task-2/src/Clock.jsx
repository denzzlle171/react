import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realTime: moment(new Date()).format('h:mm:ss A'),
    };

    setInterval(() => {
      this.setState({
        realTime: moment(new Date()).format('h:mm:ss A'),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.realTime}</div>
      </div>
    );
  }
}
export default Clock;

// moment(new Date()).format('h:mm:ss A'),
// let atime = new Date(Date.UTC(0));
// console.log(atime);
