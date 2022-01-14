import React from 'react';

const Avatar = (props) => {
  console.log(props)
  return <img className="avatar" src={props.AvatarUrl} alt={props.name} />;
};

export default Avatar;
