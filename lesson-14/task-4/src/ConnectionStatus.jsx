import React, { useState, useEffect } from 'react';


const ConnectionStatus = () => {
  const[ state, setState ] = useState({
      status: 'online',
      cssClass: 'status',
  });
  
const onStatus = (e) => {
    setState({
      status: 'online',
      cssClass: 'status',
    });
  };

 const offStatus = (e) => {
    setState({
      status: 'offline',
      cssClass: 'status status_offline',
    });
  };

  useEffect(() => {
    window.addEventListener('online', onStatus);
    window.addEventListener('offline', offStatus);

    return () => {
      window.removeEventListener('online', onStatus);
      window.removeEventListener('offline', offStatus);
    };
  }, [state]);

  




  
  return <div className={state.cssClass}>{state.status}</div>;
}
export default ConnectionStatus;




// class ConnectionStatus extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       status: 'online',
//       cssClass: 'status',
//     };
//   }

//   componentDidMount() {
//     window.addEventListener('online', this.onStatus);
//     window.addEventListener('offline', this.offStatus);
//   }

//   componentWillUnmount() {
//    window.removeEventListener('online', this.onStatus);
//    window.removeEventListener('offline', this.offStatus); 
//   }

//   onStatus = (e) => {
//     this.setState({
//       status: 'online',
//       cssClass: 'status',
//     });
//   };

//   offStatus = (e) => {
//     this.setState({
//       status: 'offline',
//       cssClass: 'status status_offline',
//     });
//   };

//   render() {
    
//       return <div className={this.state.cssClass}>{this.state.status}</div>;
   
//   }
// }

// export default ConnectionStatus;


