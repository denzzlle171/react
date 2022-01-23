import React from 'react';

const Spinner = (props) => {
  console.log(props.size)

  return (
    <span
      style={{ width: props.size, height: props.size }}
      className="spinner"
    ></span>
  );
};

export default Spinner;
