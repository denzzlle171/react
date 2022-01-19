import React from 'react';

class Toggler extends React.Component {
  buttonСondition = () => {
    const elButton = document.querySelector('.toggler');

    if (elButton.textContent === 'Off') {
      elButton.textContent = 'On';
    } else {
      elButton.textContent = 'Off';
    }
  };

  render() {
    return (
      <button onClick={() => this.buttonСondition()} className="toggler">
        Off
      </button>
    );
  }
}
export default Toggler;
