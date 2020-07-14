import axiosClient from "./axiosClient";

const userApi = {
    register: (userData) => {
        const url = "users/register";
        return axiosClient.post(url, userData);
    },
};

export default userApi;
