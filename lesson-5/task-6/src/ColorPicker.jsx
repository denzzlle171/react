import React from 'react';

class ColorPicker extends React.Component {
  showText = (color, e) => {
    const elTitle = document.querySelector('.picker__title');
    elTitle.textContent = color;
  };

  cleanText = () => {
    const elTitle = document.querySelector('.picker__title');
    elTitle.textContent = '';
  };

  render() {
    return (
      <div>
        <div className="picker__title">Red</div>
        <div>
          <button
            onMouseOver={this.showText.bind(this, 'Coral')}
            onMouseOut={this.cleanText}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOver={this.showText.bind(this, 'Aqua')}
            onMouseOut={this.cleanText}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOver={this.showText.bind(this, 'Bisque')}
            onMouseOut={this.cleanText}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
