// import request from '../utils/request';
// import { PAGE_SIZE } from '../constants';

import fetch_dva from 'dva/fetch';
import request from "umi-request";

export type LoginParamsType = {
    username?: string;
    mobile?: string;
    email?: string;
    password: string;
    captcha?: string;
};

export function fetch(page: number ) {
    return request.get('/api/users');
}

export function login(params: LoginParamsType) {
    return request.post('/api/session', {
        requestType: "json",
        data: {
            user:{
                email: 'lizhiyong2000@gmail.com',
                password: 'password123456',
            }
        }
    });
}
