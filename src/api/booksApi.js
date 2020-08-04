import axiosClient from "./axiosClient";

const booksApi = {
    get: (params) => {
        const url = "api/books";
        return axiosClient.get(url, { params });
    },
};

export default booksApi;
