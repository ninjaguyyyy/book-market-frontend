import axiosClient from "./axiosClient";

const adminApi = {
    get: (params) => {
        const url = "admin/user-list";
        return axiosClient.get(url, { params });
    },
};

export default adminApi;