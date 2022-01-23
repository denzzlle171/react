import React from 'react';

const Logout = (props) => {
 return (
   <button onClick={props.onLogout} className="logout btn">
     Logout
   </button>
 );
};

export default Logout;
