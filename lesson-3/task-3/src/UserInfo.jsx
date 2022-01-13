import React from 'react';
import Avatar from './Avatar';
const UserInfo = (props) => {
  return (
    <div className="user-info">
      <Avatar name={props.user.name} avatarUrl={props.user.аvatarUrl} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
