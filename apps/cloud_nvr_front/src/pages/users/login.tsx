import React, { FC } from 'react';
import { connect, ConnectProps, LoginModelState } from 'umi';

import styles from './login.less';
import {Dispatch} from "dva";
import {History} from 'history'
import LoginComponent from "./components/Login";

import { LoginParamsType } from "../../services/users";




interface PageProps extends ConnectProps{
  login: LoginModelState;
  // dispatch: Dispatch<any>;
}


const Login: FC<PageProps> = (props) => {
  // const Login = (props:LoginProps)  => {
  const dispatch = props.dispatch;
  console.log(props);
  const loginLoading = props.login.loginLoading;

  const handleLogin = (values: LoginParamsType) => {
    // const { dispatch } = props;
    console.log("Received login values of form: ", values);
    if (dispatch) {
      dispatch({type: "login/login", payload: values});
    }
  };

  const styles = {
    main: {
      width: "100%",
      height: "100%",
    },
  };
  return (
    <div style={styles.main}>
      <LoginComponent onLogin={handleLogin} loginLoading={loginLoading} />
    </div>
  );
};

export default connect(({ login }: { login: LoginModelState }) => ({ login }))(Login);

