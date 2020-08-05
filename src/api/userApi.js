import axiosClient from "./axiosClient";

const userApi = {
    register: (userData) => {
        const url = "users/register";
        return axiosClient.post(url, userData);
    },
    login: (userData) => {
        const url = "users/login";
        return axiosClient.post(url, userData);
    },
    update: (userData) => {
        const url = "users/update";
        return axiosClient.post(url, userData);
    },
    upload: (book) => {
        const url = "api/seller/upload";
        return axiosClient.post(url, book);
    },
};

export default userApi;
