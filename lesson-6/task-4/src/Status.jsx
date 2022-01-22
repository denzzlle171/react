import React, {Component} from 'react';
import Online from './Online';
import Offline from './Offline';



const Status = (props) => {

  console.log(props.isOnline);

    if (props.isOnline) {
      return <Online />;
    }
    return <Offline />; 
}    
    
    
    

export default Status;
