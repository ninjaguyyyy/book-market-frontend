import {
    GET_BOOKS,
    GET_CATEGORIES,
    GET_BOOK,
    GET_BOOKS_SELLER,
    UPLOAD_BOOK,
    GET_BOOKS_STORE,
} from "../constants/typeRedux";

const initialState = {
    booksShop: {},
    categories: [],
    bookDetail: {},
    booksSeller: {},
    booksStore: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, booksShop: action.payload };
        case GET_CATEGORIES:
            return { ...state, categories: action.payload };
        case GET_BOOK:
            return { ...state, bookDetail: action.payload };
        case GET_BOOKS_SELLER:
            return { ...state, booksSeller: action.payload };
        case GET_BOOKS_STORE:
            return { ...state, booksStore: action.payload };

        // return {
        //     ...state,
        //     booksSeller: state.booksSeller.push(action.payload),
        // };

        default:
            return state;
    }
}
