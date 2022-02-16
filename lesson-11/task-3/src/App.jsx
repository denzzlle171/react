import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isContent: true
  }
  
  toggle = () => {
    this.setState({
      isContent: !this.state.isContent,
    });
  }

  render() {

    const contentElt = (this.state.isContent)
     ?(<div className="expand__content"><p>
         Hooks are a new addition in React 16.8. They let you use state and
         other React features without writing a class.
       </p></div>)
     : null
     
    return (
      <div className="app">
        <Expand title="Some title" Click={this.toggle}>
          {contentElt}
        </Expand>
      </div>
    );
  }
}
export default App;

