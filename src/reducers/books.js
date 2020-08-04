import { GET_BOOKS, GET_CATEGORIES } from "../constants/typeRedux";

const initialState = {
    booksShop: {},
    categories: [],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, booksShop: action.payload };
        case GET_CATEGORIES:
            return { ...state, categories: action.payload };

        default:
            return state;
    }
}
