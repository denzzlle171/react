import React from 'react';

const Avatar = (props) => {
  return <img className="avatar" src={props.аvatarUrl} alt={props.name} />;
};

export default Avatar;
