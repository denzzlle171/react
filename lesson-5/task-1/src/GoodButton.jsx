import React from 'react';

const GoodButton = () => {
  return (
    <button className="fancy-button" onClick={() => alert('Good job!')}>
      click me!
    </button>
  );
};
export default GoodButton;

//Good job!
