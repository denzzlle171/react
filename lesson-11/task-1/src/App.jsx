import React  from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';





class App extends React.Component {
  state = {
     number:0,
   }

  
  
  componentDidMount(){
   this.interval=setInterval(() => {
      this.setState({
        number : this.state.number + 1
      })
  },1000)
  }
  

  componentWillUnmount() {
    clearInterval(this.interval);
  }



  render() {
    
    return (
      <div className="app">
        {/* <Numbers title="All numbers" number={this.state.number} /> */}
        <Numbers title="Numbers" number={17} />
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <OddNumbers title="Odd numbers" number={this.state.number} />
      </div>
    );
  }
}
export default App;

