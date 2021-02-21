

import React, { FC } from 'react';
import { connect, ConnectProps, UsersModelState } from 'umi';

import styles from './list.less';


interface PageProps extends ConnectProps {
  users: UsersModelState;
}

const Users: FC<PageProps> = (props) => {
  console.log(props.users);
  return (
    <div>
      <h1 className={styles.title}>Page hero</h1>
      <h2>This is {props.users.list}</h2>
    </div>
  );
}
export default connect(({ users }: { users: UsersModelState }) => ({ users }))(Users);



