import React from 'react';
import Avatar from './Avatar';

function UserInfo(props) {
    return (
      <div className="user-info">
        <Avatar avatarUrl={props.user.аvatarUrl} name={props.user.name} />
        <div className="user-info__name">{props.user.name}</div>
      </div>
    );
  };


export default UserInfo;
