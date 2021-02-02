import React from "react";
import { connect } from "dva";
import LoginComponent from '../components/Accounts/Login';

const Login = ({ dispatch, login })  => {
    const styles = {
        main: {
            width:'100%',
            height:'100%',
        }
    }
    return (
        <div style={styles.main}>
            <LoginComponent login={login}/>
        </div>
    )

}


export default connect(({ login }) => ({
    login
}))(Login);