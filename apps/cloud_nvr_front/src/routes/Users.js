import React from 'react';
import { connect } from 'dva';
import styles from '../components/Accounts/Users.css';
import UsersComponent from '../components/Accounts/Users';


const Users = ({ dispatch, list, total, page }) => {

    return (
        <div className={styles.normal}>
            <h2>List of Users1:</h2>
            <UsersComponent list={list} total={total} page={page}/>
        </div>
    );
};

export default connect(({ list, total, page }) => ({
    list, total, page,
}))(Users);
// export default connect()(Users);