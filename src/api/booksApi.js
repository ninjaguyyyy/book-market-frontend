import axiosClient from "./axiosClient";

const booksApi = {
    get: (params) => {
        const url = "api/books";
        return axiosClient.get(url, { params });
    },
    getByCondition: (params) => {
        const url = "users/book-list";
        return axiosClient.get(url, { params });
    },
    getDetail: (idBook) => {
        const url = `api/books/${idBook}`;
        return axiosClient.get(url);
    },
};

export default booksApi;
