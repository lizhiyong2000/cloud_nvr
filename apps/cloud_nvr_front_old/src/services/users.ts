import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

import fetch_dva from 'dva/fetch';

export type LoginParamsType = {
    username?: string;
    mobile?: string;
    email?: string;
    password: string;
    captcha?: string;
};

export function fetch(page: number ) {
    return request(`/api/users`, {});
}

export function login(params: LoginParamsType) {
    return request('/api/session', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user:{
                email: 'lizhiyong2000@gmail.com',
                password: 'password123456',
            }
        })
    });
}