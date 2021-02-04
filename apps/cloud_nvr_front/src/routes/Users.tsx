import * as React from 'react';
import { connect } from 'dva';
import * as styles from '../components/Accounts/Users.less';
import UsersComponent from '../components/Accounts/Users';
import type { StateType } from '../models/users';
import {Dispatch} from "redux";
import {IDevicesProps} from "./Devices";

export interface IUsersProps {
    dispatch: Dispatch<any>;
    state: StateType;
};

const Users: React.FC<IUsersProps> = (props) => {
// const Users = ({ dispatch, list, total, page }) => {

    return (
        <div className={styles.normal}>
            <h2>List of Users1:</h2>
            <UsersComponent list={props.state.list} total={props.state.total} page={props.state.page}/>
        </div>
    );
};

export default connect(({ list, total, page }:StateType) => ({
    list, total, page,
}))(Users);
// export default connect()(Users);