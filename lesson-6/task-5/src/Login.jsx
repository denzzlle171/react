import React from 'react';

const Login = (props) => {
  return (
    <button onClick={props.onLogin} className="login btn">
      Login
    </button>
  );
};

export default Login;
