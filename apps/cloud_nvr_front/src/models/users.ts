import * as usersService from '../services/users';

import { Model } from 'dva';

import {Location} from 'history'

export type StateType = {
    list: any[];
    total: number;
    page: number
};


export default {
    namespace: 'users',
    state: {
        list: [],
        total: 0,
        page: 0,
    },
    reducers: {
        save(state, { payload: { data } }) {
            const list = data["data"]
            const total = data["total_pages"]
            const page = data["page_number"]
            return { ...state, list, total, page };
        },
    },
    effects: {
        *fetch({ payload: { page = 1} }, { call, put }) {
            const data= yield call(usersService.fetch, { page });
            yield put({ type: 'save', payload: data });
        },
    },
    subscriptions: {
        // setup(action,error) {
        //     console.log(action);
        //     console.log(error);
        // },
        setupHistory({ dispatch, history }) {
            console.log("setup history.listen")
            return history.listen(({ pathname, search }:Location) => {
                console.log("pathname:" + pathname)
                console.log(search)
                if (pathname === '/users') {
                    dispatch({ type: 'fetch', payload: {page: 1} });
                }
            });
        },
    },
} as Model;