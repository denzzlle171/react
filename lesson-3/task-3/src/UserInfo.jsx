import React from 'react';
import Avatar from './Avatar';

const UserInfo = (props) => {
  console.log(props)
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.AvatarUrl} name={props.user.name} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
