import React from 'react';

class Toggler extends React.Component {
  buttonСondition = (e) => {
    if (e.target.textContent === 'Off') {
      e.target.textContent = 'On';
    } else {
      e.target.textContent = 'Off';
    }
  };

  render() {
    return (
      <button onClick={this.buttonСondition} className="toggler">
        Off
      </button>
    );
  }
}
export default Toggler;

{
  // const elButton = document.querySelector('.toggler');
  /* <button onClick={() => this.buttonСondition()} className="toggler"></button> */
}
