import {
    LOGIN_USER,
    REGISTER_USER,
    SET_COMMENTS,
    UPDATE_AVATAR,
} from "../constants/typeRedux";

const initialState = {
    login: {
        user: {
            username: "Nguyen Huu Chi",
            avatar: "",
            address: "Sa Huynh, Quang Ngai",
        },
    },
    register: {},
    comments: [],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload };
        case LOGIN_USER:
            return { ...state, login: action.payload.data };
        case SET_COMMENTS:
            return { ...state, comments: action.payload };
        case UPDATE_AVATAR:
            return {
                ...state,
                login: {
                    ...state.login,
                    user: { ...state.login.user, avatar: action.payload },
                },
            };
        default:
            return state;
    }
}
