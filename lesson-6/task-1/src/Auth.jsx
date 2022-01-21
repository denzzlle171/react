import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';


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
    // variant 1
    // const button = this.state.isLoggedIn ? (
    //   <button onClick={this.hendleLogout}>Logout</button>
    // ) : (
    //   <button onClick={this.hendleLogin}>Login</button>
    // );

    // variant 2
    //     let button;
    //     if (this.state.isLoggedIn) {
    //   button = <button onClick={this.hendleLogout}>Logout</button>;
    //     } else {
    //     button = <button onClick={this.hendleLogin}>Login</button>;
    // }

    // variant 3 (in jsx)
    
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.hendleLogout} />
        ) : (
          <Login onLogin={this.hendleLogin} />
        )}
      </div>
    );
  }
}
export default Auth;
