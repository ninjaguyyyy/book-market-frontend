import { GET_BOOKS, GET_CATEGORIES } from "../constants/typeRedux";

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
