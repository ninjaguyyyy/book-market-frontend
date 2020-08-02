import { REGISTER_USER, LOGIN_USER, UPDATE_USER } from "../constants/typeRedux";

export async function registerUser(userData) {
    return {
        type: REGISTER_USER,
        payload: userData,
    };
}

export async function loginUser(userData) {
    return {
        type: LOGIN_USER,
        payload: userData,
    };
}

export function updateUser(userData) {
    return {
        type: UPDATE_USER,
        payload: userData,
    };
}
