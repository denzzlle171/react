import React, { Component } from "react";
import UserGreeting from './UserGreeting';
 import GestGreeting from './GestGreeting';   
    
    
const Greeting = (props) => {
    console.log(props);
    if (props.isLoggedIn) {
        return <UserGreeting />;
    }
    return < GestGreeting />;
};


export default Greeting