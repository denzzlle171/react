import React from 'react';

class ColorPicker extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      activeColor: null,
    };
  }

  setTitle = (title) => {
    this.setState({
      activeColor: title,
    
    });
  }; 

  clearTitle = () => this.setTitle(null);

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.activeColor}</div>
        <div>
          <button
            onMouseEnter={() => this.setTitle('Coral')}
            onMouseLeave={this.clearTitle}
            className="picker__button picker__button_coral"
          ></button>

          <button
            onMouseEnter={() => this.setTitle('Aqua')}
            onMouseLeave={this.clearTitle}
            className="picker__button picker__button_aqua"
          ></button>

          <button
            onMouseEnter={() => this.setTitle('Bisque')}
            onMouseLeave={this.clearTitle}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
