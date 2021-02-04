import React from "react";
import { connect } from "dva";
import LoginComponent from '../components/Accounts/Login';

import type { StateType } from '../models/login';
import { Dispatch } from 'redux';
import {LoginParamsType} from "../services/users";
export type LoginProps = {
    dispatch: Dispatch<any>;
    state: StateType;
};

const Login: React.FC<LoginProps> = (props) => {
// const Login = (props:LoginProps)  => {

    const loginLoading = props.state.loginLoading

    const handleLogin = (values: LoginParamsType) => {
        const { dispatch } = props;
        console.log('Received login values of form: ', values);
        dispatch({type:'login/login',payload:values})
    };

    const styles = {
        main: {
            width:'100%',
            height:'100%',
        }
    }
    return (
        <div style={styles.main}>
            <LoginComponent onLogin={handleLogin} loginLoading={loginLoading}/>
        </div>
    )

}


export default connect(({ loginLoading }:StateType) => ({
    loginLoading
}))(Login);

//
// export default connect(({ login, loading }: ConnectState) => ({
//     userLogin: login,
//     loginLoading: loading.effects['login/login'],
// }))(Login);