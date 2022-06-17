import React from 'react';
import { printProps } from './PrintProps';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';

// const UserInfoWrapper = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '12');

export const ForApp = () => {
  return <UserInfoWithLoader />;
  // return <UserInfoWrapper a={1} b="hello" c={{ name: 'Shau' }} />;
};
