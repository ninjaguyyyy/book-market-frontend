import {
    GET_BOOKS,
    GET_CATEGORIES,
    GET_BOOK,
    GET_BOOKS_STORE,
} from "../constants/typeRedux";

export async function getBooks(books) {
    return {
        type: GET_BOOKS,
        payload: books,
    };
}

export async function getCategories(categories) {
    return {
        type: GET_CATEGORIES,
        payload: categories,
    };
}

export async function getBook(book) {
    return {
        type: GET_BOOK,
        payload: book,
    };
}

export async function getBooksStore(books) {
    return {
        type: GET_BOOKS_STORE,
        payload: books,
    };
}
