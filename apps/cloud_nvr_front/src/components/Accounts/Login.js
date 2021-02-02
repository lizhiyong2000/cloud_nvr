import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'dva'
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

const FormItem = Form.Item; //表单的每一个input都是一个Form.Item

const Login = ({login: app }) => {

    const {loginLoading} = app

    var uri = 'https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png'

    function handleOk () {
        // validateFieldsAndScroll((err,value)=>{
        //     console.log(value)
        //     if (err) {
        //         return
        //     }
        //     dispatch({type:'app/login',payload:value})
        // })
    }

    return (
        <div style={styles.login}>
            <div style={styles.loginView}>
                <div style={styles.loginHead}>
                    <img style={styles.loginImg} src={uri}></img>
                    <span style={styles.loginText}>Dva Login Test</span>
                </div>
                <div style={styles.loginBody}>
                    <form style={{width:'80%'}}>
                        <FormItem hasFeedback name="username" rules={[{ required: true }]}>
                           <Input size="large" onPressEnter={handleOk} placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem hasFeedback name="password" rules={[{ required: true }]}>
                            <Input size="large" type="password" onPressEnter={handleOk} placeholder="请输入密码" />
                        </FormItem>

                        <Button style={styles.loginButton} type="primary" size="large" onClick={handleOk} loading={loginLoading}>
                            登录
                        </Button>

                    </form>
                </div>

            </div>
        </div>

    )
}

Login.propTypes = { // 验证组件参数是否符合要求
    // form: PropTypes.object,
    login: PropTypes.object,
    // dispatch: PropTypes.func,
}

const styles = {
    login:{
        display:'flex',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    loginView:{
        width:320,height:320,
        boxShadow:'0 0 100px rgba(0,0,0,.08)',
    },
    loginHead:{
        width:320,
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    loginImg:{
        width:40,
        marginRight:8,
    },
    loginText:{
        fontSize:18
    },
    loginBody:{
        height:'80%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    loginButton:{
        width:'100%'
    }
}

// ui里面需要用到model里面的数据 将model里面的元素 当做props的方式 传递进来
export default Login;