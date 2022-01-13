import React from 'react';

const UserAvatar = (props) => {
  return <img className="avatar" src={props.аvatarUrl} alt={props.name} />;
};

export default UserAvatar;
