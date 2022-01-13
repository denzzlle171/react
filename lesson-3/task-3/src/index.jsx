import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  аvatarUrl: 'https://avatars1.githubusercontent.com',
};

ReactDOM.render(
  <Comment
    user={userInfo}
    text="Good job!"
    date={new Date('2019-01-01T11:32:19.566Z')}
  />,
  rootElement
);
