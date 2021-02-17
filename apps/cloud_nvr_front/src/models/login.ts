import { routerRedux } from 'dva/router'
import * as usersService from "../services/users";
import { Model } from 'dva';

const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

export type StateType = {
    loginLoading:boolean,
    isLogin: boolean
};

export default {
    namespace: 'login',
    state:
        {
            loginLoading:false,
            isLogin: false
        },
    subscriptions: {
        setup ({ dispatch }) {
        },
    },
    effects: {
        *login ({payload}, { call, put }) {
            console.log('payload',payload)
            yield put({ type: 'showLoginLoading' })
            // yield call(delay,2000)
            // yield put({ type: 'hideLoginLoading' })

            const data = yield call(usersService.login, { payload });
            yield put({ type: 'hideLoginLoading' })
            yield put({ type: 'login_result', payload: data });




            // yield call(delay,1000)
            yield put(routerRedux.push('/users'))
        }},
    reducers: {
        showLoginLoading (state) {
            return {
                loginLoading: true,
            }
        },
        hideLoginLoading (state) {
            return {
                loginLoading: false,
            }
        },
        login_result(state, {payload}){
            console.log("login_result:")
            console.log(state)
            console.log(payload)
            const token = payload.data.access_token

            localStorage.setItem("token", payload.data.token);
            return {
                loginLoading: false,
                isLogin: true
            }
        }
    },
} as Model;