import React, { Component } from 'react';
import UserForm from './UserForm.jsx';


class App extends Component {
  createUser=(object)=>{
    console.log(object);
  }
  
render(){

  return <UserForm createUser={this.createUser} />;
};
}
export default App;
