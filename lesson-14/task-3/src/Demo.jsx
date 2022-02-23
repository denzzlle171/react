import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Dimensions from './Dimensions';

const App = () => {
const [isVisible, setIsVisible] = useState(true)
  return (
    <div>
      <div>
        <button
          className="btn"
          onClick={() => setIsVisible(true)}
        >Show</button>
        <button
          onClick={() => setIsVisible(false)}
          className="btn"
        >Hide</button>
      </div>
      {isVisible && <Dimensions />}
    </div>
  );
};

export default App;

