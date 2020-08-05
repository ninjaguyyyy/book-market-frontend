import { GET_BOOKS, GET_CATEGORIES, GET_BOOK } from "../constants/typeRedux";

const initialState = {
    booksShop: {},
    categories: [],
    bookDetail: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, booksShop: action.payload };
        case GET_CATEGORIES:
            return { ...state, categories: action.payload };
        case GET_BOOK:
            return { ...state, bookDetail: action.payload };

        default:
            return state;
    }
}
