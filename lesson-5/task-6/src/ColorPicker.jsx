import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: null,
    };
  }

  setTitle = title => {
    this.setState({
      activeColor: title,
    });
  };

  clearTitle = () => this.setTitle(null);

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseLeave={this.clearTitle}
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

// Red;
