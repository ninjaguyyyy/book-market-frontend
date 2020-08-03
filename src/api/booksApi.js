import axiosClient from "./axiosClient";

const booksApi = {
    get: () => {
        const url = "api/books";
        return axiosClient.get(url);
    },
};

export default booksApi;
