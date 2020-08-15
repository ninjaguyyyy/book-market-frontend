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
        return axiosClient.post(url, book, {
            headers: { "content-type": "multipart/form-data" },
        });
    },
    getById: (params) => {
        const url = "users/user";
        return axiosClient.get(url, { params });
    },
    comment: (body) => {
        const url = "users/comment";
        return axiosClient.post(url, body);
    },
    uploadAvatar: (formData) => {
        const url = "users/upload-avatar";
        return axiosClient.post(url, formData, {
            headers: { "content-type": "multipart/form-data" },
        });
    },
    removeAvatar: () => {
        const url = "users/remove-avatar";
        return axiosClient.get(url);
    },
};

export default userApi;
