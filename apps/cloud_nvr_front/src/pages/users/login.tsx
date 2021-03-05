import React, {FC} from 'react';
import {connect, ConnectProps, LoginModelState} from 'umi';

import * as styles from './login.less'

import {Button, Form, Input,} from 'antd';

import { FormProps } from 'antd/lib/form';

import Icon from '@ant-design/icons/lib'
import * as PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { push } from 'react-router-redux';
// import { pathPrefix, urlPrefix } from 'Constants/Dictionary';
// import { userlogin } from 'Redux/reducer/login';
import leftTop from '../../assets/leftTop.png';
import rightTop from '../../assets/rightTop.png';
import leftBottom from '../../assets/leftBottom.png';
import rightBottom from '../../assets/rightBottom.png';
import logo from '../../assets/logo.svg';
import {LoginParamsType} from "../../services/users";

const FormItem = Form.Item;




interface PageProps extends ConnectProps, FormProps {
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

  const refreshVerifyImage = () =>{
    console.log("refresh veriyfy image ");
  }

  // const styles = {
  //   main: {
  //     width: "100%",
  //     height: "100%",
  //   },
  // };

  let verifyImgUrl = `http://localhost:4000/api/verifyCode?${new Date().getTime()}`
  return (



    <div className={styles.login}>
      <div className={styles.imgs}>
        <div className={styles.leftTop}>
          <img src={leftTop} alt=""/>
        </div>
        <div className={styles.rightTop}>
          <img src={rightTop} alt=""/>
        </div>
        <div className={styles.leftBottom}>
          <img src={leftBottom} alt=""/>
        </div>
        <div className={styles.rightBottom}>
          <img src={rightBottom} alt=""/>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <img src={logo} alt=""/>
          </div>
          <span className={styles.productName}>
              智能视频分析平台
            </span>
        </div>
      </div>
      <div className={styles.centerBox}/>
      <div className={styles.loginForm}>
        <div className={styles.logo}>智能视频分析平台</div>
        <p className={styles.title}>账号密码登录</p>
        <Form onFinish={handleLogin}>
          <FormItem name='username' rules={[{required: true, message: '请输入用户名'}]}>
              <Input
                prefix={<Icon type="user" className={styles.icon}/>}
                placeholder="账号"
              />
          </FormItem>
          <FormItem name='password' rules={[{required: true, message: '请输入密码'}]}>
              <Input.Password
                prefix={<Icon type="lock" className={styles.icon}/>}
                placeholder="密码"
              />
          </FormItem>
          <div className={styles.yzmContainer}>
            <FormItem name='validate' rules={[{required: true, message: '请输入验证码'}]}>
                <Input
                  prefix={<Icon type="safety-certificate" className={styles.icon}/>}
                  placeholder="验证码"
                />
            </FormItem>
            <div className={styles.yzm} onClick={refreshVerifyImage}>
              <img src={verifyImgUrl} alt=""/>
            </div>
          </div>
          <FormItem>
            <Button type="primary" htmlType="submit" className={styles.submitBtn} block>
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>

    // <div style={styles.main}>
    //   <LoginComponent onLogin={handleLogin} loginLoading={loginLoading} />
    // </div>
  );
};

Form.create

export default connect(({login}: { login: LoginModelState }) => ({login}))(Login);

