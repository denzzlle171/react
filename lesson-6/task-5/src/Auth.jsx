import React from 'react';

import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: 'offline'
    };
  }

  hendleLogin = () => {
    this.setState({
      isLoggedIn: 'weit' });

      setTimeout(() => {
        this.setState({
          isLoggedIn: 'online',
        });
      }, 2000);
   
  }
  
  hendleLogout = () => {
    this.setState({
      isLoggedIn: 'offline',
    });
  }
  
  render() {
console.log(this.state.isLoggedIn);
    if (this.state.isLoggedIn === 'online') {
      return <Logout onLogout={this.hendleLogout} />;
    } else if (this.state.isLoggedIn === 'offline') {
      return <Login onLogin={this.hendleLogin} />;
    } else if (this.state.isLoggedIn === 'weit') {
      return <Spinner size={120} />;
    }
  }

}
export default Auth;
