import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
  // return <Clock />;
  return (
    <>
      <Clock location="New York" offset="+3" />
      <Clock location="New York" offset="+3" />
      <Clock location="New York" offset="+3" />
    </>
  );
};
export default App;
