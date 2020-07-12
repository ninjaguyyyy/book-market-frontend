import axios from "axios";

import { REGISTER_USER, LOGIN_USER } from "../constants/typeRedux";
import { POST_REGISTER, POST_LOGIN } from "../constants/api";

export async function registerUser(userData) {
    const res = await axios.post(`${POST_REGISTER}`, userData); // /login
    // /products set header

    return {
        type: REGISTER_USER,
        payload: res.data,
    };
}

export async function loginUser(userData) {
    const res = await axios.post(`${POST_LOGIN}`, userData);

    return {
        type: LOGIN_USER,
        payload: res.data,
    };
}
