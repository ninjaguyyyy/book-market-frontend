import {
    GET_BOOKS,
    GET_CATEGORIES,
    GET_BOOK,
    GET_BOOKS_SELLER,
    UPLOAD_BOOK,
} from "../constants/typeRedux";

const initialState = {
    booksShop: {},
    categories: [],
    bookDetail: {},
    booksSeller: [],
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
        case UPLOAD_BOOK:
            return {
                ...state,
                booksSeller: [...state.booksSeller, action.payload],
            };

        default:
            return state;
    }
}
