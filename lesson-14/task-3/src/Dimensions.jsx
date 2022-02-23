import React, {useEffect, useState} from 'react';

 

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  const { width, height } = dimensions;

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
//
const handleResize = (e) => {
    const { innerHeight, innerWidth } = e.target;
    setDimensions({ width: innerWidth, height: innerHeight });
  };
//
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])




  return <div className="dimensions">{`${width} x ${height}`}</div>;
}
 export default Dimensions;

// class Dimensions extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       width: null,
//       height: null,
//     };
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.handleResize);
//     const { innerHeight, innerWidth } = window;
//     this.setDimensions({ width: innerWidth, height: innerHeight });
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }

//   handleResize = (e) => {
//     const { innerHeight, innerWidth } = e.target;
//     this.setDimensions({ width: innerWidth, height: innerHeight });
//   };

//   setDimensions = ({width, height}) => {
//     this.setState({
//       width,
//       height,
//     });
//     document.title = `${innerHeight} x ${innerHeight}`;
//   };

//   render() {
//     const { width, height } = this.state
    
//     return <div className="dimensions">{`${width} x ${height}`}</div>;
//   }
// };

// export default Dimensions;
