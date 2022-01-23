import React from 'react';

import Login from './Login';
import Logout from './Logout';
// import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: false
    };
  }

  hendleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  
  hendleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  
  render() {
console.log(this.state.isLoggedIn);
    if (this.state.isLoggedIn) {
      return <Logout onLogout={this.hendleLogout} />
    }
    
    return <Login onLogin={this.hendleLogin} />
      
      // <Spinner size={120}/>
      
      
  
    
  }

}
export default Auth;
