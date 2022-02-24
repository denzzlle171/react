import React, { useState, useEffect } from 'react';


const Clock = (props) => {
  const [date, setDate] = useState(getTimeWithOffset(props.offset));

  function getTimeWithOffset(offset) {
    const currentTime = new Date();

    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
  }
//
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(
        getTimeWithOffset(props.offset),
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  });


//
  return (
    <div className="clock">
      <div className="clock__location">{props.location}</div>
      <div className="clock__time">{date.toLocaleTimeString()}</div>
    </div>
  );
};
export default Clock;
// class Clock extends Component {
//   constructor(props) {
//     super(props);


//     this.state = {
//       date: this.getTimeWithOffset(this.props.offset),
//     };
//   }

//   getTimeWithOffset = offset => {
   
//     const currentTime = new Date();
   
//   const utcOffset = currentTime.getTimezoneOffset() / 60;
//   return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
// };

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         date: this.getTimeWithOffset(this.props.offset),
//       });
//     }, 1000);
  
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">
//           {this.state.date.toLocaleTimeString()}
//         </div>
//       </div>
//     );
//   }
// }

// export default Clock;
