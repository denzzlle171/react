// import React, { Component, useState } from 'react';
import React, {  useState } from 'react';
import Clock from './Clock.jsx';


const App = () => {
  const [visible, setVisible] = useState(true);



  const toggle = () => {
    setVisible(!visible,)
  }

return (
      <div>
        <button onClick={toggle}>Toggle</button>
        <div>{visible && <div className='component'>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2}/>
          <Clock location="New York" offset={-5} />
        </div> }</div>
      </div>
    );

}
export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
    
// this.state = {
//    visible:true
//     }
//     this.toggle = this.toggle.bind(this);
// }

//   toggle()  {
//     this.setState({
//       visible: !this.state.visible,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         <div>{this.state.visible && <div className='component'>
//           <Clock location="London" offset={0} />
//           <Clock location="Kyiv" offset={2}/>
//           <Clock location="New York" offset={-5} />
//         </div> }</div>

//       </div>
//     );
//   }
// };
// export default App;

