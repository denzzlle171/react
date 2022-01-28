import React, { Component } from "react";
import Life from './Life';

class Demo extends Component {
  state = {
    numder: Math.round(Math.random() * 100),
  };
  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  update = () => {
    this.setState({
      numder: Math.round(Math.random() * 100),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button className="btn" onClick={this.show}>
            Show
          </button>
          <button className="btn" onClick={this.hide}>
            Hide
          </button>
          <button className="btn" onClick={this.update}>
            Update
          </button>
        </div>
        {this.state.visible && <Life number={this.state.numder} />}
      </div>
    );
  }
}
export default Demo;
