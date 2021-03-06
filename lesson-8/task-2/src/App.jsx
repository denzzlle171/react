import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    
this.state = {
   visible:true
    }
    this.toggle = this.toggle.bind(this);
}

  toggle()  {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && <div className='component'>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2}/>
          <Clock location="New York" offset={-5} />
        </div> }</div>

      </div>
    );
  }
};
export default App;

