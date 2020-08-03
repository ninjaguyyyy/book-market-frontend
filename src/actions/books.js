import { GET_BOOKS } from "../constants/typeRedux";

export async function getBooks(books) {
    return {
        type: GET_BOOKS,
        payload: books,
    };
}
